import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { fetchContacts } from 'redux/contacts/operations';
import { selectIsLoading, selectAllContacts } from 'redux/contacts/selectors';
import { Filter } from '../components/Filter/Filter.jsx';

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const contacts = useSelector(selectAllContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your Contacts:</title>
      </Helmet>
      <ContactForm />
      <div>{isLoading && 'Request in progress...'}</div>
      <Filter />
      {contacts.length > 0 && <ContactList />}
    </>
  );
}
