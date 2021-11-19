import { AiOutlineGithub, AiFillLinkedin,} from 'react-icons/ai';
import { FaSpotify } from "react-icons/fa";
import { AiFillBehanceCircle } from "react-icons/Ai";
import { Container } from './styles';


function Icons() {
  function handleRedirect(url: string) {
    window.open(url);
  }

  return (
    <Container>
      <div className="container">

          <AiOutlineGithub
            onClick={() => handleRedirect("https://github.com/williamwhang")}
          />
          <AiFillLinkedin
            onClick={() => handleRedirect("https://www.linkedin.com/in/williamwhang/")}
          />
          <AiFillBehanceCircle
            onClick={() => handleRedirect("https://www.behance.net/gallery/119649463/Projeto-Integrador-DH-Burger")}
          />


      </div>
    </Container>
  );
};

export default Icons;
