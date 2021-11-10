import { NONAME } from 'dns';
import styled from 'styled-components';

export const Container = styled.section`
  margin-top: 15rem;
`;

export const FormContainer = styled.form`
  margin-top:8rem;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;


   > button {
       border: none;
       padding: 1rem 2.5rem;
       /* color: #fff; */
       font-weight: 300;
       font-size: 1.2rem;
       text-transform: uppercase;
       /* border-radius: 05rem; */
       background-color: ${({ theme}) => theme.primary};
       transition: 0.5s;
       width: fit-content;

       &:disabled {
           opacity: 0.5;
       }
   }

`;

export const Input = styled.input`
  height: 3rem;
  width: 100%;
  background-color: ${({theme}) => theme.inputBackground};
  border: 1px solid ${({theme}) => theme.border};
  padding: 1.7rem 1.5rem;
  color: ${({theme}) => theme.primary};
  /* border-radius: 0.5rem; */
  font-size: 1.2rem;
  outline: none;
  transition: 0.5s;

  &:focus {
      border-color: ${({theme}) => theme.primary};
  }

  &::placeholder {
    color: ${({theme}) => theme.primary};
  }

  @media(max-width: 450px) {
     padding: 1.4rem;
     font-size: 1rem;
  }
`;

export const TextArea = styled.textarea`
  height: 10rem;
  width: 100%;
  background-color: ${({theme}) => theme.inputBackground};
  border: 1px solid ${({theme}) => theme.border};
  padding: 1.7rem 1.5rem;
  color: ${({theme}) => theme.primary};
  /* border-radius: 0.5rem; */
  font-size: 1.2rem;
  outline: none;
  transition: 0.5s;
  resize: none;

  grid-column: 1 / 3;

  &:focus {
      border-color: ${({theme}) => theme.primary};
  }

  &::placeholder {
    color: ${({theme}) => theme.primary};
  }

  @media(max-width: 450px) {
     padding: 1.4rem;
     font-size: 1rem;
  }
`;