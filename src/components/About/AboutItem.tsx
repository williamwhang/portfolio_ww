import { ItemContainer, TextContainer } from './styles';
import picture from '../../assets/photo.jpg';

export default function AboutItem() {
    return (
        <ItemContainer>
            <div>
                <TextContainer>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adip
                        Lorem ipsum dolor sit amet, consectetur adip<br />
                        Lorem ipsum dolor sit amet, consectetur adip
                        Lorem ipsum dolor sit amet, consectetur adip<br />
                        Lorem ipsum dolor sit amet, consectetur adip
                        Lorem ipsum dolor sit amet, consectetur adip
                    </p>
                </TextContainer>
            </div>
            <img src={picture} alt="My photo" />
        </ItemContainer>
    )
}