import styled from "styled-components";

import {SectionContainer, Link} from "~/components";
import { Selection } from "../../collections";

export const StyledSectionCardContainer = styled((props) => <SectionContainer { ...props }/>)`
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1420px;
  background-image: url('/img/background.png');
  background-size: 71%;
  background-repeat: no-repeat;
  background-position: top 1rem left 0;
  margin: 1rem;
  padding-bottom: 3rem;

  @media only screen and (max-width: 1024px ){
    background-size: 150%;
    background-position: top 3rem left 25%;
   }
`;

export const StyledImageContainer = styled(({ ...props }) => <div { ...props } />)`
  width: 100%;
  height: auto;
  max-width: 20rem;
  margin-left: 1.5rem;

   @media only screen and (max-width: 1024px ){
    max-width: 50%;
    margin-left: 0;
   }
`;

export const StyledSelectionsContainer = styled(({...props}) => <div {...props}/>)`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  margin-left: 4rem;
  transition: color 0.15s ease, border-color 0.15s ease;
  position: relative;

  @media only screen and (max-width: 1024px ){
    margin-top: 3rem;
    margin-left:0;
   }
`;

export const StyledBriefSignContainer = styled(({...props}) => <div {...props}/>)`
  max-width: 200px;
  visibility: hidden;
  position: absolute;
  top: 0;
  right: 3%;
  transform: rotate(10deg);
  
  @media only screen and (max-width: 1024px ){
    visibility: visible;
   }
`;

export const StyledBriefLink = styled((props) => <Link {...props}/>)`
  color: #e74c5b;
  font-weight: 600;
`;

export const StyledBriefSelection = styled((props) => <Selection {...props}/>)`
  max-width: 30rem;
  background-color: #f9f9f9;

  @media only screen and (max-width: 1024px ){
    max-width: 64%;
   }
`;

export const StyledSearchSelection = styled((props) => <Selection {...props}/>)`
  max-width: 32.5rem;
  background-color: #f4f4f4;

  @media only screen and (max-width: 1024px ){
    max-width: 68%;
   }
`;

export const StyledPitchSelection = styled((props) => <Selection {...props}/>)`
  max-width: 35rem;
  background-color: #f1f1f1;

  @media only screen and (max-width: 1024px ){
    max-width: 72%;
   }
`;
