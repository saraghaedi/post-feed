export const selectPost = (reduxState) => reduxState.postPage.post;

export const selectComments = (reduxState) => reduxState.postPage.comments;

export const selectLoading = (reduxState) => reduxState.postPage.loading;
