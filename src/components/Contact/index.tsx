import SectionTitle from '../SectionTitle';
import Form from './Form';
import { Container } from './styles';

import { BsFillArrowDownRightSquareFill} from "react-icons/bs";

function Contact() {
  return (
    <Container id="contact" data-aos="fade-up" >
      <SectionTitle title={
        <>
        Contact me <BsFillArrowDownRightSquareFill />
        </>
      }
      description={
        <>
        Drop me a line, <br />
        I'd like to hear from you!
        </>
      }
      />
      <Form />
    </Container>
  );
};

export default Contact;
