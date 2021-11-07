import { lighten, darken } from 'polished';
import styled from 'styled-components';

interface NavLinkProps {
    isActive: boolean;
}

export const Container = styled.header`
  width:100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem; 
  /* height: 3rem;  */
  /* border-bottom: 1px solid ${({ theme }) => theme.textHighlight}; */

  ul { 
    display: flex;
    gap: 6rem;
    align-items: center;
  }

  img {
    display: block;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    width: 4rem;
    /* height: 3rem; */
  }

  img:hover {
    transform: scale(0.95);
  }
`;

export const NavLinkContainer = styled.li<NavLinkProps> `
  a {
      text-transform: uppercase;
      color: ${props => 
      props.isActive ? props.theme.primary : props.theme.textHighlight};
      transition: 0.5s;

      &:hover {
        color: ${props => 
         props.isActive
          ? lighten(0.2, props.theme.primary)
          : darken(0.5, props.theme.textHighlight)}
          /* lighten(0.2, props.theme.primary) */
          /* lighten(0.2, props.theme.textHighlight)} */
      }
  }
`;
