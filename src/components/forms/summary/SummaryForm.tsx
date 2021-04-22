import React, { useState } from 'react';
import { connect } from 'react-redux';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { State, Donation, SummaryProps, UserStructure, ContributionProps } from '../../../global';
import SummaryItem from './SummaryItem';
import { Grid } from '@material-ui/core';
import { decrement } from '../../../redux/slices/Steps';
import Button from '../../Button';
import store from '../../../redux/store';
import { contribute } from '../../../service/http/Shelter';
import { showMessage } from '../../../service/ui/Toastify';
import { useTranslation } from 'react-i18next';




function SummaryForm(props : SummaryProps) {

    const [ GDPR, setGDPR ] = useState<boolean>(false);
    const user : UserStructure = props.user;
    const donation : Donation = props.donation;
    const handleCheckBox = (event: React.ChangeEvent<HTMLInputElement>) => setGDPR(event.target.checked);
    const { t } = useTranslation();

    let donationText : string = (donation.general) ?  
        t("generalDonation") : t("shelterDonation");
    
    function handleSubmit() {
        if (!GDPR) {
            showMessage(t("gdprWarningMessage"), "warning");
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
                showMessage(t("contributeMessage"), "info");
            }
        })
    
    }

    return (
        <Grid container direction="row" spacing={1}>
            <Grid item>
                <Typography component="div">
                    <Box fontSize="h3.fontSize" fontWeight="fontWeightMedium" m={1}>
                        {t("summaryTitle")}
                    </Box>
                    <SummaryItem title={"Akou formou chcem podporiť"} value={donationText}/>
                    { donation.shelter && <SummaryItem title={t("shelterSelection")} value={donation.shelter.name}/>}
                    <SummaryItem title={t("donationAmount")} value={donation.amount + " €"}/>
                    <SummaryItem title={t("nameSummary")} value={user.firstName + " " + user.lastName}/>
                    <SummaryItem title={t("emailTitle")} value={user.email}/>
                    <SummaryItem title={t("phone")} value={"+ " + user.phone.replace(/(.{3})/g,"$1 ")}/>
                </Typography>
            </Grid>

            <Grid xs={12}>
                <FormControlLabel
                    control={<Checkbox color="primary" size="medium" checked={GDPR} onChange={handleCheckBox} name="checkedA" />}
                    label={t("gdprApproval")}
                />
            </Grid>
            <Grid item xs={6} style={{marginBlockStart: "1.5rem"}}>
                <Button float={'left'} title={t("previous")} callback={() => store.dispatch(decrement())} />
            </Grid>
            <Grid item xs={6} style={{marginBlockStart: "1.5rem"}}>
                <Button float={'right'} title={t("sendForm")} callback={handleSubmit} />
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
