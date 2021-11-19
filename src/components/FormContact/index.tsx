import SectionTitle from '../SectionTitle';
import Form from './Form';
import { Container } from './styles';
import { BsFillArrowDownRightSquareFill} from "react-icons/Bs";

function FormContact() {
  return (
    <Container>
      <SectionTitle 
      title={
        <>
        {/* Get in touch */}
        Contact me <BsFillArrowDownRightSquareFill />
        </>
      }
      description={
        <>
        Drop me a line, 
        <br />
        I'd like to hear from you!
        </>
      }
      />
      <Form />
    </Container>
  );
};

export default FormContact;
