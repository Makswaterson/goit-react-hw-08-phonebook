import { Navigate } from 'react-router-dom';
import { useAuth } from 'hooks';

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { IsLoggedIn } = useAuth();

  return IsLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
