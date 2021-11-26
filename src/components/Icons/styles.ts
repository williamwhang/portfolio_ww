import { darken } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
 display: flex;
 align-items: center;
 margin-right: 2rem;
 justify-content: space-between;
 height: 1rem;
  /* border-top: 1px solid gray; */
 
 svg {
        width: 5rem;
        height: 3.5rem;
        color: ${({ theme }) => darken(0.2, theme.secondary)};
        transition: 0.5s;
        cursor: pointer;
        gap: 8rem;
        
        &:hover {
            color: #ffffff;
            transform: scale(0.95);
        }
     }

     @media (max-width: 1000px) {
      svg {
        width: 4rem;
        height: 3rem;
    }
  }

  @media (max-width: 600px) {
      svg {
        width: 3rem;
        height: 2rem;
    }
  }

`;



