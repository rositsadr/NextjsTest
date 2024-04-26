import styled from "styled-components";

import {SectionContainer} from "~/components";
import { Selection } from "../../collections";

export const StyledSectionCardContainer = styled((props) => <SectionContainer { ...props }/>)`
max-width: 1920px;
  flex-wrap: wrap;
  justify-content: center;
  background-image: url('/img/background.png');
  background-size: 75%;
  background-repeat: no-repeat;
  background-position: top 3rem left 0;
  margin: 1rem;
  padding-bottom: 3rem;

  @media only screen and (max-width: 1024px ){
    background-size: 150%;
   }
`;

export const StyledImageContainer = styled(({ ...props }) => <div { ...props } />)`
  width: 100%;
  height: 100%;
  max-width: 25%;

   @media only screen and (max-width: 1024px ){
    max-width: 50%;
   }
`;

export const StyledSelectionsContainer = styled(({...props}) => <div {...props}/>)`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  margin-left: 3.5rem;
`;

export const StyledBriefSelection = styled((props) => <Selection {...props}/>)`
  max-width: 27.5rem;
  background-color: #f9f9f9;

  @media only screen and (max-width: 1024px ){
    max-width: 35rem;
   }
  
`;

export const StyledSearchSelection = styled((props) => <Selection {...props}/>)`
  max-width: 30rem;
  background-color: #f4f4f4;

  @media only screen and (max-width: 1024px ){
    max-width: 37.5rem;
   }
`;

export const StyledPitchSelection = styled((props) => <Selection {...props}/>)`
  max-width: 32.5rem;
  background-color: #f1f1f1;

  @media only screen and (max-width: 1024px ){
    max-width: 40rem;
   }
`;
