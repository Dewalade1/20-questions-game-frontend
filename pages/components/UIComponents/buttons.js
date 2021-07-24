import React from 'react'
import styled from 'styled-components'

const DarkButton = styled.button`
    background-color: #3b3b3b;
    border: 1px solid #3b3b3b;
    border-radius: 0.4em;
    color: #ffffff;
    font-weight: bold;
    font-size: 1.1em;
    height: 3.4em;
    margin: 2em;
    transition: 0.3s;
    width: 20em;
    &: hover {
        background-color: #242424;
        border: 1px solid #242424;
    }
`;

const TransparentButton = styled.button`
    background-color: inherit;
    border: 3px solid #ffffff;
    border-radius: 0.4em;
    color: #ffffff;
    font-weight: bold;
    font-size: 1.1em;
    height: 3.4em;
    margin: 2em;
    transition: 0.3s;
    width: 20em;
    &: hover {
        background-color: #ffffff;
        border: 1px solid #ffffff;
        color: #242424;
    }
`

export { DarkButton, TransparentButton }