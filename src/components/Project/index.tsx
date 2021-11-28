import SectionTitle from '../SectionTitle';
import ProjectItem from './ProjectItem';
import { Container } from './styles';

import React, { useState } from "react";
import ProjectItem2 from './ProjectItem2';
import { BsFillArrowDownRightSquareFill} from "react-icons/bs";

function Project() {
 return (
    <Container id="project">
      <SectionTitle title={
        <>
        Project <BsFillArrowDownRightSquareFill />
        </>
      }
      />

      <section>
        <ProjectItem 
          img="https://user-images.githubusercontent.com/73802190/143438835-1cae53d3-7707-4de0-9505-31e5941dc405.jpg"
          title="DH BURGUER"
          type="This project was developed during the Full-Stack course at Digital House, integration project." 
          slug={''}          // slug="teste"
        />
        
        <ProjectItem2
          img="https://user-images.githubusercontent.com/73802190/143436963-deaa5d63-08b2-4541-bb94-3ca94c4499a6.jpg"
          title="IGNEWS - Portal de notícias"
          type="This project was developed during Rocketseat Ignite! The idea was to develop a paid blog where 
          the user logs in using GitHub and pays their subscription using Stripe." 
          slug={'https://github.com/williamwhang/primeiro-projeto-next'}          // slug="teste"
        />
        
        {/* <ProjectItem 
          img="https://zippypixels.com/wp-content/uploads/2015/09/01-Free-perspective-website-mockup-824x542.jpg"
          title="Projeto 03"
          type="Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum em ipsum Lorem ipsum Lorem ip" slug={''}          // slug="teste"
          
        />
         */}

      </section>
    </Container>
  );
};

export default Project;
