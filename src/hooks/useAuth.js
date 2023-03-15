import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectUserEmail,
  selectIsRefreshing,
  selectUserBalance,
  selectIsNeedRefreshUser,
} from 'redux/auth/authSelectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userEmail = useSelector(selectUserEmail);
  const isRefreshing = useSelector(selectIsRefreshing);
  const balance = useSelector(selectUserBalance);
  const isNeedRefreshUser = useSelector(selectIsNeedRefreshUser);

  return {
    isLoggedIn,
    isRefreshing,
    userEmail,
    balance,
    isNeedRefreshUser,
  };
};
