import axios, { AxiosResponse } from 'axios';
import { Shelters, ContributionProps, Messages } from '../../global';
import * as Url from '../../constants/Url';


export async function fetchShelters() : Promise<Shelters> {
     let axiosResponse : AxiosResponse<Shelters> = await axios.get<Shelters>(Url.SHELTERS);

     return axiosResponse.data;
}

export async function contribute(params : ContributionProps) : Promise<boolean> {
    let axiosResponse : AxiosResponse<Messages> = await axios.post<Messages>(Url.CONTRIBUTE, {
        firstName : params.firstName,
        lastName : params.lastName,
        email : params.email,
        value : params.value,
        phone : params.phone,
        shelterID : params.shelterID
    })

    return ( axiosResponse.status === 200 );
}