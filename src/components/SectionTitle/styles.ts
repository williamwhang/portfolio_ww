import styled from 'styled-components';

interface ProjectProps {
    imgUrl: string;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;

  h1 {
    color: ${({ theme }) => theme.secondary};
    font-size: 4.5rem;
  }

  h2 {
    color: ${({ theme }) => theme.primary};
    font-weight: 300;
    font-size: 3.5rem;
  }
`;
