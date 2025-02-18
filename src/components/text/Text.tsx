import styled from "styled-components"
import { TextProps } from "./TextTypes";

const StyledText = styled.p`
    margin: 0;
    padding: 0;
    font-size: 16px;
`;

const Text = ({
    id, 
    className,
    style,
    children,
}:TextProps) =>{
    const TextProps = {
        id: id,
        className: className,
        style: style,
    }

    return(
        <StyledText {...TextProps}>{children}</StyledText>
    )
}

export default Text;