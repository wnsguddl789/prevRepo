import { AnyAction } from 'redux';
export const initialState = {
  language: 'ko', // 왜냐면 난 한국인이니까..
};

interface ACTION_TYPE {
  type: string;
  data: string;
}

export const ChangeAction = (data: string) => {
  return {
    type: 'CHAHGE_LANGUAGE',
    data,
  };
};

const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case 'CHAHGE_LANGUAGE':
      return {
        ...state,
        language: action.data,
      };
    default:
      return state;
  }
};

export default reducer;
