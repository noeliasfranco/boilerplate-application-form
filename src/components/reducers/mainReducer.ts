const mainReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'nextStep': {
      return { ...state, step: state.step += 1 };
    }
    case 'previousStep': {
      return { ...state, step: state.step -= 1 };
    }
    default: {
      return state;
    }
  }
};
export default mainReducer;
