import React from 'react';
import get from 'lodash/get';

import icons from '../../../config/icons';

import Container from './styled/Container';

const getDefaultIcon = () =>
    get(icons.filter(icon => icon.name === 'circle'), '0.path');

const getPath = (name) =>
    get(icons.filter(icon => icon.name === name), '0.path', getDefaultIcon());

const isArray = (name) => Array.isArray(getPath(name));

const Icon = ({
    name,
    color,
    height = '20',
    size = '20',
    width = '20',
    transform,
    padding,
    ...props
}) => {
    const newWidth = size || width;
    const newHeight = size || height;

    return (
        <Container
            color={color}
            width={newWidth}
            height={newHeight}
            transform={transform}
            viewBox="0 0 20 20"
            padding={padding}
            {...props}
        >
            {isArray(name) ? (
                getPath(name).map((d, i) => <path key={i} d={d} />)
            ) : (
                    <path d={getPath(name)} />
                )}
        </Container>
    );
};

export default Icon;
