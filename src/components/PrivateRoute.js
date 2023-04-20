import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const { IsLoggedIn, IsRefreshing } = useAuth();
  const shouldRedirect = !IsLoggedIn && !IsRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
