from selenium import webdriver
from bs4 import BeautifulSoup
from collections import defaultdict
import time
import datetime
import os
import json
from krwordrank.word import KRWordRank
from wordcloud import WordCloud


def tree():
    return defaultdict(tree)


driver = webdriver.Chrome('./chromedriver')
driver.implicitly_wait(10)
driver.get('https://everytime.kr/login')

# 접속
driver.find_element_by_name('userid').send_keys('wnsguddl789')
driver.find_element_by_name('password').send_keys('azxs741')
driver.find_element_by_xpath('//*[@class="submit"]/input').click()  # 로그인 버튼
time.sleep(2)
driver.find_element_by_xpath('//*[@id="submenu"]/div/div[2]/ul/li[2]/a').click()  # 자유게시판 클릭

everytime_link = list()  # 링크 리스트
fail_link = list()  # 실패 리스트
page_number = 2  # 맨 처음으로 들어오는 페이지가 이미 1페이지를 긁어오기때문에 2페이지부터 넣음
content_number = 0

if not os.path.isdir("./Result_free/"): #자유게시판 Result_free 폴더 있는지 판단 없을시 생성
    os.mkdir("./Result_free/")

for i in range(1, 10):
    time.sleep(0.5)
    html = driver.page_source  # 보고있는 페이지를 가져옴 (1페이지를 여기서 긁음)
    soup = BeautifulSoup(html, 'html.parser')

    content = soup.findAll('article')

    for url in content:
        find_url = url.find('a', attrs={'class', 'article'}).get('href')
        everytime_link.append(find_url)
    time.sleep(0.5)
    driver.get('https://everytime.kr/377399/p/' + str(page_number))  # 자유게시판 url # ex) 자유게시판의 고유 번호 = 377399

    page_number = page_number + 1  # 다음 페이지로 넘어가기(한 페이지당 20개의 게시글)

with open('./everytime_link_free.txt', 'w') as fileobject:  # 각 게시글 링크 저장
    for join_link in everytime_link:
        fileobject.write(join_link)
        fileobject.write('\n')

for url in everytime_link:

    time_now = datetime.datetime.now()  # 현재 시간 저장
    json_data = dict()
    comment_text = list()
    comment_time = list()
    json_data['comment_text'] = list()
    json_data['comment_time'] = list()

    try:
        driver.get('https://everytime.kr' + url)
        time.sleep(0.1)

        html = driver.page_source
        soup = BeautifulSoup(html, 'html.parser')
        title = soup.find('h2', attrs={'class', 'large'}).get_text()  # 제목
        text = soup.find('p', attrs={'class', 'large'}).get_text()  # 내용
        text_time = soup.find('time', attrs={'class', 'large'}).get_text()  # 날짜
        try:
            comment = soup.findAll('article')

            for content in comment:
                comment_text.append(content.find('p').get_text())
                comment_time.append(content.find('time').get_text())
        except:
            pass  # 댓글없음

        json_data['title'] = title
        json_data['text'] = text
        json_data['tex_time'] = text_time
        json_data['now_time'] = str(time_now)

        json_data['comment_text'] = comment_text
        json_data['comment_time'] = comment_time

    except Exception as e:
        print(e)
        fail_link.append(url)
        continue

    with open('./Result_free/' + 'text' + str(content_number) + '.txt', 'w') as fileobject:
        json.dump(json_data, fileobject)
        content_number = content_number + 1

with open('./fail_url2.txt', 'w') as fileobject:
    for join_link in fail_link:
        fileobject.write(join_link)
        fileobject.write('\n')

driver.close()


