import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 15rem;

   svg {
        width: 5rem;
        height: 3.5rem;
        color: #fff;
        transition: 0.5s;
        cursor: pointer;
        gap: 8rem;
        &:hover {
           color: ${({ theme }) => (theme.secondary)};
           transform: scale(0.95);
        }
    }
`;
export const ItemContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  margin-top: 4rem;

  > img {
      width: 40rem;
      flex: 1;
  }

  > div {
      flex: 4;
  }

  @media(max-width: 1450px) {
    flex-direction: column;
    width: 100%;
      > img {
          width: 30rem;
      }
      > div {
          flex: 1;
      }
    }

      /* @media(max-width: 1000px) {
      > img {
          width: 22rem;
      }
    } */

      @media(max-width: 700px) {
        flex-direction: column;
        > div {
          width: 100%;
      }
    }

`;

export const TextContainer = styled.div`
  margin-bottom: 2rem;
  width: 100%;

  p {
    font-size: 3rem;
    /* color: #DDDDDD; */
    color: #848484;
  }

  @media(max-width: 1450px) {
      p {
          font-size: 2rem;
      }
    }

      @media(max-width: 1000px) {
        p {
          font-size: 1.5rem;
      }
    }

      @media(max-width: 700px) {
        > p {
          font-size: 1rem;
      }
    }
`;

