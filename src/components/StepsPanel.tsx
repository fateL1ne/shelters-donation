import React from 'react';
import { connect } from 'react-redux';
import DonationForm from './forms/donation/DonationForm';
import SummaryForm from './forms/summary/SummaryForm';
import PersonalForm from './forms/PersonalForm';
import Header from './Header'
import Footer from './Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DogImage from '../assets/images/dog_main.png';
import { Container, Grid } from '@material-ui/core';
import styled from 'styled-components';

require('./toast-colors.css')


interface StepsProps {
    actualStep : number
}

const StepsNavStatus = styled.button<{ active : boolean}>`
    background: ${(props) => props.active ? "#C4794F" : "rgba(0, 0, 0, 0.12)"};
    height: 6px;
    border-radius: 15px;
    margin: 0.3%;
    margin-bottom: 1rem;
    border-color: ${(props) => props.active ? "#C4794F" : "rgba(0, 0, 0, 0.12)"};
    width: ${(props) => props.active ? "3rem" : "1rem"};
`;



function StepsPanel(props : StepsProps) {

    const steps = [
        <DonationForm/>, 
        <PersonalForm/>, 
        <SummaryForm/>
    ];

    function getStepsStatusUI() {
        return steps.map( (step : JSX.Element, idx : number ) => {
            return <StepsNavStatus active={idx === props.actualStep}/>
        })
    }

    return (
        <>
        <Header />
        <ToastContainer />
        <Container maxWidth="md">
            <Grid container style={{marginBlockStart: "2rem", marginBlockEnd: "2rem"}}>
                <Grid item xs={9}>
                    { getStepsStatusUI() }
                    { steps[props.actualStep] }
                </Grid>
                <Grid item xs={3}>
                    <img src={DogImage} height="500px" />
                </Grid>
            </Grid>
            <Footer/>
        </Container>
        </>
    );
}


function mapStateToProps (state : any) {
    return { 
        actualStep : state.steps.actualStep
    }
}

export default connect(mapStateToProps)(StepsPanel)