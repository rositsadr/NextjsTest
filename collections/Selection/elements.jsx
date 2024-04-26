import styled from "styled-components";
import { SectionContainer, SectionParagraph, Link, TextContainer} from "~/components";

export const StyledSelectionContainer = styled((props) => <SectionContainer {...props}/>)`
  margin:0;
  margin-bottom: 1.5rem;
  border-radius: 5px;
`;

export const StyledTextContainer = styled((props) => <TextContainer {...props}/>)`
  margin-right: 2rem;
`;

export const StyledParagraph = styled((props) => <SectionParagraph {...props}/>)`
  font-size: 13px;
  line-height: 18px;
  margin: 0;
`;

export const StyledLink = styled((props) => <Link {...props}/>)``;

export const StyledImageContainer = styled(({...props}) => <div {...props}/>)`
  max-width: 140px;
  max-heigth: 140px;
  width: 100%;
  height: 100%;
  margin: 1rem;
`;