import styled from 'styled-components';
import { MdSearch, MdAlarm } from 'react-icons/md';
const App = () => {
  return (
    <Container>
      <NavContainer>
        <HamburgerContainer>
          <Hamburger src="https://static.wanted.co.kr/images/icon-menu.png" />
          <Logo>wanted</Logo>
        </HamburgerContainer>
        <CategoryConatainer>
          <CategoryList>채용</CategoryList>
          <CategoryList>이벤트</CategoryList>
          <CategoryList>직군별 연봉</CategoryList>
          <CategoryList>이력서</CategoryList>
          <CategoryList>커뮤니티</CategoryList>
          <CategoryList>프리랜서</CategoryList>
          <CategoryList>AI 합격예측</CategoryList>
        </CategoryConatainer>
        <ActionButtonContainer>
          <FirstGroup>
            <SearchButton />
            <BellButton />
            <Alarm>N</Alarm>
            <Profile src="https://lh3.googleusercontent.com/a-/AOh14GgF9zCTT0LhtPSsu1AZvW2qLwAen949lHU5sy-AvZM=s96-c" alt="profile" />
            <Alarm>N</Alarm>
          </FirstGroup>
          <Divider />
          <SecondGroup>
            <ComapnyButton>기업서비스</ComapnyButton>
          </SecondGroup>
        </ActionButtonContainer>
      </NavContainer>
    </Container>
  );
};

export default App;

const Container = styled.div`
  width: 100%;
  margin: 20px 0;
  border-bottom: 2px solid #f8f8f8;
  @media screen and (max-width: 500px) {
  }
`;
const NavContainer = styled.div`
  width: 70%;
  margin: auto;
  display: grid;
  grid-template-columns: 10% 60% 30%;
  box-sizing: border-box;
  grid-gap: 10px;
  align-items: center;
`;

const HamburgerContainer = styled.div`
  display: flex;
  margin: auto;
  padding: 0 20px;
  align-items: center;
`;
const Logo = styled.span`
  padding: 0 10px;
  font-weight: 800;
  :hover {
    cursor: pointer;
  }
`;
const Hamburger = styled.img`
  height: 20px;
  width: 20px;
`;
const CategoryConatainer = styled.ul`
  display: flex;
  list-style: none;
  height: 100%;
  justify-content: space-between;
  padding: 0 20px;
`;
const CategoryList = styled.li`
  font-size: 12px;
  padding: 0 20px;
  height: 100%;
  font-weight: 500;
  :hover {
    border-bottom: 3px solid skyblue;
    cursor: pointer;
  }
`;
const ActionButtonContainer = styled.div`
  display: flex;
  align-self: flex-start;
  padding: 0 20px;
  margin: auto;
`;
const FirstGroup = styled.div`
  display: flex;
  justify-items: center;
  align-self: flex-start;
`;
const SearchButton = styled(MdSearch)`
  width: 25px;
  height: 25px;
  color: rgba(0, 0, 0, 0.6);
  padding: 0 20px 0 0;
  :hover {
    cursor: pointer;
  }
`;
const BellButton = styled(MdAlarm)`
  width: 25px;
  height: 25px;
  color: rgba(0, 0, 0, 0.6);
  padding: 0 20px 0 0;
  :hover {
    cursor: pointer;
  }
`;
const Profile = styled.img`
  border: 1px solid rgba(0, 0, 0, 0.3);
  padding: 1px;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  margin: 0 20px 0 0;
  :hover {
    cursor: pointer;
  }
`;
const Divider = styled.div`
  height: 10px;
  border-left: 1px solid rgba(0, 0, 0, 0.6);
`;
const SecondGroup = styled.div`
  align-items: center;
`;
const ComapnyButton = styled.button`
  font-size: 10px;
  padding: 5px 20px;
  background: white;
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.3);
  margin-left: 30px;
  color: rgba(0, 0, 0, 0.6);
  :hover {
    cursor: pointer;
  }
`;
const Alarm = styled.div`
  width: 15px;
  height: 15px;
  line-height: 15px;
  top: -5px;
  left: -30px;
  position: relative;
  border-radius: 3px;
  background-color: #3366ff;
  color: white;
  font-size: 12px;
  padding: 1px;
  font-weight: 600;
  text-align: center;
`;
