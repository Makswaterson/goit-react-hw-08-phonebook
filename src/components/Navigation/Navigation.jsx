import { NavLink } from 'react-router-dom';
import { useAuth } from 'hooks';
import { NavigationLink } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  return (
    <nav>
      <NavigationLink to="/">Home</NavigationLink>
      {isLoggedIn && <NavigationLink to="/tasks">Tasks</NavigationLink>}
    </nav>
  );
};
