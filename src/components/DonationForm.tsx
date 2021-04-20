import { Grid, Typography, Box } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { Shelters, Shelter } from './../react-app-env'; 
import { fetchShelters } from './../service/http/Shelter';
import Select from '@material-ui/core/Select';


export default function DonationForm() {
    const [ shelters, setShelters ] = useState<Shelters | null>(null);
    const [ donationSum, setDonationSum ] = useState<Number>(0);
    const [ generalDonation, setGeneralDonation ] = useState<Boolean>(true);
    const [ chooseShelter, setChoosenShelter ] = useState<Shelter | null>(null);


    useEffect(() => {
        fetchShelters().then( (shelters : Shelters) => {
            console.log(shelters);
            setShelters(shelters);
        }).catch( (err : Error) => {
            console.log(err);
        })
    }, [])

    return (
        <Grid container direction="column" spacing={3}>
            <Grid item>
            <Typography component="div">
                <Box fontSize="h3.fontSize" fontWeight="fontWeightMedium" m={1}>
                    Potrebujeme od Vás zopár informácií
                </Box>
            </Typography>
            </Grid>
            <Grid item>
                neskor
            </Grid>
            <Grid item xs={9}>
                <h3> Najviac mi záleží na útulku</h3>
                <Select fullWidth/>
            </Grid>
            <Grid item>
                <h3>Suma ktorou chcem prispiet</h3>
                <Grid container spacing={3}>
                    <Grid item>
                        5e
                    </Grid>
                    <Grid item>
                        10e
                    </Grid>
                    <Grid item>
                        20e
                    </Grid>
                    <Grid item>
                        30e
                    </Grid>
                    <Grid item>
                        50e
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );

}