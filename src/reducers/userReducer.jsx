const INITIAL_STATE = {
  user: {},
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'DEFAULT':
      return {
        ...state, user: { ...action.payload },
      };
    default:
      return state;
  }
};

export default userReducer;
