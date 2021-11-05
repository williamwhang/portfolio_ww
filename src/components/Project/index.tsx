import SectionTitle from '../SectionTitle';
import ProjectItem from './ProjectItem';
import { Container } from './styles';

function Project() {
  return (
    <Container>
      <SectionTitle title="Project" />

      <section>
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
      </section>
    </Container>
  );
};

export default Project;
