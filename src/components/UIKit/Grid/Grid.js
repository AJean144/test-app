import styled from 'styled-components';
import { theme } from '../../../config/theme';

const setColumnsStyles = (props) => (
  `grid-template-columns: ${props.cols.includes('px') 
    ? props.cols 
    : 
  `repeat(${props.cols}, minmax(0, 1fr))`};`
);

const Grid = styled.div`
    display: grid;
    ${props => props.gap && `grid-gap: ${props.gap};`}
    ${props => props.cols && setColumnsStyles(props)}
    ${props => props.rows && `grid-template-rows: repeat(${props.rows});`}


    ${props => props.borderTop && `border-top: ${props.borderTop};`}
    ${props => props.padding && `padding: ${props.padding};`}
    ${props => props.bgColor && `background: ${props.bgColor};`}
    ${props => props.textColor && `color: ${props.textColor};`}
    ${props => props.fixed && `position: fixed;`}
    ${props => props.dropShadow && `box-shadow: ${theme.boxShadow.extraDark};`}
    ${props => props.alignItems && `align-items: ${props.alignItems};`}
    ${props => props.justifyItems && `justify-items: ${props.justifyItems};`}
    ${props => props.justifyContent && `justify-content: ${props.justifyContent};`}
    ${props => props.alignContent && `justify-content: ${props.alignContent};`}
`

export default Grid;