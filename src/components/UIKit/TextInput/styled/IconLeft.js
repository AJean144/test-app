import styled from 'styled-components';

import { theme } from '../../../../config/theme';

const IconLeft = styled.div`
  display: flex;
  position: absolute;
  left: ${theme.spacing.s};
  top: 50%;
  transform: translateY(-50%);
`;

export default IconLeft;
