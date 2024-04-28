import styled from "styled-components";

import { SectionInnerHeading } from "~/components";

export const StyledLink = styled (({...props}) => <a href=" " {...props}/>)`
  color: black;
  text-decoration: none;
`;

export const StyledLinkText = styled((props) => <SectionInnerHeading {...props} />)` 
  font-weight: 600;
  font-size: 20px;
  margin-bottom: 5px;

  @media only screen and (min-width: 768px) and (max-width: 1024px ){
    font-size: 150%;
   }
`;