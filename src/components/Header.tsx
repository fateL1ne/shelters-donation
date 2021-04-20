import React from 'react';
import styled from 'styled-components';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';


const AppBar = styled.div`
    width: 100%;
    border-bottom: 1px solid #616161;
    height: 2rem;
`;

const Title = styled.div`
    padding: 1rem;
    margin-left: 15%;
    float: left;
    font-family: 'Roboto', sans-serif;
    font-size: 15px;
    letter-spacing: 2px;
    word-spacing: 2px;
    color: #616161;
    font-weight: normal;
    text-decoration: none;
    font-style: normal;
    font-variant: normal;
    text-transform: none;
`;

const IconsPanel = styled.div`
    float: right;
    margin-right: 15%;
`;



export default function Header() {

    return (
        <AppBar>
            <Title> Nadácia Good Boy </Title>
            <IconsPanel>
                <FacebookIcon/>
                <InstagramIcon/>
            </IconsPanel>
        </AppBar>
    );
}