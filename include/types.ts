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

export interface Division {
    div: string,
    skipper: string,
    crew: string
}

export interface TeamRoster {
    regatta: Regatta,
    divisions: Division[],
    alternate: string,
    driver: string
}
