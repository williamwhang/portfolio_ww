import Icons from '../Icons';
import { Container, TextContainer } from './styles';

// import picture from '../../assest/nome.wepb';

function HomeHero() {
  return (
    <Container >
      {/* <h1>HomeHero</h1> */}
      {/* <img src={} alt="Não decidi a imagem" /> */}
      <div>
        <TextContainer data-aos="fade-right" >
          <h1>I'm William Whang, <br/>
            a designer who codes, trains and is constantly learning.</h1>
        </TextContainer>
        <Icons />
      </div>
    </Container>
  );
};

export default HomeHero;
