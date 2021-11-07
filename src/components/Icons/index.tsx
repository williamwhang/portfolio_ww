import { AiOutlineGithub, AiFillLinkedin,} from 'react-icons/ai';
import { FaSpotify } from "react-icons/fa";
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
          <FaSpotify
            onClick={() => handleRedirect("https://www.spotify.com/br/")}
          />

      </div>
    </Container>
  );
};

export default Icons;
