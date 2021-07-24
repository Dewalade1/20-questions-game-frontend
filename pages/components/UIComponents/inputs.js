import React from 'react'

import styled from 'styled-components'

const DefaultInput = styled.input`
    border: 3px solid #d6d6d6;
    border-radius: .5em;
    height: 3.4em;
    width: 22em;
    &:hover {
        border: 3px solid #afafaf;
        border-radius: .5em;
    };
    &:focus {
        border: 3px solid #898989 !important;
        border-radius: .5em !important;
    };

    ::placeholder,
    ::-webkit-input-placeholder {
        color: #afafaf;
        font-weight: bold;
        text-align: center;
    }

    :-ms-input-placeholder {
        color: #afafaf;
        font-weight: bold;
        text-align: center;
    }
`

export {DefaultInput}