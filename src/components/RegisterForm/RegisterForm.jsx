import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { ButtonStyled, FormStyled, LabelStyled } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <FormStyled onSubmit={handleSubmit} autoComplete="off">
      <LabelStyled>
        Username
        <input type="text" name="name" placeholder="Enter name..." />
      </LabelStyled>
      <LabelStyled>
        Email
        <input type="email" name="email" placeholder="Enter email..." />
      </LabelStyled>
      <LabelStyled>
        Password
        <input
          type="password"
          name="password"
          placeholder="Enter password..."
        />
      </LabelStyled>
      <ButtonStyled type="submit">Register</ButtonStyled>
    </FormStyled>
  );
};
