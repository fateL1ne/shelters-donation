import React, { useState } from 'react';
import { Shelter } from './../react-app-env'; 


export default function DonationForm() {
    const [ donationSum, setDonationSum ] = useState<Number>(0);
    const [ generalDonation, setGeneralDonation ] = useState<Boolean>(true);
    const [ chooseShelter, setChoosenShelter ] = useState<Shelter | null>(null);


    return (
        <>
        </>
    );

}