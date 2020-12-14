## [학생상담센터] 학생상담센터 빅데이터 공모전 <br>(명지대학교 에브리타임 정신건강 탐구)
## 1.INFO

<img src="https://www.mju.ac.kr/CrossEditor/binary/images/000016/[%ED%8F%AC%EC%8A%A4%ED%84%B0]%ED%95%99%EC%83%9D%EC%83%81%EB%8B%B4%EC%84%BC%ED%84%B0_%EB%B9%85%EB%8D%B0%EC%9D%B4%ED%84%B0_%EA%B3%B5%EB%AA%A8%EC%A0%84.jpg">

## 2.버전 정보
<ul>
  <li>konlpy                 0.5.2</li>
  <li>selenium               3.141.0</li>
  <li>tensorflow             2.3.1</li>
  <li>wordcloud              1.8.1</li>
  <li>Python 3.5.6 :: Anaconda</li>
</ul>
## 3.프로젝트 개요
<ul>
  <li><a href="https://everytime.kr/">명지대학교 에브리타임</a>의 자유게시판, 우울게시판에서 게시글의 내용을 크롤링합니다.</li>
  <li><a href="https://github.com/e9t/nsmc"<b>Naver sentiment movie corpus</b></a> 데이터셋을 이용하였다</li>
  <ul>
    <li>영화리뷰중 영화당 100개의 리뷰</li>
    <li>데이터의 개수 : 200,000개(train : 150,000 , test : 50,000)</li>
    <li>1점 ~ 10점 까지의 평점중 5~8점(중립적)을 제외하고 분류하였다</li>
    <li>부정 1~4점 / 긍정 9~10점</li>
    <li>칼럼정보 : id, document, label</li>
  </ul>
  <li>모델링 방법</li>
  <ul>
    <li>Input Layer 1개 ReLU 함수 사용</li>
    <li>Hidden Layers 1개 ReLU 함수 사용</li>
    <li>Output Layer 1개 Sigmoid 함수 사용</li>
  </ul>
</ul>
## 4.주요코드 설명
