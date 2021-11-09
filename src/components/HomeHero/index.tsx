import Icons from '../Icons';
import { Container, TextContainer } from './styles';

// import picture from '../../assest/nome.wepb';

function HomeHero() {
  return (
    <Container>
      {/* <h1>HomeHero</h1> */}
      {/* <img src={} alt="Não decidi a imagem" /> */}
      <div>
        <TextContainer>
          {/* <h1>I'm William Whang, a full stack designer, front-end and sportsman.</h1> */}
          <h1>I'm William Whang, Front-end Developer, Full-Stack Designer, and a Crossfit.</h1>
        </TextContainer>
        <Icons />
      </div>
    </Container>
  );
};

export default HomeHero;
