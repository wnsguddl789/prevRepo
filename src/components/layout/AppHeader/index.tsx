import React, { useState } from 'react';
import { useRouter } from 'next/router';
import {
  Container,
  Main,
  AppHeaerContainer,
  AppHeaderMenuWrapper,
  AppHeaderMenu,
  AppHeaderMenuList,
  SignInButton,
  AppHeaderMain,
  AppHeaderMainWrapper,
  CarouSelWrapper,
} from './style';
import Modal from '../../Modal';
import IMG from './social.jpeg';
import AppFooter from '../AppFooter';
import CateGory from './CateGory';
import CarouSel from '../../CarouSel';
// import Search from './Search'
const AppHeaer: React.FC = ({ children }) => {
  const [isLoggedIn] = useState(true);
  const [isCarouSel] = useState(true);

  const router = useRouter();

  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => {
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
  };
  return (
    <Container>
      <AppHeaderMenuWrapper>
        {isLoggedIn ? (
          <AppHeaderMenu>
            <AppHeaderMenuList>마이페이지</AppHeaderMenuList>
            <AppHeaderMenuList>주문배송조회</AppHeaderMenuList>
            <AppHeaderMenuList>고객센터</AppHeaderMenuList>
            <AppHeaderMenuList>로그아웃</AppHeaderMenuList>
          </AppHeaderMenu>
        ) : (
          <AppHeaderMenu>
            <SignInButton onClick={openModal}>로그인</SignInButton>
            {modalVisible && (
              <Modal
                ModalTitle={'로그인'}
                width={360}
                visible={modalVisible}
                closable={true}
                maskClosable={true}
                onClose={closeModal}
              ></Modal>
            )}
          </AppHeaderMenu>
        )}
      </AppHeaderMenuWrapper>
      <AppHeaerContainer>
        <AppHeaderMain>
          <AppHeaderMainWrapper>
            <span onClick={() => router.push('')}>메인화면</span>
            <span>Heart Ring</span>
            {/* <Search/> */}
          </AppHeaderMainWrapper>
        </AppHeaderMain>
        <CateGory />
        {isCarouSel ? (
          <CarouSelWrapper>
            <CarouSel slides={[IMG, IMG, IMG, IMG, IMG]} />
          </CarouSelWrapper>
        ) : null}
      </AppHeaerContainer>
      <Main>{children}</Main>
      <AppFooter />
    </Container>
  );
};

export default AppHeaer;
