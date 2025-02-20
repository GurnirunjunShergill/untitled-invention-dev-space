import styled from "styled-components";
import { ButtonGroupProps } from "./ButtonGroupTypes";

const StyledButtonGroup = styled.div<{ $listHorizontal?: boolean}>`
    display: flex;
    flex-direction: ${props => props.$listHorizontal ? 'column' : 'row'};
    width: fit-content;
`;

const ButtonGroup: React.FC<ButtonGroupProps> = ({
    listHorizontal = false,
    children,
}:ButtonGroupProps)=>{

    return(
        <StyledButtonGroup $listHorizontal={listHorizontal}>
            {children}
        </StyledButtonGroup>
    )
}

export default ButtonGroup;