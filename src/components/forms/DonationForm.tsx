import { Grid, Typography, Box, MenuItem, FormControl } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { Shelters, Shelter, State } from '../../react-app-env'; 
import { fetchShelters } from '../../service/http/Shelter';
import Select from '@material-ui/core/Select';
import AmountPicker from './AmountPicker';
import PayloadToggle from './PaymentToggle';
import store from './../../redux/store';
import { setShelter } from '../../redux/slices/Donation';
import { connect } from 'react-redux';


function DonationForm(props : any) {

    const [ shelters, setShelters ] = useState<Shelters | null>(null);

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
            store.dispatch(setShelter(shelters?.shelters[event.target.value -1]));
        }
    }

    function getMenuItems() {
        return shelters?.shelters.map((shelter : Shelter) => {
            return <MenuItem value={shelter.id}> {shelter.name} </MenuItem>
        })
    }

    return (
        <Grid container spacing={2}>
            <Grid item>
            <Typography component="div">
                <Box fontSize="h4.fontSize" fontWeight="fontWeightBold" m={1}>
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
                <FormControl variant="outlined" fullWidth >
                    <Select fullWidth value={ (props.shelter) ?  props.shelter.id : 1}  onChange={(e) => changeShelter(e)}>
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
        </Grid>
    );
}

function mapStateToProps (state : State) {
    return { 
        shelter : state.donation.shelter
    }
}

export default connect(mapStateToProps)(DonationForm)
