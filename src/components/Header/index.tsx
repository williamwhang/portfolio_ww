import NavLink from './NavLink';
import { Container } from './styles';
import logo from '../../assets/will.png';

function Header() {
  return (
    <Container>
      <ul>
        <img src={logo} alt="Logo" />
        <NavLink title="Will" path="/" />
        <NavLink title="About" path="/about" />
        <NavLink title="Project" path="/project" />
        <NavLink title="Contact" path="/contact" />
      </ul>
    </Container>
  );
};

export default Header;
