import React from 'react';
import { connect } from 'react-redux';
import { setGeneral } from './../../redux/slices/Donation';
import styled  from 'styled-components';
import { Grid, SvgIcon, Box, Typography } from '@material-ui/core';
import { State } from '../../react-app-env';
import store from './../../redux/store';
import PetsIcon from '@material-ui/icons/Pets';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';


const Corner = styled.button<{ selected : boolean, side : string }>`
    width: 100%;
    height: 10rem;
    border-radius: ${props => (props.side === 'right') ? '0% 10% 10% 0%' : '10% 0% 0% 10%;'}; 
    color: ${props => (props.selected) ? '#ffffff' : '#000000'};
    background: ${props => (props.selected) ? '#C4794F' : '#ffffff'};
    border: 2px solid #C4794F;
`;

interface PaymentsProps {
    generalPayment : boolean
}

function PayloadToggle(props : PaymentsProps) {

    const changePayment = (generalPayment : boolean) => store.dispatch(setGeneral(generalPayment));

    return (
        <Grid container>
            <Grid item xs={5}>
                <Corner selected={!props.generalPayment} onClick={() => changePayment(false)} side={'left'}>
                    <Grid container justify="center">
                        <Grid item >
                            <PetsIcon style={{ fontSize: 60}}/>
                        </Grid>
                        <Grid item>
                           <Typography component="div">
                                <Box fontWeight="fontWeightRegular" m={1}>
                                    Chcem finančne prispieť konkretnému útulku
                                </Box> 
                            </Typography> 
                        </Grid>
                    </Grid>
                </Corner> 
            </Grid>
            <Grid item xs={5}>
                <Corner selected={props.generalPayment} onClick={() => changePayment(true)} side={'right'}>
                    <Grid container justify="center"> 
                        <Grid item >
                            <AccountBalanceWalletIcon style={{ fontSize: 60}}/>
                        </Grid>
                        <Grid item>
                            <Typography component="div">
                                <Box fontWeight="fontWeightRegular" m={1}>
                                    Chcem finančne prispieť celej nadácii
                                </Box> 
                            </Typography>
                        </Grid>                    
                    </Grid>
                </Corner> 
            </Grid>
        </Grid>
    );
}

function mapStateToProps (state : State) {
    return { 
        generalPayment : state.donation.general
    }
}

export default connect(mapStateToProps)(PayloadToggle)