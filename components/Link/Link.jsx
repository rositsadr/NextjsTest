import { StyledLink, StyledLinkText } from "./elements";

export const Link = ({children,...props}) => {
    return(
        <StyledLink {...props}>
            <StyledLinkText>{children}</StyledLinkText>
        </StyledLink>
    );
};
