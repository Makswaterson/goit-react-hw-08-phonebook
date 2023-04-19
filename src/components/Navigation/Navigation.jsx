import { useAuth } from 'hooks';
import { NavigationLink } from './Navigation.styled';

export const Navigation = () => {
  const { IsLoggedIn } = useAuth();

  return (
    <nav>
      <NavigationLink to="/">Home</NavigationLink>
      {IsLoggedIn && <NavigationLink to="/Contacts">Contacts</NavigationLink>}
    </nav>
  );
};
