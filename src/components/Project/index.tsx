import SectionTitle from '../SectionTitle';
import ProjectItem from './ProjectItem';
import { Container } from './styles';

import React, { useState } from "react";

function Project() {
 return (
    <Container id="project">
      <SectionTitle title="Project_" />

      <section>
        <ProjectItem 
          img="https://user-images.githubusercontent.com/73802190/143290998-13bc7030-90df-44bb-8a2b-387b8d473c1e.png"
          title="DH BURGUER"
          type="Esse projeto foi desenvolvido durante o curso de Full-Stack na Digital House, projeto integração.
          Criação do design, a identidade visual, wireframe, side map, criação de banco de dados (My SQL)." 
          slug={''}          // slug="teste"
        />
        
        <ProjectItem 
          img="https://user-images.githubusercontent.com/71772559/113495090-3e529600-94c5-11eb-953c-53ab4f71fc15.png"
          title="IGNEWS - Portal de notícias"
          type="Esse projeto foi desenvolvido durante o Ignite da Rocketseat! 
          A ideia era desenvolver do um blog pago onde o usuário loga usando o GitHub e paga sua inscrição usando o Stripe. " 
          slug={''}          // slug="teste"
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
