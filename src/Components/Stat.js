import paragons from '../data/paragons'
import styled from 'styled-components'

const StatWrapper = styled.div`
    background: url(${({border})=>border});
    background-size: cover;

    width: 3em;
    height: 3em;

    display: flex;
    justify-content: center;
    align-items: center;
`

const InputWrapper = styled.input`
    padding: 0;
    border: 0;
    background: none;
    ::-webkit-inner-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
    }
    ::-webkit-outer-spin-button{
        -webkit-appearance: none; 
        margin: 0; 
    }
    text-align: center;
    width: 1em;
`

const Stat = ({paragon, stat, value}) => (
    <StatWrapper border={paragons[paragon].statIcon}>
        <InputWrapper 
            type="number"
            step="1"
            value={2}
            name={stat}
            id={stat}
            min={2}
            max={4}
        />
    </StatWrapper>
)

export default Stat