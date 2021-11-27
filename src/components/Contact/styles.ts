import { NONAME } from 'dns';
import styled from 'styled-components';

export const Container = styled.section`
  margin-top: 1rem;
`;

export const FormContainer = styled.form`
  margin-top: 2rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media(max-width: 700px) {
     margin-top: 5rem;
     grid-template-columns: 1fr;
  }

  @media(max-width: 450px) {
     > button {
       padding: 0.8rem 1.5rem;
       font-size: 1rem;
     }
  }



   > button {
       border: 1px solid ${({theme}) => theme.secondary};
       padding: 1rem 2.5rem;
       color: ${({theme}) => theme.primary};
       font-weight: 300;
       font-size: 1.2rem;
       text-transform: uppercase;
       background-color: transparent;
       transition: 0.5s;
       width: fit-content;
       position: relative;

       /* &:disabled {
           opacity: 0.5;
       } */
   }

    button::before {
     content: '';
     position: absolute;
     background-color: ${({ theme }) => theme.secondary};
     width: 0;
     height: 100%;
     top: 0;
     left: 0;
     z-index: -1;
     transition: all 0.5s ease;
   }

   > button:hover::before {
     width: 100%;
   }

   > button:hover {
    color: #111111;
   }

`;

export const Input = styled.input`
  height: 3rem;
  width: 100%;
  background-color: transparent;
  /* background-color: #2B2B2B; */

  border: 1px solid ${({theme}) => theme.secondary};
  padding: 1.7rem 1.5rem;
  color: ${({theme}) => theme.primary};
  font-size: 1.2rem;
  outline: none;
  transition: 0.5s;
  position: relative;

   &:focus {
      border-color: ${({theme}) => theme.primary};
  } 

  &:focus {
      border-color: ${({theme}) => theme.primary};
  }

  @media(max-width: 450px) {
     padding: 1.4rem;
     font-size: 1rem;
  }
`;

export const TextArea = styled.textarea`
  height: 10rem;
  width: 100%;
  
  background-color: transparent;
  border: 1px solid ${({theme}) => theme.secondary};
  padding: 1.7rem 1.5rem;
  color: ${({theme}) => theme.primary};
  
  font-size: 1.2rem;
  outline: none;
  transition: 0.5s;
  resize: none;
  grid-column: 1 / 3;

  &:focus {
      border-color: ${({theme}) => theme.primary};
  }

  @media(max-width: 700px) {
     grid-column: 1;
  }

  @media(max-width: 450px) {
     padding: 1.4rem;
     font-size: 1rem;
  }
`;