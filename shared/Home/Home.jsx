import React from 'react';
import styled from 'styled-components';
import style from './style';

const Button = styled.button`
  background: ${props => (props.primary ? 'red' : 'white')};
  color: ${props => (props.primary ? 'white' : 'palevioletred')};
  font-size: 1.2em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;
export default () => (
  <center>
    <div {...style}>Some content</div>
    <Button>Normal</Button>
    <Button primary>Primary</Button>
  </center>
);
