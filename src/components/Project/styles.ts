import styled from 'styled-components';

interface ProjectProps {
  imgUrl: string;
}

export const Container = styled.section`
  /* margin-top: 15rem; */
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  > section {
  width:100%;
  display: flex;
  flex-direction: column;
  gap: 4rem;

  @media (max-width:1000px) {
      gap: 2rem;
    }

    /* @media (max-width: 1000px) {
      flex-direction: column;
        gap: 2rem;
      }

    @media (max-width: 700px) {
        flex-direction: column;
        gap: 1rem;
      } */
  }
`;

export const ProjectContainer = styled.div<ProjectProps>`
  width: 100%;
  display: flex;
  height: 25rem;
  align-items: flex-end;
  position: relative;
  
  /* box-shadow: -5px 5px 18px 2px #0f0f0f; */

  > section {
      width: 40rem;
      height: 100%;
      background: url(${props => props.imgUrl}) no-repeat center;
      background-size: cover;
      position: relative;
      
      > div.overlay {
          position: absolute;
          width: 100%;
          height: 100%;
          background: ${({ theme }) => theme.gradient};
          opacity: 0.75;
          transition: 0.5s;
      }

      > div.text {
        position: absolute;
        top: 2rem;
        right: -30rem;
        transition: 0.5s;
        width: fit-content;
        width: 30rem;
        /* background-color: #18191E; */
        background-color: transparent;
        padding: 1rem;
        align-items: flex-start;
        justify-content: flex-start;
        transition: 0.5s;
        /* flex-grow: 1; */

        h2 {
          color: #fff;
          font-size: 2rem;
          font-weight: bold;
          text-shadow: -4px 5px 22px #11172b;
        }

          p {
            color: #848484;
            font-size: 1.2rem;
            margin-top: 2rem;
            margin-bottom: 2rem;
      }

      > button {
     height: 1rem;
     /* margin: 0 0 3rem 5rem; */
     /* padding: 1rem; */
     background: none;
     border: none; 
    align-items: center;
      }

      a {
         color: #fff;
         font-weight: 300;
         font-size: 2rem;
         display: flex;
         align-items: center;
         /* gap: 0.8rem; */
         transition: 0.5s;
     } 
  }

}

&:hover {
    > section {
      >div.overlay {
        opacity: 0.4;
      }
    }
  }
  

&:nth-child(even) {
      flex-direction: row-reverse;

      > section > div.text {
        text-align: right;
        right: 0;
        left: -30rem;
      }
    }

    /* > button {
      position: absolute;
      bottom: 1rem;
      right: 1rem;
      margin: 0;
    } */

      /* &:hover {
        > section > div.text {
          left: -12rem;
        }
      } */
  @media (max-width: 1450px) {
    > section {
      width: 40rem;
    }
  }

  @media (max-width: 1000px) {
    > section {
      width: 100%;

      >div.text {
        left: 1rem;
        top: 1rem;
      }
    }

    > button {
      position: absolute;
      bottom: 1rem;
      right: 1rem;
      /* margin: 0; */
    }

    &:nth-child(even) {
      flex-direction: row;

      > section {
      width: 100%;

      >div.text {
        left: 1rem;
        top: 1rem;
        text-align: center;
      }
    }

    > button {
      position: absolute;
      bottom: 1rem;
      right: 1rem;
      margin: 0;
    }
  }
}

  @media(max-width: 700px) {
    height: 17rem;
  }
/* 
  @media(max-width: 450px) {
    > button {
      height: auto;

      a {
        font-size: 1.5rem;
        gap: 0.8rem;
      }
    } */

    /* > section > div.text {
        h2 {
          font-size: 1.5rem;
        }
        p {
            font-size: 1rem;
          }
       }
     } */
`;
