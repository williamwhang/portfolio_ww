import Link from 'next/link';
import { AiOutlineRightCircle } from 'react-icons/ai';
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
          <h2>{title}</h2>
          <p>{type}</p>

          {/* <div className="container">  */}
          <button type="button" onClick={() => handleRedirect("https://github.com/williamwhang")}>
            GitHub
          </button>
          {/* </div> */}


        </div>

        {/* <button type="button">
          <Link href={slug}>
            <a> Veja maisVer mais <AiOutlineRightCircle /></a>
          </Link>
        </button> */}

      </section>
    </ProjectContainer>
  )
}