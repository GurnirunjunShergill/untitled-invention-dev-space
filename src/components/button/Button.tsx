import React from "react";
import styled from "styled-components";
import { ButtonProps } from "./ButtonTypes";

const StyledButton = styled.button<ButtonProps>`
  background-color: white;
  border: 2px solid black;
  padding: 8px;
  margin: 8px;

  &:hover {
    cursor: pointer;
  }
  &:focus-visible {
    outline: 2px solid black;
    outline-offset: 2px;
  }
`;

const Button: React.FC<ButtonProps> = ({
  className,
  style,
  id,
  ariaLabel,
  ariaLabelledBy,
  ariaExpanded,
  ariaControls,
  onClick,
  disabled = false,
  variant,
  children,
}) => {
  const buttonProps = {
    disabled: disabled,
    variant: variant,
    ...(id && { id: id }),
    ...(disabled && { ariaDisabled: disabled }),
    ...(className && { className: className }),
    ...(ariaLabel && { ariaLabel: ariaLabel }),
    ...(ariaExpanded && { ariaExpanded: ariaExpanded }),
    ...(ariaControls && { ariaControls: ariaControls }),
    ...(ariaLabelledBy && { ariaLabelledBy: ariaLabelledBy }),
    ...(style && { style: style }),
    ...(onClick && { onClick: onClick }),
  };

  return <StyledButton {...buttonProps}>{children}</StyledButton>;
};

export default Button;
