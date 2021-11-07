import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;

`;


export const TextContainer = styled.section`
  margin-bottom: 2rem;
  width: 100%;

  h1 {
      font-size: 4rem;
      color: ${({ theme }) => theme.primary};
  }

  h2 {
      font-size: 8rem;
      font-weight: bold;
      /* color: ${({ theme }) => theme.secondary}; */
      color: #ffffff;
  }

  h3 {
      font-size: 3rem;
      color: ${({ theme }) => theme.primary};
  }
`;
