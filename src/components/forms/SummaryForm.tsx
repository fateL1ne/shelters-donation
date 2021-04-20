import React, { useState } from 'react';
import { connect } from 'react-redux';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { State, Donation, SummaryProps, UserStructure } from '../../react-app-env';
import SummaryItem from './SummaryItem';


function SummaryForm(props : SummaryProps) {

    const [ GDPR, setGDPR ] = useState<boolean>(false);
    const user : UserStructure = props.user;
    const donation : Donation = props.donation;
    const handleCheckBox = (event: React.ChangeEvent<HTMLInputElement>) => setGDPR(event.target.checked);


    return (
        <>
        <Typography component="div">
            <Box fontSize="h3.fontSize" fontWeight="fontWeightMedium" m={1}>
                Skontrolujte si zadané údaje
            </Box>
            <SummaryItem title={"Akou formou chcem podporiť"} value={"Všeobecne"}/>
            <SummaryItem title={"Najviac mi záleží na útulku "} value={"Humenné"}/>
            <SummaryItem title={"Suma ktorou chcem prispieť"} value={donation.amount}/>
            <SummaryItem title={"Meno a priezvisko"} value={user.firstName + " " + user.lastName}/>
            <SummaryItem title={"E-mailová adresa"} value={user.email}/>
            <SummaryItem title={"Telefónne číslo"} value={user.phone}/>
        </Typography>

        <FormControlLabel
            control={<Checkbox checked={GDPR} onChange={handleCheckBox} name="checkedA" />}
            label="Súhlasím so spracovaním osobných údajov"
        />
        </>
    );
}


function mapStateToProps (state : State) {
    return { 
        donation : state.donation,
        user : state.user
    }
}

export default connect(mapStateToProps)(SummaryForm)
