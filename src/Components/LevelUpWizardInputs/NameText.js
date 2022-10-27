import styled from 'styled-components'

const TextInput = styled.textarea`
    resize: none;
    overflow-y: clip;

    border: 0.1em solid black;
    border-radius: 0.75em;
    margin: 0.25em;
    padding: 0.2em;
    
    max-width: 90em;
    &:focus{
        outline: none;
    }
`
const NameText = ({
    name,
    onNameChange,
    translate,
}) => {
    return (<TextInput
        onChange={e => onNameChange(e.target.value)}
        rows={1}
        value={name}
        placeholder={translate('what is your name?')}
    />)
}
export default NameText