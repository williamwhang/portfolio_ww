import { lighten, darken } from 'polished';
import styled from 'styled-components';

interface NavLinkProps {
  isActive: boolean;
}

export const Container = styled.header`
  width: 100%;
  display: flex;
  height: 4rem;

  ul {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 1.2rem;
    transition: 0.5s;
    width: 100%;
    margin-right: 2rem;

    @media (min-width: 540px) {
      gap: 4rem;
      justify-content: inherit;
    }
  }

  img {
    margin-inline-start: 50px;
    width: 4.5rem;
  }

  img:hover {
    transform: scale(0.95);
  }

  @media (max-width: 1000px) {
    img {
      width: 3.5rem;
    }

    > ul {
      font-size: 1rem;
    }
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

    @media (max-width: 540px) {
      font-size: 0.9rem;
    }
  }
`;
