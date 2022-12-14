import paragons from '../data/paragons'
import styled from 'styled-components'

const StatSectionWrapper = styled.div`
    margin: 0 0.33em;
`

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
    text-align: center;
    width: 2em;
    padding-left: 0.75em;
    ${({disabled})=> disabled?'color: gray;':''}
    ${({border})=> {
        if(border.startsWith('triangleInverted')){
            return 'padding-bottom: 0.5em;'
        }else if (border.startsWith('triangle')){
            return 'padding-top: 0.4em;'
        }else if (border.startsWith('d10Face')){
            return 'padding-top: 0.3em;'
        }else if (border.startsWith('pentagon')){
            return 'padding-top: 0.25em;'
        }
    }}
`

const NameWrapper = styled.h4`
    margin: 0;
    ${({isImportant})=>isImportant ? 'text-decoration: underline;' : ''}

`

const Stat = ({
    disabled,
    isBaseStat = false,
    name,
    onStatChange,
    paragon,
    translate,
    value
}) => {
    const {
        statIcon,
        importantStats,
    } = paragons[paragon]
    return (
        <StatSectionWrapper>
            <NameWrapper
                isImportant={importantStats.includes(name)}
            >
                {translate(name)}
            </NameWrapper>
            <StatWrapper
                border={statIcon}
            >
                <InputWrapper 
                    type="number"
                    step="1"
                    value={value}
                    name={name}
                    id={name}
                    min={isBaseStat ? 2 : 0}
                    max={isBaseStat ? 4 : 100}
                    border={statIcon}
                    disabled={!isBaseStat || disabled}
                    onChange={e => onStatChange(name, parseInt(e.target.value))}
                />
            </StatWrapper>
        </StatSectionWrapper>
    )
}

export default Stat