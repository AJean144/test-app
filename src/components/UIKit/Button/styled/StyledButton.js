import styled from 'styled-component';

import {darken} from '../../../../lib/styleUtils';

const StyledButton = styled.button`
  border: none;
  borderRadius: 5;
  fontWeight: 300;
  textAlign: center;

  ${props => props.bgColor && `background: ${props.bgColor};`}
  ${props => props.color && `color: ${props.color};`}
  ${props => props.padding && `padding: ${props.padding};`}
  ${props => props.margin && `margin: ${props.margin};`}

  :hover {
    ${props => props.bgColor && `background: ${darken(props.bgColor)};`}
  }
`

export default StyledButton;