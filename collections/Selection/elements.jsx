import styled from "styled-components";
import { SectionContainer, SectionParagraph, Link, TextContainer} from "~/components";


export const StyledLink = styled((props) => <Link {...props}/>)`
`;

export const StyledSelectionContainer = styled((props) => <SectionContainer {...props}/>)`
  margin:0;
  margin-bottom: 1.5rem;
  border-radius: 7.5px;
  
  &:hover{
    border: 2px solid;
    border-color: #0070f3;
    ${StyledLink}{
      color: #0070f3;
      text-decoration: underline;
    }
  }

  @media only screen and (max-width: 1024px ){
    margin-left: 15%;
   }
`;

export const StyledTextContainer = styled((props) => <TextContainer {...props}/>)`
  margin-right: 2rem;
  padding-bottom: 2rem;
`;

export const StyledParagraph = styled((props) => <SectionParagraph {...props}/>)`
  margin: 0;

  @media only screen and (min-width: 768px) and (max-width: 1024px ){
    font-size: 130%;
    line-height: 1.75rem;
   }
`;

export const StyledImageContainer = styled(({...props}) => <div {...props}/>)`
  max-width: 140px;
  width: 100%;
  height: auto;
  margin: 5px;
`;