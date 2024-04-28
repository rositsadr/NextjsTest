import styled from "styled-components";
import { SectionContainer, SectionParagraph, Link, TextContainer} from "~/components";


export const StyledLink = styled((props) => <Link {...props}/>)`
`;

export const StyledSelectionContainer = styled((props) => <SectionContainer {...props}/>)`
  margin:0;
  margin-bottom: 1.5rem;
  border-radius: 5px;
  
  &:hover{
    border: 2px solid;
    border-color: #0070f3;
    ${StyledLink}{
      color: #0070f3;
      text-decoration: underline;
    }
  }
`;

export const StyledTextContainer = styled((props) => <TextContainer {...props}/>)`
  margin-right: 2rem;
`;

export const StyledParagraph = styled((props) => <SectionParagraph {...props}/>)`
  margin: 0;

  @media only screen and (max-width: 1024px ){
    max-width: 39.5rem;
    font-size: 1.5rem;
    line-height: 1.75rem;
   }
`;

export const StyledImageContainer = styled(({...props}) => <div {...props}/>)`
  max-width: 27%;
  max-heigth: auto;
  width: 100%;
  height: 100%;
  margin: 1rem;
`;