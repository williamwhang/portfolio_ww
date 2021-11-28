import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  display: flex;
  margin-top: 0.5rem;
  height: 5rem;
  text-align: right;
  float: right;
  
  > button {
      height: 5rem;
      background-color: none;
      /* color: #fff; */
  }

  svg {
        width: 5rem;
        height: 3.5rem;
        color: #fff;
        transition: 0.5s;
        cursor: pointer;
        /* gap: 1rem; */
        &:hover {
           color: ${({ theme }) => (theme.secondary)};
           transform: scale(0.95);
           
        }
    }

    @media(max-width: 1050px) {

    svg {
        width: 3rem;
        height: 2rem;
        }
     }
  

  @media(max-width: 700px) {
    text-align: center;
  }
`;


export const Button = styled.button`
  min-width: 100%;
  padding: 30px 30px;
  border: none;
  color: #111;
  font-size: 24px;
  cursor: pointer;

`;