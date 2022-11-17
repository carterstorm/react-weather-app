import { StyledButton, ImageButton, TextButton } from "./styled";

export const Button = ({ img, content }) => {
    return (
        <StyledButton>
            {content ? (<TextButton>{content}</TextButton>) : (<ImageButton src={img} />)}
        </StyledButton>
    )
};