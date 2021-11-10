import styled from 'styled-components';

interface ProjectProps {
    imgUrl: string;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: right;
  /* align-items: center; */
  gap: 0.5rem;

  h1 {
    color: ${({ theme }) => theme.secondary};
    font-size: 5.5rem;
    text-transform: uppercase;
    font-weight: bold;
  }

  h2 {
    color: ${({ theme }) => theme.primary};
    font-weight: 300;
    font-size: 3.5rem;
  }

  @media(max-width: 1000px) {
     h1 {
    font-size: 3.5rem;
   }

   h2 {
    font-size: 1.8rem;
   }
  }

  @media(max-width: 500px) {
     h1 {
    font-size: 1.8rem;
   }

   h2 {
    font-size: 1.2rem;
   }
  }
`;
