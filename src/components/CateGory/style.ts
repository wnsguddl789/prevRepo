import styled from "@emotion/styled";

export const CateGoryContainer = styled.div`
  width: 100%;
  height:5vh;
  margin:auto;
  border-bottom: 1px solid rgba(0,0,0,0.2);
  display:flex;
`

export const CateGoryListWrapper = styled.ul`
  width: 100%;
  margin: 30px 0;
  display:flex;
  justify-content: center;
  
`
export const CateGoryList = styled.li`
  margin: 10px 40px;
  color: rgba(0,0,0,0.5);
  font-size: 14px;
  :hover {
    font-weight: 700;
    color: rgba(0,0,0,0.9);
  }
`