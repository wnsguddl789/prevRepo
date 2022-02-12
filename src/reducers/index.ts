import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers, AnyAction } from 'redux';
import language from './language';
import user from './user';
declare global {
  type RootState = ReturnType<typeof reducer>;
}
export interface State {
  tick: string;
}
const reducer = combineReducers({
  language: language,
  user: user,
});
// const rootReducer = combineReducers({
//   index: (state: State = { tick: 'init' }, action: AnyAction) => {
//     switch (action.type) {
//       case HYDRATE:
//         // Attention! This will overwrite client state! Real apps should use proper reconciliation.
//         return { ...state, ...action.payload };
//       case 'TICK':
//         return { ...state, tick: action.payload };
//       default:
//         return state;
//     }
//   },

// });

const rootReducer = (state: RootState | undefined, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;

    default: {
      return reducer(state, action);
    }
  }
};
export default rootReducer;
