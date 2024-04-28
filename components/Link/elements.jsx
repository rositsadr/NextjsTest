import styled from "styled-components";

import { SectionInnerHeading } from "~/components";

export const StyledLink = styled (({...props}) => <a href=" " {...props}/>)`
  font-family: 'Popins';
  font-weight: 500;
  font-size: 1.5rem;
  color: black;
  text-decoration: none;

  @media only screen and (max-width: 1024px ){
    font-size: 2rem;
   }
`;

export const StyledLinkText = styled((props) => <SectionInnerHeading {...props} />)` 
  font-weight: 600;
`;