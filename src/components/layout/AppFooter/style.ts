import styled from "@emotion/styled";

export const AppFooterContainer = styled.div`
  height:20%;
  padding: 10px 30px;
`
export const AppFooterListWrapper = styled.ul`
  display:flex;
`
export const AppFooterList = styled.li`
  font-size: 12px;
  margin-right:10px;
  color: rgba(0,0,0,0.5);
  :hover {
    font-weight: 700;
    color: rgba(0,0,0,0.9);
    cursor:pointer;
  }
`
export const AppFooterCardWrapper = styled.div`
  display: grid;
  grid-template-columns: 33% 33% 33%;
  margin: 30px 0;
`
export const AppFooterCard = styled.div`
  height:10%;
  display:block;
  margin: 0 5px;
`
export const AppFooterCardHeader = styled.div`
  font-size:12px;
  font-weight:700;
`
export const AppFooterCardMain = styled.div`
  margin: 10px 0;
  font-size:12px;
  color: rgba(0,0,0,0.5);
  line-height: 1.6;
`
export const AppFooterDesc = styled.p`
  margin: 30px 0 20px 0;
  font-size: 12px;
  color: rgba(0,0,0,0.5);
`
export const Link = styled.span`
  :hover {
    font-weight: 700;
    color: rgba(0,0,0,0.9);
    cursor:pointer;
  }
`