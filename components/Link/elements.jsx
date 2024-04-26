import styled from "styled-components";

import { SectionInnerHeading } from "~/components";

export const StyledLink = styled (({...props}) => <a href=" " {...props}/>)`
font-family: sans-serif;
font-weight: 500;
font-size: 16px;
color: black;
`;

export const StyledLinkText = styled((props) => <SectionInnerHeading {...props} />)` 
  font-weight: 600;
`;