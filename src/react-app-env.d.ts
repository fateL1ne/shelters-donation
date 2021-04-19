export type Shelter = {
    id : Number,
    name : String
}

export type Shelters = {
    shelters : Shelter[]
}

export interface ContributionProps {
    firstName : String,
    lastName : String,
    email : String,
    value : String,
    phone : String | undefined,
    shelterID : Number | undefined
}

export type Message = {
    type: String,
    message: String
}

export type Messages = {
    messages : Message[]
}

