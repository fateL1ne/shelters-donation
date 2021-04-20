import React from 'react';
import styled from 'styled-components';
import { Divider, Grid } from '@material-ui/core';
import GoodBoyLogo from './../assets/images/good_boy_logo.png'


const Tittle = styled.div`
    font-family: "Arial Black", Gadget, sans-serif;
    font-size: 20px;
    letter-spacing: 2px;
    word-spacing: 2px;
    color: #000000;
    font-weight: 700;
    text-decoration: none;
    font-style: normal;
    font-variant: normal;
    text-transform: none;
    float: right;
`;

const List = styled.div`
    list-style-type: none;
`;

const Item = styled.div`
    padding: 5px;
    color: #616161;
`;


export default function Footer() {
    return (
        <>
        <Divider/>
        <Grid style={{ marginBlockStart: "10%"}} container justify="center" alignItems="center">

            <Grid item xs={3}>
                <Grid container justify="center" alignItems="center" spacing={3}>
                    <Grid item>
                        <img src={GoodBoyLogo} />
                    </Grid>
                    <Grid item>
                        <Tittle> Good Boy </Tittle>   
                    </Grid>
                </Grid>
            </Grid> 

            <Grid item xs={3}>
                <h4>Nadacia good boy</h4>
                <List>
                    <Item>O projekte</Item>
                    <Item>Ako na to</Item>
                    <Item>Kontakt</Item>
                </List>
            </Grid>

            <Grid item xs={3}>
                <h4>Nadacia good boy</h4>
                <List>
                    <Item>O projekte</Item>
                    <Item>Ako na to</Item>
                    <Item>Kontakt</Item>
                </List>
            </Grid>

            <Grid item xs={3}>
                <h4>Nadacia good boy</h4>
                <List>
                    <Item>O projekte</Item>
                    <Item>Ako na to</Item>
                    <Item>Kontakt</Item>
                </List>
            </Grid>

        </Grid>
        </>
    );
}