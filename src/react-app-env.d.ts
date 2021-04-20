export type Shelter = {
    id : number,
    name : string
}

export type Shelters = {
    shelters : Shelter[]
}

export interface ContributionProps {
    firstName : string,
    lastName : string,
    email : string,
    value : string,
    phone : string | void,
    shelterID : number | void
}

export type Message = {
    type: string,
    message: string
}

export type Messages = {
    messages : Message[]
}

export interface Donation {
    general: boolean,
    shelter?: Shelter | undefined,
    amount: number
}

export interface UserStructure {
    firstName : string,
    lastName : string,
    email : string,
    phone : string 
}

export interface StepsState {
    actualStep: number
}

export interface ButtonProps {
    title : string,
    callback: () => void;
}

export interface SummaryProps {
    user : UserStructure,
    donation : Donation
}

export interface State {
    user : UserStructure,
    donation : Donation,
    steps: StepsState
}

