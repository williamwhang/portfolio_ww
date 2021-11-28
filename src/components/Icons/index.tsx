import { AiOutlineGithub, AiFillLinkedin, AiFillBehanceCircle } from 'react-icons/ai';
import { Container } from './styles';


function Icons() {
  function handleRedirect(url: string) {
    window.open(url);
  }

  return (
    <Container data-aos="fade-up">
      <div className="container">

        <AiFillLinkedin
          onClick={() => handleRedirect("https://www.linkedin.com/in/williamwhang/")}
        />
        <AiOutlineGithub
          onClick={() => handleRedirect("https://github.com/williamwhang")}
        />
        <AiFillBehanceCircle
          onClick={() => handleRedirect("https://www.behance.net/gallery/119649463/Projeto-Integrador-DH-Burger")}
        />


      </div>
    </Container>
  );
};

export default Icons;
