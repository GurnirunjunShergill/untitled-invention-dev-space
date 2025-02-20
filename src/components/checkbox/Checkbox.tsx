import styled from "styled-components";
import { CheckboxProps } from "./CheckboxTypes";

const StyledLabelForCheckbox = styled.label`
  display: flex;
  font-size: 16px;
  padding: 8px;
  margin: 8px;
  width: fit-content;
`;

const StyledCheckboxInput = styled.input`
  font-size: 16px;
  margin-right: 8px;
  accent-color: black;

  &:hover {
    cursor: pointer;
  }
  &:focus-visible {
    outline: 2px solid black;
    outline-offset: 2px;
  }
`;

const Checkbox: React.FC<CheckboxProps> = ({
  htmlForId,
  children,
}: CheckboxProps) => {
  return (
    <StyledLabelForCheckbox htmlFor={htmlForId}>
      <StyledCheckboxInput id={htmlForId} type="checkbox" />
      {children}
    </StyledLabelForCheckbox>
  );
};

export default Checkbox;
