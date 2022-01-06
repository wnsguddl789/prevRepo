import React from 'react'
import {
  AppFooterContainer,
  AppFooterListWrapper,
  AppFooterList,
  AppFooterCardWrapper,
  AppFooterCard,
  AppFooterCardHeader,
  AppFooterCardMain,
  AppFooterDesc,
  Link
} from './style'
const AppFooter = () => {
  return (
    <AppFooterContainer>
      <AppFooterListWrapper>
        <AppFooterList>네이버 약관</AppFooterList>
        <AppFooterList>네이버 페이 약관</AppFooterList>
        <AppFooterList>전자금융거래 이용약관</AppFooterList>
        <AppFooterList>개인정보처리 방침</AppFooterList>
        <AppFooterList>책임의 한계와 법적고지</AppFooterList>
        <AppFooterList>청소년보호정책</AppFooterList>
        <AppFooterList>지식재산권신고센터</AppFooterList>
        <AppFooterList>안전거래 가이드</AppFooterList>
        <AppFooterList>쇼핑&페이 고객센터</AppFooterList>
      </AppFooterListWrapper>
      <AppFooterCardWrapper>
        <AppFooterCard>
          <AppFooterCardHeader>네이버(주)</AppFooterCardHeader>
          <AppFooterCardMain>
            사업자등록번호 220-81-62517<br/> 
            통신판매업신고번호 2006-경기성남-0692호<br/>
            대표이사 한성숙 <br/>
            경기도 성남시 분당구 불정로 6 네이버 그린팩토리 13561<br/>
            전화 1588-3819 이메일 helpcustomer@naver.com <br/>
            <Link>사업자등록정보 확인</Link><br/>
            호스팅 서비스 제공 : NAVER Cloud
          </AppFooterCardMain>
        </AppFooterCard>
        <AppFooterCard>
          <AppFooterCardHeader>고객센터</AppFooterCardHeader>
          <AppFooterCardMain>
            강원도 춘천시 퇴계로 89 강원전문건설회관<br/>
            전화 1588-3819전화전클릭<br/>
            결제도용신고 1588-3816<br/>
            <Link>1:1문의 바로가기</Link>
          </AppFooterCardMain>
        </AppFooterCard>
        <AppFooterCard>
          <AppFooterCardHeader>전자금융거래 분쟁처</AppFooterCardHeader>
          <AppFooterCardMain>
            전화 1588-3819<br/>
            <Link>1:1문의 바로가기</Link>
          </AppFooterCardMain>
        </AppFooterCard>
      </AppFooterCardWrapper>
      <AppFooterDesc>네이버㈜는 통신판매중개자이며, 통신판매의 당사자가 아닙니다. 상품, 상품정보, 거래에 관한 의무와 책임은 판매자에게 있습니다. <Link>자세히보기</Link></AppFooterDesc>
    </AppFooterContainer>
  )
}

export default AppFooter