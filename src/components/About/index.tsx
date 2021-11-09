import SectionTitle from '../SectionTitle';
import AboutItem from './AboutItem';
import { Container } from './styles';

function About() {
  return (
    <Container>
      <SectionTitle title="My, Myself & I" />
      <section>
        <AboutItem />
      </section>
    </Container>
  );
};

export default About;
