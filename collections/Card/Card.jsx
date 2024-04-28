import Image from "next/image";

import { 
    StyledSectionCardContainer,
    StyledImageContainer, 
    StyledSelectionsContainer,
    StyledBriefSelection,
    StyledPitchSelection,
    StyledSearchSelection,
    StyledBriefSignContainer,
    StyledBriefLink 
} from "./elements";

export const Card = ({image, brief, search, pitch, sign, ...props}) => {
    return(
        <StyledSectionCardContainer {...props}>
            <StyledImageContainer>
                <Image layout="intrinsic" alt={image.alt} src={image.src} width={image.width} height={image.height}/>
            </StyledImageContainer>
            <StyledSelectionsContainer>
                <StyledBriefSignContainer>
                    <StyledBriefLink>{sign}</StyledBriefLink>
                </StyledBriefSignContainer>
                <StyledBriefSelection text={brief.text} description={brief.description} icon={brief.image}/>
                <StyledSearchSelection text={search.text} description={search.description} icon={search.image}/>
                <StyledPitchSelection text={pitch.text} description={pitch.description} icon={pitch.image}/>
            </StyledSelectionsContainer>
        </StyledSectionCardContainer>
    );
};
