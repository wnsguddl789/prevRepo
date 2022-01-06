import styled from "@emotion/styled";
import Image from "next/image";
export const Container = styled.div`
  width: 100vw;
`

export const Main = styled.main`
  height: 100vh;
`

export const AppHeaerContainer = styled.div`
  width: 100%;
  height: 100vh;
`
export const AppHeaderMenu = styled.ul`
  height: 1.1vh;
  list-style:none;
  display:flex;
  justify-content: end;
  border-bottom: 1px solid rgba(0,0,0,0.2);
  padding: 10px 5px;
  
`
export const AppHeaderMenuList = styled.li`
  font-size: 12px;
  color: rgba(0,0,0,0.5);
  margin-left: 10px;
  :hover {
    font-weight: 700;
    color: rgba(0,0,0,0.9);
    cursor: pointer;
  }
`
export const SignInButton = styled.button`
  width: 100px;
  font-size: 12px;
  color: rgba(0,0,0,0.5);
  border: none;

`
export const AppHeaderMain = styled.div`
  margin:auto;
  padding: 0 10%;
  
`
export const AppHeaderMainWrapper = styled.div`
  height: 2vh;
  margin: 20px 0 0 0;
  display:flex;
  flex-direction:row;
  align-items: center;
  flex-grow: 1;
  justify-content: space-between;
`
export const NextImage = styled(Image)`
  border-radius: 20px;
`
export const CarouSelWrapper = styled.div`
  width: 100%;
  height: 78.5vh;
`