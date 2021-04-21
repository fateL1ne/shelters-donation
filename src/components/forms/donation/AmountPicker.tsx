import React, {useState} from 'react';
import store from '../../../redux/store';
import { setAmount } from '../../../redux/slices/Donation';
import { Grid, Input, InputAdornment} from '@material-ui/core';
import { connect } from 'react-redux';
import { State } from '../../../global';
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

const CustomAmountButton = styled.button<{ selected : boolean }>`
    border-radius: 1rem;
    color: #000000;
    font-weight: bold;
    padding: 0.6rem;
    font-family: 'Roboto', sans-serif;
    border: ${props => (props.selected) ? 'none' : 'solid rgba(0, 0, 0, 0.12) 1px'}; 
    background: ${props => (props.selected) ? '#C4794F' : '#ffffff'};
    color: ${props => (props.selected) ? '#ffffff' : '#000000'};
`;

function AmountPicker(props : any) {

    const [ customAmount, setCustomAmount ] = useState<string | undefined>("");
    const availableAmounts : Array<number> = [5, 10, 20, 30, 50, 100];

    const inputUnit = (
        <InputAdornment  position="end">
            <p style={{color: (customAmount !== "") ? "white" : "black", fontWeight: "bold"}}> € </p> 
        </InputAdornment>
    );


    function changeAmount(amount : number){
        if (availableAmounts.includes(amount) && customAmount !== "") {
            setCustomAmount("");
        }
        if (!availableAmounts.includes(amount)) {
            setCustomAmount(amount.toString());
        }
        
        store.dispatch(setAmount(amount));
    } 


    function getAmountsUI() {
        return availableAmounts.map( (amount : number) => {
            return (
                <Grid item>
                    <AmountButton value={customAmount} selected={amount === props.amount} onClick={() => changeAmount(amount)}> 
                        {amount  + " €"}
                    </AmountButton> 
                </Grid>
            );
        })
    }

    return (
        <Grid container spacing={1}>
                { getAmountsUI() }

                <Grid item xs={2}>
                    <CustomAmountButton selected={customAmount !== ""}>
                        <Input 
                            value={customAmount}
                            style={{paddingBottom: "0", width: "70%", fontWeight: "bold", color: "white", borderBottomColor: "red"}}
                            endAdornment={inputUnit} 
                            onChange={(event : React.ChangeEvent<HTMLInputElement>) => {
                                changeAmount(parseInt(event.target.value))
                            }}
                        />
                    </CustomAmountButton>
                </Grid>
        </Grid>
    );
}

function mapStateToProps (state : State) {
    console.log(state.donation.amount)
    return { 
        amount : state.donation.amount
    }
}

export default connect(mapStateToProps)(AmountPicker)