import styled from 'styled-components';
const GlobalNavigatorBar = () => {
  return (
    <NavBar>
      <NavWrapper>
        <NavContainer>
          <HamburgerContainer>
            <HamBurgerButton>
              <Hamburger src="https://static.wanted.co.kr/images/icon-menu.png" />
            </HamBurgerButton>

            <Logo>wanted</Logo>
          </HamburgerContainer>
          <CategoryConatainer>
            <CategoryList isBig={false} isSmall={true}>
              <Link>홈</Link>
            </CategoryList>
            <CategoryList isBig={true} isSmall={true}>
              <Link>채용</Link>
            </CategoryList>
            <CategoryList isBig={true} isSmall={true}>
              <Link>이벤트</Link>
            </CategoryList>
            <CategoryList isBig={true} isSmall={false}>
              <Link>직군별 연봉</Link>
            </CategoryList>
            <CategoryList isBig={true} isSmall={false}>
              <Link>이력서</Link>
            </CategoryList>
            <CategoryList isBig={true} isSmall={false}>
              <Link>커뮤니티</Link>
              <BetaBadge>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="11" viewBox="0 0 18 11">
                  <g
                    fill="none"
                    fillRule="evenodd"
                    fontFamily="AppleSDGothicNeo-SemiBold, Apple SD Gothic Neo"
                    fontSize="9"
                    fontWeight="500"
                  >
                    <g fill="#36F">
                      <g>
                        <g>
                          <g>
                            <g>
                              <g>
                                <g>
                                  <text transform="translate(-931.000000, -13.000000) translate(224.000000, 7.000000) translate(210.000000, 6.000000) translate(350.000000, 0.000000) translate(147.000000, 0.000000)">
                                    <tspan x="0" y="8">
                                      New
                                    </tspan>
                                  </text>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </BetaBadge>
            </CategoryList>
            <CategoryList isBig={true} isSmall={false}>
              <Link>프리랜서</Link>
            </CategoryList>
            <CategoryList isBig={true} isSmall={false}>
              <Link>AI 합격예측</Link>
              <BetaBadge>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="11" viewBox="0 0 18 11">
                  <g
                    fill="none"
                    fillRule="evenodd"
                    fontFamily="AppleSDGothicNeo-SemiBold, Apple SD Gothic Neo"
                    fontSize="9"
                    fontWeight="500"
                  >
                    <g fill="#36F">
                      <g>
                        <g>
                          <g>
                            <g>
                              <g>
                                <g>
                                  <text transform="translate(-931.000000, -13.000000) translate(224.000000, 7.000000) translate(210.000000, 6.000000) translate(350.000000, 0.000000) translate(147.000000, 0.000000)">
                                    <tspan x="0" y="8">
                                      New
                                    </tspan>
                                  </text>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </BetaBadge>
            </CategoryList>
          </CategoryConatainer>
          <ActionButtonContainer>
            <ButtonGroup>
              <ButtonGroupList isVisible={true} isLeftDivison={false} isBig={true} isSmall={true} isAvatar={false}>
                <Button>
                  <svg xmlns="https://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                    <defs>
                      <path
                        id="qt2dnsql4a"
                        d="M15.727 17.273a.563.563 0 10.796-.796l-4.875-4.875-.19-.165a.563.563 0 00-.764.028 5.063 5.063 0 111.261-2.068.562.562 0 101.073.338 6.188 6.188 0 10-1.943 2.894l4.642 4.644z"
                      ></path>
                    </defs>
                    <g fill="none" fillRule="evenodd">
                      <use fill="#333" fillRule="nonzero" stroke="#333" strokeWidth=".3" xlinkHref="#qt2dnsql4a"></use>
                    </g>
                  </svg>
                </Button>
              </ButtonGroupList>
              <ButtonGroupList isVisible={true} isLeftDivison={false} isBig={true} isSmall={true} isAvatar={false}>
                <Button>
                  <svg xmlns="https://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                    <defs>
                      <path
                        id="bpnpn3yn0a"
                        d="M7.554 14.813h3.183a1.689 1.689 0 01-3.183 0zm1.592 2.25a2.813 2.813 0 002.812-2.813.563.563 0 00-.562-.563h-7.5c-.31 0-.541-.014-.699-.04.018-.036.04-.077.066-.123.036-.065.354-.605.46-.8.477-.875.735-1.676.735-2.599V6.75c0-2.656 2.057-4.688 4.688-4.688 2.63 0 4.687 2.032 4.687 4.688v3.375c0 .923.258 1.724.736 2.6.106.194.424.734.46.799.026.046.047.087.065.123-.157.026-.389.04-.698.04a.564.564 0 000 1.126c1.263 0 1.896-.221 1.896-1.002 0-.26-.092-.494-.28-.833-.045-.083-.361-.619-.456-.792-.395-.724-.598-1.355-.598-2.061V6.75c0-3.28-2.563-5.813-5.812-5.813S3.333 3.47 3.333 6.75v3.375c0 .706-.203 1.337-.598 2.06-.094.174-.41.71-.456.793-.188.339-.279.572-.279.833 0 .78.632 1.002 1.896 1.002H6.39a2.813 2.813 0 002.756 2.25z"
                      ></path>
                    </defs>
                    <g fill="none" fillRule="evenodd">
                      <g transform="translate(-1079 -16) translate(224 7) translate(855 9)">
                        <mask id="1dencd96ob" fill="#fff">
                          <use xlinkHref="#bpnpn3yn0a"></use>
                        </mask>
                        <use fillRule="nonzero" stroke="currentColor" strokeWidth=".3" xlinkHref="#bpnpn3yn0a"></use>
                        <g fill="currentColor" mask="url(#1dencd96ob)">
                          <path d="M0 0H18V18H0z"></path>
                        </g>
                      </g>
                    </g>
                  </svg>
                </Button>
              </ButtonGroupList>
              <ButtonGroupList isVisible={true} isLeftDivison={false} isBig={true} isSmall={false} isAvatar={true}>
                <AvatarButton>
                  <AvatarBorder>
                    <AvatarImage />
                  </AvatarBorder>
                </AvatarButton>
                <NewBadge>
                  <svg width="5" height="5" viewBox="0 0 6 6">
                    <g fill="#fff">
                      <path
                        d="M6.647 11L6.647 7.259 6.688 7.259 9.158 11 11 11 11 5 9.353 5 9.353 8.357 9.322 8.357 7.089 5 5 5 5 11z"
                        transform="translate(-123 -375) translate(20 365) translate(98 5)"
                      ></path>
                    </g>
                  </svg>
                </NewBadge>
              </ButtonGroupList>
              <ButtonGroupList isVisible={false} isLeftDivison={false} isBig={false} isSmall={true} isAvatar={false}>
                <Button>
                  <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <path
                        d="M9 7.5a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 9 7.5zm5.05 0a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 14.05 7.5zM4 7.5a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 4 7.5z"
                        id="a"
                      ></path>
                    </defs>
                    <g fill="none" fillRule="evenodd">
                      <mask id="b" fill="#fff">
                        <use xlinkHref="#a"></use>
                      </mask>
                      <use fill="#333" xlinkHref="#a"></use>
                      <g mask="url(#b)" fill="#333">
                        <path d="M0 0h18v18H0z"></path>
                      </g>
                    </g>
                  </svg>
                </Button>
              </ButtonGroupList>
              <ButtonGroupList isVisible={true} isLeftDivison={true} isBig={true} isSmall={false} isAvatar={false}>
                <DashBoard>기업 서비스</DashBoard>
              </ButtonGroupList>
            </ButtonGroup>
          </ActionButtonContainer>
        </NavContainer>
      </NavWrapper>
    </NavBar>
  );
};

