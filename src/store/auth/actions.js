import axios from "axios";
const API_URL = `https://codaisseur-coders-network.herokuapp.com`;

export const sendToken = (logindata) => ({
  type: "auth/sendtoken",
  payload: logindata,
});

export function logout() {
  return function thunk(dispatch, getState) {
    dispatch({ type: "auth/logout" });
    localStorage.removeItem("token");
  };
}

export function bootstrapLoginState() {
  return async function thunk(dispatch, getstate) {
    const token = localStorage.getItem("token");
    const profileresponse = await axios.get(`${API_URL}/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch(
      sendToken({
        token: token,
        profile: profileresponse.data,
      })
    );
  };
}

// A thunk creator
export function login(email, password) {
  // Return the thunk itself, i.e. a function
  return async function thunk(dispatch, getState) {
    const loginResponse = await axios.post(`${API_URL}/login`, {
      email: email,
      password: password,
    });

    const profileresponse = await axios.get(`${API_URL}/me`, {
      headers: {
        Authorization: `Bearer ${loginResponse.data.jwt}`,
      },
    });

    dispatch(
      sendToken({
        token: loginResponse.data.jwt,
        profile: profileresponse.data,
      })
    );
    localStorage.setItem("token", `${loginResponse.data.jwt}`);
  };
}
