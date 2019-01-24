import styled from 'styled-components';

import { theme } from '../../../../config/theme';

const Input = styled.input`
  ::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    color: #d1d9dc;
    font-weight: 300;
  }

  ::-moz-placeholder { /* Firefox 19+ */
    color: #d1d9dc;
    font-weight: 300;
  }

  :-ms-input-placeholder { /* IE 10+ */
    color: #d1d9dc;
    font-weight: 300;
  }

  :-moz-placeholder { /* Firefox 18- */
    color: #d1d9dc;
    font-weight: 300;
  }

  background-color: #ffffff;
  border: none;

  font-size: ${theme.fonts.sizes.base};
  font-weight: 300;
  line-height: 1.2;

  padding: ${props => props.size ? theme.spacing[props.size] : theme.spacing.s};
  width: ${props => (props.width ? props.width : '100%')};

  &:focus {
    outline: none;
  }

  ${props => props.color && `color: ${props.color};`}

  ${props => props.iconLeft && `padding-left: ${theme.spacing.l};`};
  ${props => props.iconRight && `padding-right: ${theme.spacing.l};`};
`;

export default Input;
