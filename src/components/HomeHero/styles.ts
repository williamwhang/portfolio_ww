import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  display: flex;
  gap: 2rem;
  align-items: center;
  /* justify-content: center; */
  /* align-items: right; */
  /* float: right; */
  margin-top: 5rem;
  /* margin-right: 0;
  padding-left: 0; */
  margin-left: 0;


  /* @media (max-width: 1450px) {
    > div {
    flex: 1;
    }
  } */
  

`;


export const TextContainer = styled.section`
  margin-bottom: 2rem;
  width: 100%;

  h1 {
      font-size: 5rem;
      font-weight: bold;
      color: #fff;
  }

  @media (max-width: 1450px) {
    h1 {
    font-size: 4rem;
    }
  }

  @media (max-width: 800px) {
    h1 {
    font-size: 2rem;
    justify-content: center; 
    align-items: center;
    }
  }

  @media (max-width: 450px) {
    h1 {
    /* font-size: 1.9rem; */
    justify-content: center; 
    align-items: center;
    }
  }
  
`;
