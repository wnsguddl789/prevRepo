import React, {useState} from "react";
import { useRouter } from "next/router";
import {
  Container,
  Main,
  AppHeaerContainer,
  AppHeaderMenu,
  AppHeaderMenuList,
  SignInButton,
  AppHeaderMain,
  AppHeaderMainWrapper,
  NextImage,
} from './style'
import CateGory from '../../CateGory'
import CarouSel from "../../CarouSel";
import Search from '../../Search'
const AppHeaer:React.FC = ({children}) => {
  const [isLoggedIn] = useState(false);
  const [isCarouSel] = useState(true);
 
  const router = useRouter();

  return (
   <Container>
     <AppHeaerContainer>
      {
        isLoggedIn
          ? (
            <AppHeaderMenu>
              <AppHeaderMenuList>박준형님</AppHeaderMenuList>
              <AppHeaderMenuList>박준형님</AppHeaderMenuList>
              <AppHeaderMenuList>박준형님</AppHeaderMenuList>
              <AppHeaderMenuList>박준형님</AppHeaderMenuList>
              <AppHeaderMenuList>박준형님</AppHeaderMenuList>
            </AppHeaderMenu>
          )
          : (
            <AppHeaderMenu>
              <SignInButton>로그인</SignInButton>
            </AppHeaderMenu>
          )
      }
      <AppHeaderMain>
        <AppHeaderMainWrapper>
          <span 
            onClick={() => router.push('')}
          >메인화면</span>
          <span>로고</span>
          <Search/>
        </AppHeaderMainWrapper>
      </AppHeaderMain>
      <CateGory/>
      {
        isCarouSel
        ? <CarouSel/>
        : null
      }
     </AppHeaerContainer>
     <Main>{children}</Main>
   </Container> 
  )
}

export default AppHeaer