export default GlobalNavigatorBar;

const NavBar = styled.div`
  width: 100%;
  background-color: #fff;
  box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
`;
const NavWrapper = styled.div`
  position: relative;
  max-width: 1060px;
  height: 50px;
  @media (min-width: 1200px) {
    width: 87.72%;
    margin: 0 auto;
    height: 50px;
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    margin: 0 auto;
    height: 50px;
    width: 90%;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    height: 110px;
    margin: 0 auto;
    width: 90%;
  }
  @media (max-width: 767px) {
    height: 110px;
    width: 100%;
  }
`;
const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
`;

const HamburgerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  @media (max-width: 991px) {
    padding: 0px 0;
    height: 60px;
    width: 100%;
    justify-content: left;
  }
  @media (max-width: 767px) {
    height: 60px;
    width: 100%;
    padding: 0px 20px;
  }
`;
const Logo = styled.a`
  display: block;
  font-size: 17px;
  font-weight: 800;
  font-family: 'icomoo';
  @media (max-width: 991px) {
    position: relative;
    float: left;
  }
`;
const HamBurgerButton = styled.button`
  margin-top: -2px;
  margin-right: 15px;
`;
const Hamburger = styled.img`
  height: 17px;
  width: 14px;
  object-fit: contain;
`;
const CategoryConatainer = styled.ul`
  height: inherit;
  text-align: center;
  display: flex;
  margin: 0;
  @media (min-width: 992px) and (max-width: 1100px) {
    display: flex;
    flex: 1 1;
    justify-content: space-around;
    justify-content: space-evenly;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    justify-content: flex-start;
    /* margin-right: 30px; */
  }
  @media (max-width: 767px) {
    float: left;
  }
`;
const CategoryList = styled.li`
  position: relative;
  vertical-align: middle;
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  padding: 15px;
  display: inline-block;
  :hover {
    cursor: pointer;
    box-shadow: inset 0 -2px #258bf7;
  }
  ::after {
    height: 100%;
    content: '';
    display: inline-block;
    vertical-align: middle;
  }
  @media (min-width: 768px) {
    display: ${(props) => (props.isBig ? 'block' : 'none')};
  }
  @media (max-width: 767px) {
    display: ${(props) => (props.isSmall ? 'block' : 'none')};
  }
`;
const Link = styled.a`
  position: relative;
  vertical-align: middle;
  font-size: 14px;
  font-weight: 600;
  @media (min-width: 992px) and (max-width: 1199px) {
    box-shadow: none;
  }
  @media (min-width: 992px) and (max-width: 1100px) {
    font-size: 13px;
    padding: 15px 0;
  }
  @media (max-width: 767px) {
    padding: 11px 10px 19px;
  }
`;
const ActionButtonContainer = styled.aside`
  height: 100%;
  padding: 9px 0;
  @media (max-width: 767px) {
    padding: 14px 0;
  }
`;
const ButtonGroup = styled.ul`
  height: 100%;
  margin: 0;
  display: flex;
  @media (max-width: 767px) {
    margin-top: -5px;
  }
`;
const ButtonGroupList = styled.li`
  position: relative;
  height: 100%;
  vertical-align: middle;
  align-items: center;
  // 아바타 인가?
  display: ${(props) => (props.isAvatar || props.isLeftDivison ? 'inline-flex' : 'inline-block')};
  flex-direction: ${(props) => (props.isAvatar ? 'row' : 'column')};
  align-items: ${(props) => (props.isAvatar ? 'center' : null)};

  @media (min-width: 992px) {
    display: ${(props) => (props.isBig ? 'block' : 'none')};
  }
  @media (max-width: 991px) {
    display: ${(props) => (props.isSmall ? 'block' : 'none')};
  }
  ${(props) => {
    if (props.isLeftDivison) {
      return `
      margin-right: 0px;
        ::before{
          display: inline-block;
          content: "";
          width: 1px;
          height: 10px;
          background-color: #e1e2e3;
          margin: auto 10px;
        }
      `;
    } else {
      return `
        margin-right: 5px;
      `;
    }
  }}
`;
const Button = styled.button`
  height: 100%;
  padding: 0 5px;
  font-size: 14px;
  color: #333;
  font-weight: 600;
  line-height: 1;
  position: relative;
  margin-top: 5px;
  @media (min-width: 1200px) {
    padding: 0 10px;
  }
`;
const AvatarButton = styled.button`
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  vertical-align: top;
  padding: 0;
  margin-right: 11px;
`;
const AvatarBorder = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid #e1e2e3;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
const AvatarImage = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url('https://avatars.githubusercontent.com/u/33216504?v=4');
`;
const DashBoard = styled.a`
  font-size: 13px;
  color: #666;
  line-height: 30px;
  height: 28px;
  border: 1px solid #e1e2e3;
  border-radius: 15px;
  padding: 0 10px;
  margin-left: 15px;
  font-weight: 400;

  display: inline-block;
  @media (min-width: 992px) and (max-width: 1199px) {
    margin: 0;
  }
`;
const NewBadge = styled.span`
  position: absolute;
  top: -2px;
  left: 22px;
  padding: 0 !important;
  display: inline-flex;
  width: 16px;
  height: 16px;
  background: #36f;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
`;
const BetaBadge = styled.em`
  position: absolute;
  top: 10px;
  right: -5px;
  pointer-events: none;
  font-style: normal;
`;
