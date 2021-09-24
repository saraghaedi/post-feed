import axios from "axios";
const API_URL = `https://codaisseur-coders-network.herokuapp.com/posts`;

export function startLoading() {
  return {
    type: "feed/startLoading",
  };
}

export function postsFetched(morePosts) {
  return {
    type: "feed/postsFetched",
    payload: morePosts,
  };
}

export async function fetchNext5Posts(dispatch, getState) {
  dispatch(startLoading);
  const offset = getState().feed.posts.length;
  const response = await axios.get(`${API_URL}?limit=5&offset=${offset}`);
  dispatch(postsFetched(response.data));
}
