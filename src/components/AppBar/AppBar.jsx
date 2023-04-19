import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';
import { AppStyled } from './AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <AppStyled>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </AppStyled>
  );
};
