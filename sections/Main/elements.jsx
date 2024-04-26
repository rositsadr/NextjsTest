import styled from "styled-components";

import {SectionContainer, SectionHeading, SectionInnerHeading, TextContainer} from "~/components";

export const StyledContainer = styled(({ ...props }) => <SectionContainer { ...props } />)`
  margin-top: 8rem;
  flex-direction: column;
`;

export const StyledTextContainer = styled(({ ...props }) => <TextContainer { ...props } />)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 2rem;
`;

export const StyledSectionTitle = styled((props) => <SectionHeading { ...props } />)`
  color: black;
  font-size: 2.2rem;
  line-height: 3rem;
  margin: 0;

  @media only screen and (max-width: 1024px ){
    font-size: 3rem;
    line-height: 4rem;
   }
`;

export const StyledInnerHeading = styled((props) => <SectionInnerHeading { ...props } />)`
  margin: 0;

  @media only screen and (max-width: 1024px ){
    font-size: 1.5rem;
    line-height: 2rem;
   }
`;