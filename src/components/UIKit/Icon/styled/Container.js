import styled from 'styled-components';

const Container = styled.svg`
  align-self: center;
  fill: ${props => (props.color ? props.color : 'currentColor')};
  display: inline-flex;
  vertical-align: middle;

  ${props => props.padding && `padding: ${props.padding};`}
  ${props => props.transform && `transform: ${props.transform};`}
`;

export default Container;
