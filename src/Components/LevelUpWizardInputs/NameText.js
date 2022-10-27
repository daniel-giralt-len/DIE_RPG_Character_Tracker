import styled from 'styled-components'

const TextInput = styled.textarea`
    resize: none;
    font-size: 1.5em;

    padding: 2px 5px;
    margin: 0;

    border-color: #000;
    width: -webkit-fill-available;
    rows: 1;
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