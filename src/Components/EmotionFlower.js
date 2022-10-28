import emotionFlowerPetals from '../data/emotionFlower'
import styled from 'styled-components'
import getEmotionPetalText from '../data/getEmotionPetalText'

const cellSize = 6

const FlowerWrapper = styled.div`
    display: grid;
    grid-template-areas:
        "l7 l0 l1"
        "l6  c l2"
        "l5 l4 l3";
    width: ${3*cellSize}em;
`

const PetalWrapper = styled.button`
    grid-area: ${({index})=>index};
    
    ${({clickable})=>clickable
            ? `
border: 0.2em solid black;
border-radius: 0.75em;
margin: 0.25em;
padding: 0.25em;
width: ${cellSize}em;
&:hover{
    background: grey;
}
    ` : 'border: 0;'}

    ${({centered})=>centered ? `
display: flex;
align-items: center;
justify-content: center;
    ` : ''};

    ${({selected})=>selected
        ? 'background-color: #dbdbdb;'
        : 'background-color: white;'}
`

const EmotionFlower = ({translate, onPetalClick, selected}) => {
    return (
        <FlowerWrapper>
            {
                emotionFlowerPetals
                    .map((_, i) => 
                        (<PetalWrapper
                            key={i}
                            index={`l${i}`}
                            clickable
                            onClick={()=>onPetalClick(i)}
                            selected={selected===i}
                        >
                            {getEmotionPetalText(i,translate)
                                .split(' ')
                                .map(s=>(<div key={s}>{s}</div>))
                            }
                        </PetalWrapper>)
                    )
            }
            <PetalWrapper index='c' centered>
                {translate('emotions')}
            </PetalWrapper>
        </FlowerWrapper>
    )
}

export default EmotionFlower