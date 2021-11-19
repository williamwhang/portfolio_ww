import styled from 'styled-components';

interface ProjectProps {
  imgUrl: string;
}

export const Container = styled.section`
  margin-top: 15rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* align-items: flex-start; */
  justify-content: space-between;
  gap: 4rem;

  > section {
  /* width:100%;
  display: flex;
  flex-direction: column;
  gap: 4rem; */

  /* width: 100%; */
      margin-top: 3rem;
      display: flex;
      gap: 3rem;

  /* @media (max-width:1000px) {
      gap: 2rem;
    } */

    @media (max-width: 1000px) {
      flex-direction: column;
        gap: 2rem;
      }

    @media (max-width: 700px) {
        flex-direction: column;
        gap: 1rem;
      }

  }
`;

export const ProjectContainer = styled.div<ProjectProps>`
  width: 100%;
  display: flex;
  height: 30rem;
  flex-direction: column;
  /* align-items: flex-start; */
  /* justify-content: flex-start; */
  box-shadow: -5px 5px 18px 2px #0f0f0f;
  /* position: relative; */
  justify-content: space-between;


  /* > button {
     height: 4rem;
     margin: 0 0 3rem 5rem;
     background: none;
     border: none; */
/* 
     a {
         color: #11172b;
         font-weight: 300;
         display: flex;
         align-items: center;
         gap: 0.8rem;
         transition: 0.5s;
     } */

      /* h2 {
       
        font-size: 2rem;
        margin-bottom: 1.5rem;
      } */

      /* p {
        color: #848484;
        font-size: 1.5rem;
        margin-bottom: 1rem;
      } */

      > div.text {
        background-color: #18191E;
        padding: 1rem;
        padding-top: 1.5rem;
        width: 30rem;
        max-height: 20rem;
        /* height: 15rem; */
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        /* justify-content: space-between; */
        
        transition: 0.5s;

          flex-grow: 1;

        h2 {
          color: #848484;
          font-size: 2rem;
        }

          p {
            color: #848484;
            font-size: 1.5rem;
            margin-top: 2rem;
      }

      /* &:hover > section {
       filter: brightness(1.3);
       transform: translateY(-30px);
       transition: 0.5s;
    } */
  }

  > section {
      /* width: 30rem; */
      max-width: 30rem;
      /* height: 100%; */
      /* height: 20rem; */
      height: 20rem;
      background: url(${props => props.imgUrl}) no-repeat center;
      background-size: cover;
      position: relative;

      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;

      > div.overlay {
          position: absolute;
          width: 100%;
          height: 100%;
          background: ${({ theme }) => theme.gradient};
          opacity: 0.75;
          transition: 0.5s;
      }

  }

  /* &:nth-child(even) {
      flex-direction: row-reverse;
  } */

  &:hover > section {
       filter: brightness(1.3);
       transform: translateY(-30px);
       transition: 0.5s;
  }

  &:hover > div.text
  {
       filter: brightness(1.3);
       transform: translateY(-30px);
       transition: 0.5s;
  }
`;
