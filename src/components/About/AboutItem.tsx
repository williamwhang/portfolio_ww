import { ItemContainer, TextContainer } from './styles';
import picture from '../../assets/me.jpg';

import { Container } from './styles';
import { BiUpArrow } from 'react-icons/bi';

export default function AboutItem() {
  function handleScrollTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <ItemContainer id="about">
      <div>
        <TextContainer data-aos="fade-right">
          <p>
            I'm William Whang, nice to meet you. I've been in this world of
            programming for a short time, I made a career transition and I
            believe I made a great decision. Programming is like life, it's a
            lifelong learning experience, and I challenge myself to do
            interesting things that matter and make sense to me. Every day I
            have been feeding myself with this energy to learn and evolve, it
            inspires me every day more. I'm never satisfied with just having
            ideas. Instead, I have an almost impulsive need to act on them.
          </p>
        </TextContainer>
      </div>
      <img src={picture} alt="My photo" data-aos="fade-up" />

      {/* <Container>
                <div className="container">
                    <BiUpArrow onClick={handleScrollTop} />
                </div>
            </Container> */}
    </ItemContainer>
  );
}
