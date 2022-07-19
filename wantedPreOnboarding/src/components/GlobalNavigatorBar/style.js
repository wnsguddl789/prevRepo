import styled from 'styled-components';

export const NavBar = styled.div`
  background-color: #fff;
  width: 100%;
  box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
`;
export const NavWrapper = styled.div`
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
export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const HamburgerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
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
  :hover {
    cursor: pointer;
  }
`;
export const Logo = styled.a`
  display: block;
  font-size: 20px;
  font-weight: 800;
  font-family: 'icomoo';
  @media (max-width: 991px) {
    position: relative;
    float: left;
  }
`;
export const HamBurgerButton = styled.button`
  margin-top: 5px;
  margin-right: 15px;
`;
export const Hamburger = styled.img`
  height: 17px;
  width: 14px;
  object-fit: contain;
`;
export const CategoryConatainer = styled.ul`
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
export const CategoryList = styled.li`
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
export const Link = styled.a`
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
export const ActionButtonContainer = styled.aside`
  height: 100%;
  padding: 9px 0;
  @media (max-width: 767px) {
    padding: 14px 0;
  }
`;
export const ButtonGroup = styled.ul`
  height: 100%;
  margin: 0;
  display: flex;
  @media (max-width: 767px) {
    margin-top: -5px;
  }
`;
export const ButtonGroupList = styled.li`
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
export const Button = styled.button`
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
export const AvatarButton = styled.button`
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  vertical-align: top;
  padding: 0;
  margin-right: 11px;
`;
export const AvatarBorder = styled.div`
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
export const AvatarImage = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-position: 50%;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url('https://avatars.githubusercontent.com/u/33216504?v=4');
`;
export const DashBoard = styled.a`
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
  :hover {
    cursor: pointer;
  }
`;
export const NewBadge = styled.span`
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
export const BetaBadge = styled.em`
  position: absolute;
  top: 10px;
  right: -5px;
  pointer-events: none;
  font-style: normal;
`;
