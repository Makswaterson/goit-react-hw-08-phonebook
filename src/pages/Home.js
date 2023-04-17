import { Container, Title } from './Home.styled';
// import phoneImage from '../Images/phone_contacts_icon_.svg';

export default function Home() {
  return (
    <Container>
      <Title>
        Phonebook is ready for you{''}
        {/* <span role="img" aria-label="Phonebook image">
          <img src={phoneImage} width="150" />
        </span> */}
      </Title>
    </Container>
  );
}
