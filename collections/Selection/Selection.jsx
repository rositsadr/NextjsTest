import Image from "next/image";

import {StyledLink, StyledParagraph, StyledSelectionContainer, StyledImageContainer, StyledTextContainer} from "./elements";

export const Selection = ({text, description, icon, ...props}) => {
    return(
        <StyledSelectionContainer {...props}>
            <StyledImageContainer>
                <Image layout="responsive" src={icon.src} alt={icon.alt} width={icon.width} height={icon.height} />
            </StyledImageContainer>
            <StyledTextContainer>
                <StyledLink>{text}</StyledLink>
                <StyledParagraph>{description}</StyledParagraph>
            </StyledTextContainer>
        </StyledSelectionContainer>
    );
};

