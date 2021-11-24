import { ItemContainer, TextContainer } from './styles';
import picture from '../../assets/photo.jpg';

import { Container } from './styles';
import { BiUpArrow } from "react-icons/bi";

export default function AboutItem() {

    function handleScrollTop() {
        window.scroll({
          top: 0,
          behavior: 'smooth'
        })
      }

    return (
        <ItemContainer id="about">
            <div>
                <TextContainer>
                    <p>
                        I'm William,
                        Lorem ipsum dolor sit amet, consectetur adip<br />
                        Lorem ipsum dolor sit amet, consectetur adip
                        Lorem ipsum dolor sit amet, consectetur adip<br />
                        Lorem ipsum dolor sit amet, consectetur adip
                        Lorem ipsum dolor sit amet, consectetur adip
                    </p>
                </TextContainer>
            </div>
            <img src={picture} alt="My photo" />

            {/* <Container>
                <div className="container">
                    <BiUpArrow onClick={handleScrollTop} />
                </div>
            </Container> */}


        </ItemContainer>
    )
}