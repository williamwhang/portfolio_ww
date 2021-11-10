import SectionTitle from '../SectionTitle';
import ProjectItem from './ProjectItem';
import { Container } from './styles';

function Project() {
  return (
    <Container>
      <SectionTitle title="Project" />

      <section>
        <ProjectItem 
          img="https://zippypixels.com/wp-content/uploads/2015/09/01-Free-perspective-website-mockup-824x542.jpg"
          title="Projeto 01"
          type="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum " slug={''}          // slug="teste"
          slug="teste"
        />
        
        <ProjectItem 
          img="https://zippypixels.com/wp-content/uploads/2015/09/01-Free-perspective-website-mockup-824x542.jpg"
          title="Projeto 02"
          type="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum " slug={''}          // slug="teste"
          slug="teste"
        />
        
        <ProjectItem 
          img="https://zippypixels.com/wp-content/uploads/2015/09/01-Free-perspective-website-mockup-824x542.jpg"
          title="Projeto 03"
          type="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum " slug={''}          // slug="teste"
          slug="teste"
        />
        

      </section>
    </Container>
  );
};

export default Project;
