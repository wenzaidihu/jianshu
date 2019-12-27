import * as constants from './constants';
import {fromJS} from 'immutable';

const defaultState = fromJS({
  focused: false,
  list: [],
  page: 1,
  totalpage: 1
});

export default (state = defaultState, action) => {
  switch(action.type) {
    case constants.SEARCH_FOCUS:
      return state.set('focused', true);
    case constants.SEARCH_BLUR:
      return state.set('focused', false);
    case constants.CHANGE_LIST:
      return state.set('list', action.data).set('totalPage', action.totalPage);
    default:
      return state;
  }
}
//   if (action.type === constants.SEARCH_FOCUS) {
//     // immutable对象的set方法，会结合之前immutable对象的值
//     //和设置的值，返回一个全新的对象
//     return state.set('focused', true);
//   }
//   if (action.type === constants.SEARCH_BLUR) {
//     return state.set('focused', false);
//   }
//   if (action.type === constants.CHANGE_LIST) {
//     return state.set('list', action.data);
//   }
//   return state;
// }