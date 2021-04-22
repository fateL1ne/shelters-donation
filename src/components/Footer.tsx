import React from 'react';
import styled from 'styled-components';
import { Divider, Grid, Typography, Box } from '@material-ui/core';
import GoodBoyLogo from './../assets/images/good_boy_logo.png'
import { useTranslation } from "react-i18next";


const Title = styled.div`
    font-family: 'Roboto', sans-serif;
    font-size: 26px;
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


export default function Footer() {

    const { t } = useTranslation();

    return (
        <>
        <Divider/>
        <Grid style={{ marginBlockStart: "5%"}} container justify="center" alignItems="center" spacing={3}>

            <Grid item xs={4}>
                <Grid container justify="center" alignItems="center" spacing={3}>
                    <Grid item>
                        <img src={GoodBoyLogo} />
                    </Grid>
                    <Grid item>
                        <Title> {t("foundationName")} </Title>   
                    </Grid>
                </Grid>
            </Grid> 

            <Grid item xs={4}>
                <Typography component="div">
                    <Box fontWeight="fontWeightBold">
                        {t("title")} 
                    </Box>
                </Typography>
                <Typography color="textSecondary" component="p" style={{marginBlockStart: "1.5rem"}}>
                    <Box  p={0.5} fontWeight="fontWeightRegular">
                        {t("aboutProject")} 
                    </Box>
                    <Box  p={0.5} fontWeight="fontWeightRegular">
                        {t("howTo")} 
                    </Box>
                    <Box  p={0.5} fontWeight="fontWeightRegular">
                        {t("contact")} 
                    </Box>
                </Typography>

            </Grid>

            <Grid item xs={4}>

            </Grid>

        </Grid>
        </>
    );
}