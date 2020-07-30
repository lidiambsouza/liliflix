import styled from 'styled-components';

export const DivFloat = styled.div `
    display: block;
    position: relative;
    padding-top: 13px;
`;

const InputFloat = styled.input`
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 300px;
  border: none;
  border-bottom: 1px solid #757575;
  &:focus {
    outline: none;
  }
`;

export const LabelFloat = styled.label `
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: .25em;
    top: 50%;    
    transition: .3s ease all;
    -moz-transition: .3s ease all;
    -webkit-transition: .3s ease all;
    color: #898989;
    line-height: 1;

    ${InputFloat}:focus ~ & {
        top:-.75em;
        font-size:12px;
        color:#5264AE;
    }

`;
