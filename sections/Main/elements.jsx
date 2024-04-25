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
`;

export const StyledSectionTitle = styled((props) => <SectionHeading { ...props } />)`
  color: black;
  font-size: 2.2rem;
  line-height: 3rem;
  margin: 0;
`;

export const StyledInnerHeading = styled((props) => <SectionInnerHeading { ...props } />)`
  margin: 0;
`;

export const StyledImageContainer = styled(({ ...props }) => <div { ...props } />)`
  max-width: 20rem;
  max-height: 35rem;
  width: 43%;
  height: 70%;
  margin-left: 15rem;
`;

export const StyledSubsectionContainer = styled(({ ...props }) => <SectionContainer { ...props }/>)`
  background-image: url('/img/background.png');
  background-size: 75%;
  background-repeat: no-repeat;
  background-position: top 2rem left 0;
  margin: 2.7rem;
  padding-bottom: 3rem;
`;

export const StyledCardContainer = styled(({ ...props }) => <SectionContainer { ...props }/>)``;