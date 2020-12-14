import pandas as pd
import numpy as np
import tensorflow as tf
from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences
import json
import os
import nltk
from pprint import pprint
from konlpy.tag import Okt
from keras.models import load_model
from krwordrank.word import KRWordRank
from typing import List
okt = Okt()

frequency = 10000
def create_model(x_train, y_train, x_test, y_test,frequency):
    if os.path.isfile('model.h5'):
        model = load_model("model.h5")
    else:
        model = tf.keras.models.Sequential([
            tf.keras.layers.Dense(64, activation='relu', input_shape=(frequency,)),
            tf.keras.layers.Dense(64, activation='relu'),
            tf.keras.layers.Dense(1, activation='sigmoid')
        ])
        # 학습 프로세스 설정
        model.compile(optimizer=tf.keras.optimizers.RMSprop(lr=0.001),
                      loss=tf.keras.losses.binary_crossentropy,
                      metrics=[tf.keras.metrics.binary_accuracy]
                      )
        model.fit(x_train, y_train, epochs=10, batch_size=512)
        model.save('model.h5')

    results = model.evaluate(x_test, y_test)

    return results,model
def create_train_test_df():
    # 훈련 세트 / 테스트 세트
    train_df = pd.read_csv('./nsmc-master/ratings_train.txt', "\t")
    test_df = pd.read_csv('./nsmc-master/ratings_test.txt', "\t")
    train_df['document'] = train_df['document'].fillna('')
    test_df['document'] = test_df['document'].fillna('')
    return train_df,test_df
def tokenize(doc):
    return ['/'.join(t) for t in okt.pos(doc, norm=True, stem=True)]
def make_json_docs(train_df,test_df):
    if os.path.isfile('modeling_json/train_docs.json'):
        with open('modeling_json/train_docs.json', encoding="utf-8") as f:
            train_docs = json.load(f)
        with open('modeling_json/test_docs.json', encoding="utf-8") as f:
            test_docs = json.load(f)
    else:
        train_docs = [(tokenize(row[1]), row[2]) for row in train_df.values]
        test_docs  = [(tokenize(row[1]), row[2]) for row in test_df.values]
        # JSON 파일로 저장
        with open('modeling_json/train_docs.json', 'w', encoding="utf-8") as make_file:
            json.dump(train_docs, make_file, ensure_ascii=False, indent="\t")
        with open('modeling_json/test_docs.json', 'w', encoding="utf-8") as make_file:
            json.dump(test_docs, make_file, ensure_ascii=False, indent="\t")
    tokens = [t for d in train_docs for t in d[0]]
    text = nltk.Text(tokens, name='NMSC')
    return train_docs,test_docs,text
def make_json_text(text,frequency):
    if os.path.isfile('text.json'):
        with open('modeling_json/selected_words.json', encoding="utf-8") as f:
            selected_words = json.load(f)
    else:
        selected_words = [f[0] for f in text.vocab().most_common(frequency)]
        with open('modeling_json/selected_words.json', 'w', encoding="utf-8") as make_file:
            json.dump(selected_words, make_file, ensure_ascii=False, indent="\t")

    return selected_words
def term_frequency(doc,selected_words):
    return [doc.count(word) for word in selected_words]
def make_train_test(train_docs,test_docs,selected_words):
    train_x = [term_frequency(d,selected_words) for d, _ in train_docs]
    test_x = [term_frequency(d,selected_words) for d, _ in test_docs]
    train_y = [c for _, c in train_docs]
    test_y = [c for _, c in test_docs]

    x_train = np.asarray(train_x).astype('float32')
    x_test = np.asarray(test_x).astype('float32')

    y_train = np.asarray(train_y).astype('float32')
    y_test = np.asarray(test_y).astype('float32')
    return x_train,x_test,y_train,y_test
def predict_pos_neg(model,selected_words,review):
    token = tokenize(review)
    tf = term_frequency(token,selected_words)
    data = np.expand_dims(np.asarray(tf).astype('float32'), axis=0)
    score = float(model.predict(data))
    if(score > 0.5):
        print("[{}]는 {:.2f}% 확률로 긍정 리뷰이지 않을까 추측해봅니다.^^\n".format(review, score * 100))
    else:
        print("[{}]는 {:.2f}% 확률로 부정 리뷰이지 않을까 추측해봅니다.^^;\n".format(review, (1 - score) * 100))

def predict_test(model,selected_words,list):
    positive_list = []
    negative_list = []
    for i in range(0,35):
        token = tokenize(list[i])
        tf = term_frequency(token, selected_words)
        data = np.expand_dims(np.asarray(tf).astype('float32'), axis=0)
        score = float(model.predict(data))

        if score > 0.7:
            positive_list.append(list[i])
        else:
            negative_list.append(list[i])

    return positive_list,negative_list

def search(dirname):  # 디렉토리 속 파일 경로 리스트 가져오기 ex : ./Result/file.txt
    file_name_list = list()
    filenames = os.listdir(dirname)
    for filename in filenames:
        full_filename = os.path.join(dirname, filename)
        file_name_list.append(full_filename)
    return file_name_list
def file_read(file_name_list):  # json 으로 해당 경로 파일 가져오기
    data = list()
    for file_path in file_name_list:
        with open(file_path, 'r') as file_point:
            data.append(json.load(file_point))
    return data
def make_list():
    file_list = search('./Result_free/') # 폴더 경로만 바꿔서 사용하세요~
    data = file_read(file_list)

    wordrank_extractor = KRWordRank(
        min_count=10,  # 단어의 최소 출현 빈도수 (그래프 생성 시)
        max_length=15,  # 단어의 최대 길이
        verbose=True
    )

    beta = 0.85  # PageRank의 decaying factor beta
    max_iter = 10

    input_text = str()
    text = list()
    for content in data:
        text.append(content['text'])
        #text.append(content['text']) #게시판에 타이틀이 있으면 주석해제
        for comment in content['comment_text']:
            text.append(comment)

    input_text = ' '.join(text)

    keywords = None
    rank = ''
    graph = None
    keywords, rank, graph = wordrank_extractor.extract(text, beta, max_iter)

    return keywords, rank, graph

train_df,test_df = create_train_test_df()

train_docs,test_docs,text = make_json_docs(train_df,test_df)

selected_words = make_json_text(text,frequency)

x_train,x_test,y_train,y_test = make_train_test(train_docs,test_docs,selected_words)

results, model = create_model(x_train, y_train, x_test, y_test,frequency)

keywords, rank, graph = make_list()
list = []
for word, r in sorted(keywords.items(), key=lambda x:x[1], reverse=True)[:60]:
    list.append(word)

positive_list,negative_list = predict_test(model,selected_words,list)
with open('list/positive_list_free.json', 'w', encoding='UTF-8-sig') as file:
    file.write(json.dumps(positive_list, ensure_ascii=False))
with open('list/negative_list_free.json', 'w', encoding='UTF-8-sig') as file:
    file.write(json.dumps(negative_list, ensure_ascii=False))