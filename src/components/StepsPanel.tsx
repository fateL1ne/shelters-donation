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

const Button = styled.button<{ float : string}>`
    background: #C4794F;
    border-radius: 2rem;
    border: 1px solid rgba(0, 0, 0, 0.12);
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    color: #ffffff;
    font-size: 16px;
    padding: 1rem;
    text-decoration: none;
    float: ${props => props.float};
`;


function StepsPanel(props : StepsProps) {

    const STEPS_SIZE : number = 2;

    const steps = [<DonationForm/>, <PersonalForm/>, <SummaryForm/>];



    return (
        <>
        <Header />
        <Container maxWidth="md">
            <Grid container direction="row" justify="center" alignItems="center" style={{marginBlockEnd: "2%"}}>
                <Grid item xs={9}>
                    <Grid container direction="row" justify="center" alignItems="center" spacing={3}>
                        <Grid item>
                            { steps[props.actualStep] }
                        </Grid>
                        <Grid item xs={9}>  

                            { props.actualStep > 0 &&
                                <Button float="left" onClick={() => store.dispatch(decrement())}> Späť </Button>
                            } 
                            {
                                props.actualStep === STEPS_SIZE ? 
                                <Button float="right" onClick={() => console.log('odosielam form')}> Odoslať formulár </Button> :
                                <Button float="right" onClick={() => store.dispatch(increment())}> Pokračovať </Button>
    
                            }
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