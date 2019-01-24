import styled from 'styled-components';

export const StyledTable = styled.table`
  background: #f4f8f9;
  border: none;
  width: 100%;

  border-collapse: separate; 
  border-spacing: 0;
  border-spacing: 0 0.7rem;
`;

export const TD = styled.td`
  ${props => props.textAlign && `text-align: ${props.textAlign};`}
  padding: 10px 10px 10px 20px;
  font-weight: 300;
  width: 200px;

  :first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }

  :last-child {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;

export const TH = styled.th`
  ${props => props.textAlign && `text-align: ${props.textAlign};`}
  padding-left: 20px; 
  font-weight: 400;
`;

export const TR = styled.tr`
  ${props => props.color && `color: ${props.color};`}
  ${props => props.bgColor && `background: ${props.bgColor};`}
  :first-child {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  :last-child {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  :hover {
    ${props => props.hoverable && `background: #e8f4f9;`}
  }
`;

