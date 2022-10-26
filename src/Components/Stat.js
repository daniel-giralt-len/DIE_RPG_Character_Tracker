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
    ${({border})=> {
        if(border.startsWith('triangleInverted')){
            return 'padding-bottom: 0.5em;'
        }else if (border.startsWith('triangle')){
            return 'padding-top: 0.3em;'
        }else if (border.startsWith('d10Face')){
            return 'padding-top: 0.3em;'
        }else if (border.startsWith('pentagon')){
            return 'padding-top: 0.1em;'
        }
    }}
`

const NameWrapper = styled.h4`
    margin: 0;
    ${({isImportant})=>isImportant ? 'text-decoration: underline;' : ''}

`

const Stat = ({
    name,
    paragon,
    stat,
    value
}) => {
    const {
        statIcon,
        importantStats,
    } = paragons[paragon]
    return (
        <div>
            <NameWrapper
                isImportant={importantStats.includes(name.toLowerCase())}
            >
                {name}
            </NameWrapper>
            <StatWrapper
                border={statIcon}
            >
                <InputWrapper 
                    type="number"
                    step="1"
                    value={value}
                    name={stat}
                    id={stat}
                    min={2}
                    max={4}
                    border={statIcon}
                />
            </StatWrapper>
        </div>
    )
}

export default Stat