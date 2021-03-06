import React from "react";
import styled from "styled-components";

const DarkButton = styled.button`
  background-color: #3b3b3b;
  border: 1px solid #3b3b3b;
  border-radius: 0.4em;
  color: #ffffff;
  font-weight: bold;
  font-size: 1.1em;
  height: 2.7em;
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
  height: 2.7em;
  margin: 2em;
  transition: 0.3s;
  width: 20em;
  &: hover {
    background-color: #ffffff;
    border: 1px solid #ffffff;
    color: #242424;
  }
`;

const GreenButton = styled.button`
  background-color: #66bf39;
  border: 1px solid #66bf39;
  border-radius: 0.4em;
  color: #ffffff;
  font-weight: bold;
  font-size: 1.1em;
  height: 2.7em;
  margin: 2em;
  transition: 0.3s;
  width: 20em;
  &: hover {
    background-color: #1f4d12;
    border: 1px solid #1f4d12;
  }
`;

const RedButton = styled.button`
  background-color: #ff3355;
  border: 1px solid #ff3355;
  border-radius: 0.4em;
  color: #ffffff;
  font-weight: bold;
  font-size: 1.1em;
  height: 2.7em;
  margin: 2em;
  transition: 0.3s;
  width: 20em;
  &: hover {
    background-color: #c60929;
    border: 1px solid #c60929;
  }
`;

export { DarkButton, TransparentButton, GreenButton, RedButton };
