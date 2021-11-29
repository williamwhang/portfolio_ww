import Link from 'next/link';
import { MdDoubleArrow } from 'react-icons/md';
import { ProjectContainer } from "./styles";

import React, { useState } from "react";


interface ProjectItemProps {
  title: string;
  type: string;
  slug: string;
  img: string;
}

export default function ProjectItem({ title, type, slug, img }: ProjectItemProps) {
  function handleRedirect(url: string) {
    window.open(url);
  }

  return (
    <ProjectContainer data-aos="fade-up" imgUrl={img} >
      <section>
        <div className="overlay" />
        <div className="text">
          <h2>DH BURGUER</h2>
          <p>This project was developed during the Full-Stack course at Digital House, integration project.</p>
        </div>
      </section>
      
      <button type="button" onClick={() => handleRedirect("https://github.com/ProjetoIntegrador-DH-Grupo3/main-project")}>
        <Link href="#">
          <a> GitHub <MdDoubleArrow /></a>
        </Link>
      </button>
    </ProjectContainer>
  )
}