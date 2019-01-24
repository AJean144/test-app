import React from 'react';
import Input from './styled/Input';
import Container from './styled/Container';
import InputContainer from './styled/InputContainer';
import IconLeft from './styled/IconLeft';

const TextInput = ({ type, placeholder, name, iconLeft, width, padding, color, handleFilter }) => (
    <Container padding={padding}>
        <InputContainer>
            {iconLeft && <IconLeft>{iconLeft}</IconLeft>}
            <Input
                autoComplete="off"
                width={width}
                placeholder={placeholder}
                type={type}
                name={name}
                id={name}
                color={color}
                onChange={(event) => handleFilter(event)}
                iconLeft={iconLeft}
            />
        </InputContainer>
    </Container>
);

export default TextInput;