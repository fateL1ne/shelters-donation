import { Grid, Typography, Box, MenuItem, FormControl, InputLabel } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { Shelters, Shelter, State, Donation } from '../../../react-app-env'; 
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



function DonationForm(props : any) {

    const [ shelters, setShelters ] = useState<Shelters | null>(null);
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
            showMessage("Pre pokračovanie vyberte jednotlivý útulok", 'warning');
        } else {
            store.dispatch(increment());
        }
    }

    return (
        <Grid container spacing={1}>
            <Grid item>
            <Typography component="div">
                <Box fontSize="h4.fontSize" fontWeight="fontWeightBold">
                    Vyberte si možnosť, ako chcete pomôcť
                </Box>
            </Typography>
            </Grid>
            <Grid item>
                <PayloadToggle />
            </Grid>
            <Grid item xs={10}>
                <Typography component="div">
                        <Box fontWeight="fontWeightMedium" p={2}>
                            Najviac mi záleží na útulku
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
                        Suma ktorou chcem prispieť
                    </Box>
                </Typography>
                <AmountPicker />
            </Grid>
            <Grid xs={12} style={{marginBlockStart: "1.5rem"}}>
                <Grid item xs={11}>
                    <Button float={'right'} title={"Pokračovať"} callback={next} />
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
