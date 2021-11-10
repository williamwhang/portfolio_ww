import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  display: flex;
  margin-top: 5rem;
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
        gap: 8rem;
        &:hover {
           color: ${({ theme }) => (theme.secondary)};
           transform: scale(0.95);
        }
    }
`;
