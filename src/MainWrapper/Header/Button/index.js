import { Content, StyledButton } from "./styled";

export const Button = ({ content }) => {
    return (
        <StyledButton>
            <Content>
                {content}
            </Content>
        </StyledButton>
    )
};
