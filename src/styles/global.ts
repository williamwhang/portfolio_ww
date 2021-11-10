import { lighten } from 'polished';
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Josefin Sans', sans-serif;
    /* font-family: 'Arimo', sans-serif; */
    /* font-family: 'Roboto Slab', serif;  */
    ::-webkit-scrollbar {
      width: 8px;
      height: 5px;
    }
    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => (theme.secondary)};
      border-radius: 10px;
    }
    ::-webkit-scrollbar-track{
      background: ${({ theme }) => lighten(0.3, theme.secondary)};
    }
  }

  body {
    /* background: ${props => props.theme.background}; */
    /* background: #18191E; */
    background: #202126;
    font: 400 1rem 'Josefin Sans', sans-serif;
  }

  img {
    width: 100%;
    max-width: 100%;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  .container {
    width: 100%;
    margin: 0 auto;
    max-width: 85rem;
    padding: 0 1rem;
    @media(max-width: 1450px) {
      max-width: 70rem;
    }
    @media(max-width: 1000px) {
      max-width: 50rem;
    }
    @media(max-width: 700px) {
      padding: 0 2rem;
    }
  }

`;