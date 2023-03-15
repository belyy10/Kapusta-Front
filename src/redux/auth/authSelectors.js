export const selectUserEmail = state => state.auth.user.email;
export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectUserBalance = state => state.auth.user.balance;
export const selectIsNeedRefreshUser = state => state.auth.isNeedRefreshUser;
