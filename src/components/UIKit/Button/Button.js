import React from 'react';
import StyledButton from './styled/StyledButton';

const Button = ({buttonText}) => (
  <StyledButton>
    {buttonText}
  </StyledButton>
);

export default Button;