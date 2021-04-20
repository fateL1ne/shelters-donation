import React from 'react';
import { connect } from 'react-redux';
import DonationForm from './forms/DonationForm';
import SummaryForm from './forms/SummaryForm';
import PersonalForm from './forms/PersonalForm';
import styled from 'styled-components';
import store from '../redux/store';
import { increment, decrement } from '../redux/slices/Steps';
import Header from './Header'
import Footer from './Footer';

import DogImage from '../assets/images/dog_main.png';

import { Container, Grid } from '@material-ui/core';


interface StepsProps {
    actualStep : number
}

const Button = styled.button`
    background: #CD8A64;
    background-image: -webkit-linear-gradient(top, #CD8A64, #C4794F);
    background-image: -moz-linear-gradient(top, #CD8A64, #C4794F);
    background-image: -ms-linear-gradient(top, #CD8A64, #C4794F);
    background-image: -o-linear-gradient(top, #CD8A64, #C4794F);
    background-image: linear-gradient(to bottom, #CD8A64, #C4794F);
    -webkit-border-radius: 28;
    -moz-border-radius: 28;
    border-radius: 28px;
    font-family: Arial;
    color: #ffffff;
    font-size: 20px;
    padding: 10px 20px 10px 20px;
    border: solid #C4794F 2px;
    text-decoration: none;
`;

const StepNav = styled.div<{ active : boolean }>`
    width: ${props => (props.active) ? '40px' : '20px'};
    height: 5px;
    border-radius: 25px;
    background: #CD8A64;
`;



function StepsPanel(props : StepsProps) {

    const STEPS_SIZE : number = 2;

    const steps = [<DonationForm/>, <PersonalForm/>, <SummaryForm/>];



    function getNavigationButtons() {
        if (props.actualStep === 0) {
            return <Button onClick={() => store.dispatch(increment())}> Pokračovať </Button>
        } else if (props.actualStep === STEPS_SIZE) {
            return (
                <>
                    <Button onClick={() => store.dispatch(decrement())}> Späť </Button>
                    <Button onClick={() => console.log('odosielam form')}> Odoslať formulár </Button>
                </>
            );
        } else {
            return (
                <>
                    <Button onClick={() => store.dispatch(decrement())}> Späť </Button>
                    <Button onClick={() => store.dispatch(increment())}> Pokračovať </Button>
                </>
            );
        }
    }
    
    return (
        <>
        <Header />
        <Container maxWidth="lg">
            <Grid container direction="row" justify="center" alignItems="center">
                <Grid item xs={9}>
                    <Grid container direction="column" justify="center" alignItems="center" spacing={3}>
                        <Grid item>

                        </Grid>
                        <Grid item>
                            { steps[props.actualStep] }
                        </Grid>
                        <Grid item>      
                            { getNavigationButtons() } 
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={3}>
                    <img src={DogImage} height="500px"/>
                </Grid>
            </Grid>
            <Footer/>
        </Container>
        </>
    );
}


function mapStateToProps (state : any) {
    console.log(state)
    return { 
        actualStep : state.steps.actualStep
    }
}


export default connect(mapStateToProps)(StepsPanel)