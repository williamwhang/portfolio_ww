import { lighten, darken } from 'polished';
import styled from 'styled-components';

interface NavLinkProps {
    isActive: boolean;
}

export const Container = styled.header`
  width:100%;
  display: flex;
  align-items: right;
  float: right;
  /* justify-content: center; */
  height: 4rem; 
  /* height: 3rem;  */

  ul { 
    display: flex;
    gap: 6rem;
    align-items: center;
    font-size: 1.3rem;
    transition: 0.5s;
  }

  img {
    display: block;
    margin-inline-start: 50px;
    /* margin-inline-end: 0px; */
    width: 4.5rem;
    /* height: 3rem; */
  }

  img:hover {
    transform: scale(0.95);
  }

  /* link {
    display: flex;
    gap: 6rem;
    align-items: center;
    font-size: 1.3rem;
    transition: 0.5s;
  } */

`;

export const NavLinkContainer = styled.li<NavLinkProps> `
  a {
      text-transform: uppercase;
      color: ${props => 
      props.isActive ? props.theme.primary : props.theme.secondary};
      transition: 0.5s;

      &:hover {
        color: ${props => 
         props.isActive
          ? darken(0.2, props.theme.secondary)
          : lighten(0.5, props.theme.primary)};
          transition: 0.3s;
          font-weight: bold;
      }
      
  }
`;
