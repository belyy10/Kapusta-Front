import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectUserEmail,
  selectIsRefreshing,
} from 'redux/auth/authSelectors';

export const useAuth = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const userEmail = useSelector(selectUserEmail);
  const isRefreshing = useSelector(selectIsRefreshing);

  return {
    isLoggedIn,
    isRefreshing,
    userEmail,
  };
};
