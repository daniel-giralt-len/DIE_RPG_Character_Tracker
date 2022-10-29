import styled from 'styled-components'
import { TextInput } from '../sharedComponents'

const NameText = ({
    name,
    onNameChange,
    translate,
    hasError
}) => {
    return (<TextInput
        onChange={e => onNameChange(e.target.value)}
        rows={1}
        value={name}
        placeholder={translate('what is your name?')}
        hasError={hasError}
    />)
}
export default NameText