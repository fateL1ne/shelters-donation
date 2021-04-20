import { Box, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import store from '../redux/store';
import { setEmail, setFirstName, setLastName, setPhone } from '../redux/slices/User';
import { State } from '../react-app-env';


function PersonalForm() {

    const changeName = (event : React.ChangeEvent<HTMLInputElement>) => store.dispatch(setFirstName(event.target.value));
    const changeSurname = (event : React.ChangeEvent<HTMLInputElement>) => store.dispatch(setLastName(event.target.value));
    const changeEmail = (event : React.ChangeEvent<HTMLInputElement>) => store.dispatch(setEmail(event.target.value));
    const changePhone = (event : React.ChangeEvent<HTMLInputElement>) => store.dispatch(setPhone(event.target.value));


    return (
        <Grid container direction="row" justify="center" spacing={1}>
            <Typography component="div">
                <Box fontSize="h3.fontSize" fontWeight="fontWeightMedium" m={1}>
                    Potrebujeme od Vás zopár informácií
                </Box>
            </Typography>
            <Grid item xs={8}>
                <TextField fullWidth id="outlined-basic" label="Meno" variant="outlined" onChange={changeName}/>
            </Grid>
            <Grid item xs={8}>
                <TextField fullWidth id="outlined-basic" label="Priezvisko" variant="outlined"  onChange={changeSurname}/>
            </Grid>
            <Grid item xs={8}>
                <TextField fullWidth id="outlined-basic" label="E-mailová adresa" variant="outlined" onChange={changeEmail}/>
            </Grid>
            <Grid item xs={8}>
                <TextField fullWidth id="outlined-basic" label="Telefonné číslo" variant="outlined" onChange={changePhone}/>
            </Grid>
        </Grid>
    );
}


function mapStateToProps (state : State) {
    return { 
        user : state.user
    }
}

export default connect(mapStateToProps)(PersonalForm)