import React, { useState } from 'react';
import { connect } from 'react-redux';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { State, Donation, SummaryProps, UserStructure, ContributionProps } from '../../../react-app-env';
import SummaryItem from './SummaryItem';
import { Grid } from '@material-ui/core';
import { decrement } from '../../../redux/slices/Steps';
import Button from '../../Button';
import store from '../../../redux/store';
import { contribute } from '../../../service/http/Shelter';
import { showMessage } from '../../../service/ui/Toastify';



function SummaryForm(props : SummaryProps) {

    const [ GDPR, setGDPR ] = useState<boolean>(false);
    const user : UserStructure = props.user;
    const donation : Donation = props.donation;
    const handleCheckBox = (event: React.ChangeEvent<HTMLInputElement>) => setGDPR(event.target.checked);

    let donationText : string = (donation.general) ?  
        "Chcem finančne prispieť celej nadácií" : "Chcem finančne prispieť konkrétnemu útulku";
    
    function handleSubmit() {
        if (!GDPR) {
            showMessage("Pred odoslaním musíte súhlasiť so spracovaním osobných údajov", "warning");
            return;
        }

        let params : ContributionProps = {
            firstName : user.firstName,
            lastName : user.lastName,
            email : user.email,
            value : donation.amount.toString(),
            phone : user.phone,
            shelterID: donation.shelter?.id
        }

        contribute(params).then( (success : boolean) => {
            if (success) {
                showMessage("Ďakujeme za Váš príspevok!", "info");
            }
        })
    
    }

    return (
        <Grid container direction="row" spacing={1}>
            <Grid item>
                <Typography component="div">
                    <Box fontSize="h3.fontSize" fontWeight="fontWeightMedium" m={1}>
                        Skontrolujte si zadané údaje
                    </Box>
                    <SummaryItem title={"Akou formou chcem podporiť"} value={donationText}/>
                    { donation.shelter && <SummaryItem title={"Najviac mi záleží na útulku "} value={donation.shelter.name}/>}
                    <SummaryItem title={"Suma ktorou chcem prispieť"} value={donation.amount + " €"}/>
                    <SummaryItem title={"Meno a priezvisko"} value={user.firstName + " " + user.lastName}/>
                    <SummaryItem title={"E-mailová adresa"} value={user.email}/>
                    <SummaryItem title={"Telefónne číslo"} value={"+ " + user.phone.replace(/(.{3})/g,"$1 ")}/>
                </Typography>
            </Grid>

            <Grid xs={12}>
                <FormControlLabel
                    control={<Checkbox color="primary" size="medium" checked={GDPR} onChange={handleCheckBox} name="checkedA" />}
                    label="Súhlasím so spracovaním osobných údajov"
                />
            </Grid>
            <Grid item xs={6} style={{marginBlockStart: "1.5rem"}}>
                <Button float={'left'} title={"Späť"} callback={() => store.dispatch(decrement())} />
            </Grid>
            <Grid item xs={6} style={{marginBlockStart: "1.5rem"}}>
                <Button float={'right'} title={"Odoslať formulár"} callback={handleSubmit} />
            </Grid>
        </Grid>
    );
}


function mapStateToProps (state : State) {
    return { 
        donation : state.donation,
        user : state.user
    }
}

export default connect(mapStateToProps)(SummaryForm)
