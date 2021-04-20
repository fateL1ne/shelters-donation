import { Box, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import store from '../../redux/store';
import { setEmail, setFirstName, setLastName, setPhone } from '../../redux/slices/User';
import { State } from '../../react-app-env';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'


function PersonalForm(props : any) {

    const availableCountries : Array<string> = ['sk', 'cz']
    const changeName = (event : React.ChangeEvent<HTMLInputElement>) => store.dispatch(setFirstName(event.target.value));
    const changeSurname = (event : React.ChangeEvent<HTMLInputElement>) => store.dispatch(setLastName(event.target.value));
    const changeEmail = (event : React.ChangeEvent<HTMLInputElement>) => store.dispatch(setEmail(event.target.value));
    const changePhone = (phone : string) => store.dispatch(setPhone(phone));


    return (
        <Grid container direction="row" spacing={1}>
            <Typography component="div">
                <Box fontSize="h4.fontSize" fontWeight="fontWeightMedium" m={1}>
                    Potrebujeme od Vás zopár informácií
                </Box>
                <Box fontSize="h6.fontSize"  fontWeight="fontWeightMedium" m={1}>
                    O vás
                </Box>
            </Typography>
            <Grid item xs={11}>
                <TextField fullWidth id="outlined-basic" label="Meno" variant="outlined" onChange={changeName}/>
            </Grid>
            <Grid item xs={11}>
                <TextField fullWidth id="outlined-basic" label="Priezvisko" variant="outlined"  onChange={changeSurname}/>
            </Grid>
            <Grid item xs={11}>
                <TextField fullWidth id="outlined-basic" label="E-mailová adresa" variant="outlined" onChange={changeEmail}/>
            </Grid>
            <Grid item xs={11}>
                <PhoneInput
                    value={props.user.phone}
                    onChange={phone => changePhone(phone)}
                    country={'sk'}
                    onlyCountries={availableCountries}
                />
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