import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from '../global';
import { Grid } from '@material-ui/core';


const CustomButton = styled.button<{ float : string}>`
    background: #C4794F;
    border-radius: 2rem;
    border: 1px solid rgba(0, 0, 0, 0.12);
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    outline: none;
    color: #ffffff;
    font-size: 14px;
    padding: 1.2rem;
    min-width: 8rem;
    text-decoration: none;
    float: ${(props) => props.float};
    margin-right: ${(props) => (props.float === "right") ? "4rem" : "0" };
`;


export default function Button(props : ButtonProps) {
    return ( 
        <CustomButton 
            float={props.float} 
            onClick={() => props.callback()}
        > {props.title} </CustomButton>
    );
}
