export interface SignUp {
    name: string,
    skipper: boolean,
    crew: boolean,
    bothDays: boolean,
    canDrive: boolean
};

export interface Regatta {
    id: string,
    name: string,
    date: string,
    twoDays: boolean,
    location: string,
    signUps: SignUp[]
}
