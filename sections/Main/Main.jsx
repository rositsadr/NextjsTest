import { StyledContainer, StyledDescription, StyledImageContainer, StyledTextContainer, StyledTitle } from "../Main/elements"

export const Main = ({title, description, ...props}) => {
    return (
    <StyledContainer {...props}>
        <StyledTextContainer>
            <StyledTitle>{title}</StyledTitle>
            <StyledDescription>{description}</StyledDescription>
        </StyledTextContainer>
        <StyledImageContainer> </StyledImageContainer>
    </StyledContainer>
    );
}