import { Card } from "../../collections/";

import { 
    StyledContainer, 
    StyledInnerHeading, 
    StyledTextContainer, 
    StyledSectionTitle,  } from "./elements";

export const Main = ({image, title, description, brief, search, pitch, sign, ...props}) => {
    return (
    <StyledContainer {...props}>
        <StyledTextContainer>
            <StyledSectionTitle>{title}</StyledSectionTitle>
            <StyledInnerHeading>{description}</StyledInnerHeading>
        </StyledTextContainer>
        <Card image={image} brief={brief} search={search} pitch={pitch} sign={sign} />
    </StyledContainer>
    );
}