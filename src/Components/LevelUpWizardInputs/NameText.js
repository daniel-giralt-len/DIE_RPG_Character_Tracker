import styled from 'styled-components'

const TextInput = styled.textarea`
    resize: none;
    overflow-y: clip;

    border: none;
    border-bottom: 0.1em solid black;
    margin: 0.25em;
    padding: 0.2em;
    padding-bottom: 0;

    max-width: 90em;
    &:focus{
        outline: none;
    }
    ${({isValid})=>isValid ? '':'background: #ffd7d7;'}
`
const NameText = ({
    name,
    onNameChange,
    translate,
    isValid
}) => {
    return (<TextInput
        onChange={e => onNameChange(e.target.value)}
        rows={1}
        value={name}
        placeholder={translate('what is your name?')}
        isValid={isValid}
    />)
}
export default NameText