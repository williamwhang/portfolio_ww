import Icons from '../Icons';
import { Container, TextContainer } from './styles';

// import picture from '../../assest/nome.wepb';

function HomeHero() {
  return (
    <Container >
      <div>
        <TextContainer data-aos="fade-right" >
          <h1>I'm William Whang, <br/>
            a designer who codes, trains and <br/>
            is constantly learning.</h1>
        </TextContainer>
        <Icons />
      </div>
    </Container>
  );
};

export default HomeHero;
