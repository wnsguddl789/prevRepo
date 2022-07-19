import os
import json
from krwordrank.word import KRWordRank
import pandas as pd
import pprint as pp
from wordcloud import WordCloud

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


file_list = search('./Result_depressed/')
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

    for comment in content['comment_text']:
        text.append(comment)

input_text = ' '.join(text)

keywords = None
rank = ''
graph = None
keywords, rank, graph = wordrank_extractor.extract(text, beta, max_iter)
new_dict = {}
for word, r in sorted(keywords.items(), key=lambda x:x[1], reverse=True)[:60]:
    print('%8s:\t%.4f' % (word, r))
    new_dict.update({word:r})
new_dict = sorted(new_dict.items(),key=(lambda x:x[1]),reverse=True)
#pp.pprint(new_dict)