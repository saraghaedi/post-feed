export const selectAccessToken = (reduxState) => reduxState.auth.accessToken;

export const selectProfile = (reduxState) => reduxState.auth.me;
