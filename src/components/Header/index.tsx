import NavLink from './NavLink';
import { Container } from './styles';
import logo from '../../assets/will.png';

// import { NavHashLink as Link } from 'react-router-hash-link';
// import { Link } from "react-scroll";
// import { Anchor } from 'antd';
// const { Link } = Anchor;

function Header() {
  return (
    <Container>
      <ul>
        <img src={logo} alt="Logo" data-aos="flip-left" />
        <NavLink title="About" path="#about" />
        <NavLink title="Project" path="#project" />
        <NavLink title="Contact" path="#contact" />

       {/* <Anchor targetOffset="25" >
        <Link href="#about" title="About" />
        <Link href="#project" title="Project" />
        <Link href="#contact" title="Contact" />
      </Anchor>, */}
      </ul>
    </Container>
  );
}
export default Header;
