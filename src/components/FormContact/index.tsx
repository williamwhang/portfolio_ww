import SectionTitle from '../SectionTitle';
import Form from './Form';
import { Container } from './styles';

function FormContact() {
  return (
    <Container>
      <SectionTitle 
      title={
        <>
        Get in touch
        </>
      }
      description={
        <>
        If you have any questions don't
        <br />
        hesitate to use the form.
        </>
      }
      />
      <Form />
    </Container>
  );
};

export default FormContact;
