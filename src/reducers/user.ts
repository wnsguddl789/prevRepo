import { AnyAction } from 'redux';
export const initialState = {
  isLoggedIn: false, // 왜냐면 난 한국인이니까..
};

export const LoginAction = () => {
  window.sessionStorage.setItem('isLoggedIn', 'true');
  return {
    type: 'LOGIN',
  };
};
export const LogOutAction = () => {
  window.sessionStorage.setItem('isLoggedIn', 'false');
  return {
    type: 'LOGOUT',
  };
};
const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        isLoggedIn: true,
      };
    case 'LOGOUT':
      return {
        ...state,
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default reducer;
