const initialState = {
  me: null, // the logged-in user
  accessToken: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "auth/sendtoken": {
      return {
        me: action.payload.profile,
        accessToken: action.payload.token,
      };
    }
    case "auth/logout": {
      return {
        ...initialState,
      };
    }
    default: {
      return state;
    }
  }
}
