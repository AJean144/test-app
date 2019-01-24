import styled from 'styled-components';

const Container = styled.div`
  ${props => props.inline && `
    align-items: center;
    display: flex;
  `};
  ${props => props.padding && `padding: ${props.padding};`}
`;

export default Container;
