import styled from 'styled-components'
import SectionTitle from "./SectionTitle"

const ListItemWrapper = styled.li`list-style-type: disclosure-closed;`

const AdvancementList = ({
    advancements,
    translate
}) => {
    return (
        <div>
            <SectionTitle>
                {`${translate('advancements').toUpperCase()}`}
            </SectionTitle>
            <ul>
                {advancements.map(title => (<ListItemWrapper>{translate(title)}</ListItemWrapper>))}
            </ul>
        </div>
        )
}
export default AdvancementList