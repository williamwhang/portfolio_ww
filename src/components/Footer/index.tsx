import React from "react";
import { BiUpArrow } from "react-icons/bi";
import { Container } from './styles';

function Footer() {
   function handleScrollTop() {
     window.scroll({
       top: 0,
       behavior: 'smooth'
     })
   }

  return (
    <Container>
      <div className="container">
        <BiUpArrow onClick={handleScrollTop} />
      </div>
    </Container>
  );
};

export default Footer;
