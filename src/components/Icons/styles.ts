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
        color: #ffffff;
        transition: 0.5s;
        cursor: pointer;
        gap: 8rem;
        &:hover {
            color: #7423FF;
            transform: scale(0.95);
        }
     }

`;
