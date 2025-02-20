import styled from "styled-components";
import { InputProps } from "./InputTypes";

const StyledInput = styled.input`
    padding: 8px;
    margin: 8px;
    font-size: 16px;
    border: 2px solid black;
    
    &:focus-visible {
    outline: 2px solid black;
    outline-offset: 2px;
  }
`;

const Input = ({

}:InputProps) =>{
    const InputProps = {
        type: 'text'
    }

    return(
        <StyledInput {...InputProps}/>
    )
}

export default Input;