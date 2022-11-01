import { StyledButton, ImageButton, TextButton } from "./styled";

export const Button = ({ img, content }) => {

    if (content) {
        return (
            <StyledButton>
                <TextButton>{content}</TextButton>
            </StyledButton>
        )
    }

    return (
        <StyledButton>
            <ImageButton src={img} />
        </StyledButton>
    )

};