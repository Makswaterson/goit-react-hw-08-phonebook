import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { FormStyled, LabelStyled, ButtonStyled } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.vale,
      })
    );
    form.reset();
  };
  return (
    <FormStyled onSubmit={handleSubmit} autoComplete="off">
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
      <ButtonStyled type="submit">Log In</ButtonStyled>
    </FormStyled>
  );
};
