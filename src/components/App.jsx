import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
// import { PrivateRoute } from './PrivateRoute';
// import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'redux/auth/operations';
// import { Toaster } from 'react-hot-toast';
import { useAuth } from 'hooks';
console.log(useAuth);
// import { AppStyled } from './App.styled';

const HomePage = lazy(() => import('../pages/Home'));
const RegisterPage = lazy(() => import('../pages/Register'));
const LoginPage = lazy(() => import('../pages/Login'));
const ContactsPage = lazy(() => import('../pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const { IsRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return IsRefreshing ? (
    <b>Refreshing user ...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Route>
    </Routes>
  );
  // <AppStyled>
  //   <Toaster />
  //   <h1>Phonebook</h1>
  //   <ContactForm />
  //   {isLoading && !error && <b>Request in progress...</b>}
  //   <h2>Contacts</h2>
  //   <Filter />
  //   {contacts.length > 0 && <ContactList />}
  // </AppStyled>
};
