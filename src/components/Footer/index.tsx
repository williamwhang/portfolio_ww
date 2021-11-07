import React from "react";
import { BiUpArrow, IconName } from "react-icons/bi";
import { Container } from './styles';

function Footer() {
  return (
    <Container>
      {/* <button type="button">
        Voltar ao top
        <BiUpArrow
          onClick={() => handleRedirect("https://github.com/williamwhang")}
        />
      </button> */}

      <div className="container">
        <BiUpArrow
          onClick={() => handleRedirect("https://github.com/williamwhang")}
        />
        
      </div>
    </Container>
  );
};

export default Footer;
