import styled from "styled-components";
import { ButtonGroupProps } from "./ButtonGroupTypes";

const StyledButtonGroup = styled.div<{ $listHorizontal?: boolean}>`
    display: flex;
    flex-direction: ${props => props.$listHorizontal ? 'column' : 'row'};
    width: ${props => props.$listHorizontal ? 'fit-content' : 'unset'}
`;

const ButtonGroup = ({
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