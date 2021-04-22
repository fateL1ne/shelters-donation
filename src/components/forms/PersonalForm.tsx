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
import { useTranslation } from 'react-i18next';


require('./../phone-input.css');


function PersonalForm(props : any) {

    let userState : UserStructure = props.user;
    const availableCountries : Array<string> = ['sk', 'cz']
    const { t } = useTranslation();

    const changeName = (event : React.ChangeEvent<HTMLInputElement>) => store.dispatch(setFirstName(event.target.value));
    const changeSurname = (event : React.ChangeEvent<HTMLInputElement>) => store.dispatch(setLastName(event.target.value));
    const changeEmail = (event : React.ChangeEvent<HTMLInputElement>) => store.dispatch(setEmail(event.target.value));
    const changePhone = (phone : string) => store.dispatch(setPhone(phone));

    function next() {
        if (isEmailValid() && isUsernameValid() && userState.lastName !== "") {
            store.dispatch(increment());
        } else {
            showMessage(t("fillMandatoryFieldsMessage"), "warning");
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
                    {t("personalFormTitle")}
                </Box>
                <Box fontSize="h6.fontSize"  fontWeight="fontWeightMedium" m={1}>
                    {t("about")}
                </Box>
            </Typography>
            <Grid item xs={11}>
                <TextField  
                    fullWidth 
                    value={userState.firstName}
                    label={t("name")}
                    error={!isUsernameValid()}
                    placeholder={t("enterUsername")}
                    variant="outlined"
                    onChange={changeName}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    helperText={ (isUsernameValid()) ? "" : t("firstNameHelperText")}
                />
            </Grid>
            <Grid item xs={11}>
                <TextField 
                    required 
                    fullWidth 
                    value={userState.lastName}
                    label={t("lastName")}
                    error={!isLastNameValid()}
                    placeholder={t("enterLastname")}
                    variant="outlined"  
                    onChange={changeSurname}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    helperText={ (isLastNameValid()) ? "" : t("lastNameHelperText")}
                />
            </Grid>
            <Grid item xs={11}>
                <TextField 
                    fullWidth 
                    label={t("emailTitle")} 
                    variant="outlined" 
                    placeholder={t("enterEmail")} 
                    error={!isEmailValid()}
                    value={userState.email}
                    onChange={changeEmail}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    helperText={ (isEmailValid()) ? "" : t("emailHelperText")}
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
                <Button float={'left'} color={"black"} bgcolor={"#F3E2D9"} title={t("previous")} callback={() => store.dispatch(decrement())} />
            </Grid>
            <Grid item xs={6} style={{marginBlockStart: "1.5rem"}}>
                <Button float={'right'} color={"white"} bgcolor={"#9F9F9F"} title={t("next")} callback={next} />
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