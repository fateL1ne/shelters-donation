import React from 'react';
import styled from 'styled-components';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';


const AppBar = styled.div`
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
    height: 2.5rem;
    position: relative;
`;

const Title = styled.div`
    position: absolute;
    padding: 1rem;
    margin-left: 15%;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    color: rgba(0, 0, 0, 0.50);
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
`;

const IconsPanel = styled.div`
    position: absolute;
    margin-left: 75%;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%);
`;



export default function Header() {

    return (
        <AppBar>
            <Title> Nadácia Good Boy </Title>
            <IconsPanel>
                <FacebookIcon />
                <InstagramIcon style={{marginLeft: "0.5rem"}}/>
            </IconsPanel>
        </AppBar>
    );
}