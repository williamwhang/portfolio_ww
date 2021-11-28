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
  height: 4rem; 
  /* height: 3rem;  */

  ul { 
    display: flex;
    gap: 4rem;
    align-items: center;
    font-size: 1.2rem;
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

  @media(max-width: 1000px) {
    display: flex;
		width: 100%;
    justify-content: space-between;
       img {
          width: 3.5rem;
      }

      > ul {
        font-size: 1rem;
        /* align-items: right;
        gap: 3rem; */
      }
    }

    @media(max-width: 850px) {
      flex-direction: row;
		  justify-content: space-between;

     img {
      flex-direction: row;
		justify-content: space-between;
		  }
    

    nav {
		flex-direction: row;
		justify-content: space-between;
    }
    ul {
      margin-right: 2rem;
      flex-direction: row;
		justify-content: space-between;
    }


      /* > img {
          width: 0.5rem;
          height: 0.5rem;
      } */

      /* > ul {
        font-size: 0.95rem;
        gap: 2rem;
      } */
    }
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
