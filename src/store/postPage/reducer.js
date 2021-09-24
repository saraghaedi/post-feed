const initialState = {
  loading: true,
  post: null,
  comments: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "POSTPAGE/startLoading": {
      return {
        ...state,
        loading: true,
      };
    }
    case "POSTPAGE/postFullyFetched": {
      return {
        loading: false,
        post: action.payload.post,
        comments: action.payload.comments,
      };
    }
    default: {
      return state;
    }
  }
}
