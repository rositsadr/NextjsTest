import Image from "next/image";

import { StyledContainer, StyledInnerHeading, StyledImageContainer, StyledTextContainer, StyledSectionTitle, StyledSubsectionContainer, StyledCardContainer } from "../Main/elements";

export const Main = ({image, title, description, ...props}) => {
    return (
    <StyledContainer {...props}>
        <StyledTextContainer>
            <StyledSectionTitle>{title}</StyledSectionTitle>
            <StyledInnerHeading>{description}</StyledInnerHeading>
        </StyledTextContainer>
        <StyledSubsectionContainer>
            <StyledImageContainer>
                <Image layout="responsive" src={image.src} width={image.width} height={image.height}/>
            </StyledImageContainer>
            <StyledCardContainer></StyledCardContainer>
        </StyledSubsectionContainer>
    </StyledContainer>
    );
}