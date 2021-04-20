import React from 'react';
import store from './../../redux/store';
import { setAmount } from './../../redux/slices/Donation';
import { Grid, Input, InputAdornment, Typography, Box } from '@material-ui/core';
import { connect } from 'react-redux';
import { State } from '../../react-app-env';
import styled  from 'styled-components';


const AmountButton = styled.button<{ selected : boolean }>`
    border-radius: 1rem;
    color: #000000;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    padding: 1rem;
    border: ${props => (props.selected) ? 'none' : 'solid rgba(0, 0, 0, 0.12) 1px'}; 
    background: ${props => (props.selected) ? '#C4794F' : '#ffffff'};
    color: ${props => (props.selected) ? '#ffffff' : '#000000'};
`;


function AmountPicker(props : any) {

    const availableAmounts : Array<number> = [5, 10, 20, 30, 50, 100];
    const changeAmount = (amount : number) => store.dispatch(setAmount(amount));


    function getAmountsUI() {
        return availableAmounts.map( (amount : number) => {
            return (
                <Grid item>
                    <AmountButton selected={amount === props.amount} onClick={() => changeAmount(amount)}> 
                                {amount  + " €"}
                    </AmountButton> 
                </Grid>
            );
        })
    }

    return (
        <Grid container spacing={1}>
                { getAmountsUI() }

                <Grid item>
                    <Input
                        endAdornment={<InputAdornment position="end">€</InputAdornment>}
                        style={{width: '30%'}}
                    />
                </Grid>
        </Grid>
    );
}

function mapStateToProps (state : State) {
    return { 
        amount : state.donation.amount
    }
}

export default connect(mapStateToProps)(AmountPicker)