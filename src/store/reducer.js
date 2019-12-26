const defaultState = {
  focused: false
};

export default (state = defaultState, action) => {
  if (action.type === 'search-focus') {
    return {
      focused: true
    }
  }
  if (action.type === 'search-blur') {
    return {
      focused: false
    }
  }
  return state;
}