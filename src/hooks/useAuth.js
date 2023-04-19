import { useSelector } from 'react-redux';
import {
  selectIsLoggedIn,
  selectUser,
  selectIsRefreshing,
} from 'redux/auth/selectors';

export const useAuth = () => {
  const IsLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);
  const IsRefreshing = useSelector(selectIsRefreshing);
  console.log(IsLoggedIn);

  return {
    IsLoggedIn,
    user,
    IsRefreshing,
  };
};
