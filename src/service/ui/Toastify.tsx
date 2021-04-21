import { Grid } from '@material-ui/core';
import React from 'react';
import { toast } from 'react-toastify';
import WarningIcon from '@material-ui/icons/Warning';
import InfoIcon from '@material-ui/icons/Info';
import { MessageStatus } from '../../global';



export function showMessage(message : string, status: MessageStatus) {
    let finalMessage : JSX.Element = (
        <Grid container justify="center" alignContent="center">
            <Grid item xs={2}>
                { status === 'warning' && <WarningIcon/> }
                { status === 'info' && <InfoIcon/> }
            </Grid>
            <Grid item xs={10}>
                {message}
            </Grid>
        </Grid>
    )

    toast.warning(finalMessage, {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    })
}