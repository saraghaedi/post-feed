const initialState = {
  loading: true,
  count: null,
  posts: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "feed/startLoading": {
      return {
        ...state,
        loading: true,
      };
    }

    case "feed/postsFetched": {
      return {
        loading: false,
        count: action.payload.count,
        posts: [...state.posts, ...action.payload.rows],
      };
    }
    default: {
      return state;
    }
  }
}
