import { Box, Grid, Typography } from '@material-ui/core';
import React from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import store from '../../redux/store';
import { setEmail, setFirstName, setLastName, setPhone } from '../../redux/slices/User';
import { State, UserStructure } from '../../global';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/material.css'
import validator from 'validator';
import { increment, decrement } from '../../redux/slices/Steps';
import Button from '../Button';
import { showMessage } from '../../service/ui/Toastify';

require('./../phone-input.css');


function PersonalForm(props : any) {

    let userState : UserStructure = props.user;
    const availableCountries : Array<string> = ['sk', 'cz']

    const changeName = (event : React.ChangeEvent<HTMLInputElement>) => store.dispatch(setFirstName(event.target.value));
    const changeSurname = (event : React.ChangeEvent<HTMLInputElement>) => store.dispatch(setLastName(event.target.value));
    const changeEmail = (event : React.ChangeEvent<HTMLInputElement>) => store.dispatch(setEmail(event.target.value));
    const changePhone = (phone : string) => store.dispatch(setPhone(phone));

    function next() {
        if (isEmailValid() && isUsernameValid() && userState.lastName !== "") {
            store.dispatch(increment());
        } else {
            showMessage("Pre pokračovanie vyplňte všetky povinné údaje", "warning");
        }
    }

    function isEmailValid() : boolean {
        return (userState.email.length === 0 || validator.isEmail(userState.email));
    }

    function isUsernameValid() : boolean {
        let firstNameLength : number = userState.firstName.length;
        return (firstNameLength === 0 || (firstNameLength > 2 && firstNameLength < 20));
    }

    function isLastNameValid() : boolean {
        let lastNameLength : number = userState.lastName.length;
        return (lastNameLength === 0 || (lastNameLength > 2 && lastNameLength < 30));
    }

    return (
        <Grid container direction="row" spacing={2}>
            <Typography component="div">
                <Box fontSize="h4.fontSize" fontWeight="fontWeightMedium" m={1}>
                    Potrebujeme od Vás zopár informácií
                </Box>
                <Box fontSize="h6.fontSize"  fontWeight="fontWeightMedium" m={1}>
                    O vás
                </Box>
            </Typography>
            <Grid item xs={11}>
                <TextField  
                    fullWidth 
                    value={userState.firstName}
                    label="Meno" 
                    error={!isUsernameValid()}
                    placeholder="Zadajte Vaše meno"
                    variant="outlined"
                    onChange={changeName}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    helperText={ (isUsernameValid()) ? "" : "Meno musí obsahovať 2 až 20 znakov"}
                />
            </Grid>
            <Grid item xs={11}>
                <TextField 
                    required 
                    fullWidth 
                    value={userState.lastName}
                    label="Priezvisko" 
                    error={!isLastNameValid()}
                    placeholder="Zadajte Vaše priezvisko"
                    variant="outlined"  
                    onChange={changeSurname}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    helperText={ (isLastNameValid()) ? "" : "Priezvisko musí obsahovať 2 až 30 znakov"}
                />
            </Grid>
            <Grid item xs={11}>
                <TextField 
                    fullWidth 
                    label="E-mailová adresa" 
                    variant="outlined" 
                    placeholder="Zadajte Váš e-mail"
                    error={!isEmailValid()}
                    value={userState.email}
                    onChange={changeEmail}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    helperText={ (isEmailValid()) ? "" : "Zadajte platný formát pre e-mail"}
                />
            </Grid>
            <Grid item xs={11}>
                <PhoneInput
                    value={userState.phone}
                    onChange={phone => changePhone(phone)}
                    country={'sk'}
                    onlyCountries={availableCountries}
                />
            </Grid>
            <Grid item xs={6} style={{marginBlockStart: "1.5rem"}}>
                <Button float={'left'} title={"Späť"} callback={() => store.dispatch(decrement())} />
            </Grid>
            <Grid item xs={6} style={{marginBlockStart: "1.5rem"}}>
                <Button float={'right'} title={"Pokračovať"} callback={next} />
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