import { Grid, Typography, Box, MenuItem, FormControl, InputLabel } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { Shelters, Shelter, State, Donation } from '../../../global'; 
import { fetchShelters } from '../../../service/http/Shelter';
import Select from '@material-ui/core/Select';
import AmountPicker from './AmountPicker';
import PayloadToggle from './PaymentToggle';
import store from '../../../redux/store';
import { setShelter } from '../../../redux/slices/Donation';
import { connect } from 'react-redux';
import { increment } from '../../../redux/slices/Steps';
import Button from '../../Button';
import { showMessage } from '../../../service/ui/Toastify';
import { useTranslation } from 'react-i18next';




function DonationForm(props : any) {

    const [ shelters, setShelters ] = useState<Shelters | null>(null);
    const { t } = useTranslation();
    let donation : Donation = props.donation;

    useEffect(() => {
        fetchShelters().then( (shelters : Shelters) => {
            console.log(shelters);
            setShelters(shelters);
        }).catch( (err : Error) => {
            console.log(err);
        })
    }, [])


    function changeShelter(event: React.ChangeEvent<{ value: unknown }>) {
        if (shelters && typeof event.target.value === 'number') {
            store.dispatch(setShelter(shelters.shelters[event.target.value -1]));
        }
    }

    function getMenuItems() {
        return shelters?.shelters.map((shelter : Shelter) => {
            return <MenuItem value={shelter.id}> {shelter.name} </MenuItem>
        })
    }

    function next() {
        if (!donation.general && !donation.shelter) {
            showMessage(t("selectShelterMessage"), 'warning');
        } else {
            store.dispatch(increment());
        }
    }

    return (
        <Grid container spacing={1}>
            <Grid item>
            <Typography component="div">
                <Box fontSize="h4.fontSize" fontWeight="fontWeightBold">
                    {t("donationFormTitle")}
                </Box>
            </Typography>
            </Grid>
            <Grid item>
                <PayloadToggle />
            </Grid>
            <Grid item xs={10}>
                <Typography component="div">
                        <Box fontWeight="fontWeightMedium" p={2}>
                            {t("shelterSelection")}
                        </Box>
                    </Typography>
                { shelters && 
                    <FormControl required variant="outlined" fullWidth >
                        <Select fullWidth value={ (donation.shelter) ? donation.shelter.id : ""}  onChange={(e) => changeShelter(e)}>
                            {getMenuItems() }
                        </Select>
                    </FormControl>
                }   
            </Grid>
            <Grid item>
                <Typography component="div">
                    <Box fontWeight="fontWeightMedium" p={2}>
                        {t("donationAmount")}
                    </Box>
                </Typography>
                <AmountPicker />
            </Grid>
            <Grid xs={12} style={{marginBlockStart: "1.5rem"}}>
                <Grid item xs={11}>
                    <Button float={'right'} title={t("next")} color={"white"} bgcolor={"#C4794F"} callback={next} />
                </Grid>
            </Grid>
        </Grid>
    );
}

function mapStateToProps (state : State) {
    return { 
        donation : state.donation
    }
}

export default connect(mapStateToProps)(DonationForm)
