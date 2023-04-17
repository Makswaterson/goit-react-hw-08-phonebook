import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import { FormStyled, Button, FieldStyled, Label } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';

const validationContacts = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(6, 'Too Short!')
    .max(20, 'Too Long!')
    .matches(
      /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
    .required('Required'),
});

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = () => {
  const contacts = useSelector(selectAllContacts);
  const dispatch = useDispatch();
  const onHandleSubmit = (data, { resetForm }) => {
    const contact = {
      id: nanoid(),
      name: data.name,
      number: data.number,
    };
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      toast.error(`${data.name} is already in contacts!`);
      return;
    }
    dispatch(addContact(contact));
    toast.success(`Successfully ${data.name} added!`);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationContacts}
      onSubmit={onHandleSubmit}
    >
      <FormStyled>
        <Label htmlFor="name">
          <span>Name</span>
          <FieldStyled
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label htmlFor="number">
          <span>Number</span>
          <FieldStyled
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <Button type="submit">Add contact</Button>
      </FormStyled>
    </Formik>
  );
};
