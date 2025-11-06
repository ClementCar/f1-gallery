export const Teams: Team[] = [
    {
        name: "McLaren",
        logo: "",
        color: "#863400",
        tp: { name: "", lastname: "", age: 22, birthdate: new Date, image: "", nationality: {name: "", image: "" } },
        drivers: [
            { name: "", lastname: "", age: 22, image: "", birthdate: new Date, nationality: { name: "", image: "" } },
            { name: "", lastname: "", age: 22, image: "", birthdate: new Date, nationality: { name: "", image: "" } },
        ]
    },
    {
        name: "Ferrari",
        logo: "",
        color: "#710006",
        tp: { name: "", lastname: "", age: 22, birthdate: new Date, image: "", nationality: {name: "", image: "" } },
        drivers: [
            { name: "", lastname: "", age: 22, image: "", birthdate: new Date, nationality: { name: "", image: "" } },
            { name: "", lastname: "", age: 22, image: "", birthdate: new Date, nationality: { name: "", image: "" } },
        ]
    },
    {
        name: "Mercedes",
        logo: "",
        color: "#007560",
        tp: { name: "", lastname: "", age: 22, birthdate: new Date, image: "", nationality: {name: "", image: "" } },
        drivers: [
            { name: "", lastname: "", age: 22, image: "", birthdate: new Date, nationality: { name: "", image: "" } },
            { name: "", lastname: "", age: 22, image: "", birthdate: new Date, nationality: { name: "", image: "" } },
        ]
    },
    {
        name: "Red Bull Racing",
        logo: "",
        color: "#003282",
        tp: { name: "", lastname: "", age: 22, birthdate: new Date, image: "", nationality: {name: "", image: "" } },
        drivers: [
            { name: "", lastname: "", age: 22, image: "", birthdate: new Date, nationality: { name: "", image: "" } },
            { name: "", lastname: "", age: 22, image: "", birthdate: new Date, nationality: { name: "", image: "" } },
        ]
    },
    {
        name: "Williams",
        logo: "",
        color: "#000681",
        tp: { name: "", lastname: "", age: 22, birthdate: new Date, image: "", nationality: {name: "", image: "" } },
        drivers: [
            { name: "", lastname: "", age: 22, image: "", birthdate: new Date, nationality: { name: "", image: "" } },
            { name: "", lastname: "", age: 22, image: "", birthdate: new Date, nationality: { name: "", image: "" } },
        ]
    },
    {
        name: "Racing Bulls",
        logo: "",
        color: "#2345AB",
        tp: { name: "", lastname: "", age: 22, birthdate: new Date, image: "", nationality: {name: "", image: "" } },
        drivers: [
            { name: "", lastname: "", age: 22, image: "", birthdate: new Date, nationality: { name: "", image: "" } },
            { name: "", lastname: "", age: 22, image: "", birthdate: new Date, nationality: { name: "", image: "" } },
        ]
    },
    {
        name: "Aston Martin",
        logo: "",
        color: "#00482C",
        tp: { name: "", lastname: "", age: 22, birthdate: new Date, image: "", nationality: {name: "", image: "" } },
        drivers: [
            { name: "", lastname: "", age: 22, image: "", birthdate: new Date, nationality: { name: "", image: "" } },
            { name: "", lastname: "", age: 22, image: "", birthdate: new Date, nationality: { name: "", image: "" } },
        ]
    },
    {
        name: "Haas F1 Team",
        logo: "",
        color: "#4D5052",
        tp: { name: "", lastname: "", age: 22, birthdate: new Date, image: "", nationality: {name: "", image: "" } },
        drivers: [
            { name: "", lastname: "", age: 22, image: "", birthdate: new Date, nationality: { name: "", image: "" } },
            { name: "", lastname: "", age: 22, image: "", birthdate: new Date, nationality: { name: "", image: "" } },
        ]
    },
    {
        name: "Kick Sauber",
        logo: "",
        color: "#006300",
        tp: { name: "", lastname: "", age: 22, birthdate: new Date, image: "", nationality: {name: "", image: "" } },
        drivers: [
            { name: "", lastname: "", age: 22, image: "", birthdate: new Date, nationality: { name: "", image: "" } },
            { name: "", lastname: "", age: 22, image: "", birthdate: new Date, nationality: { name: "", image: "" } },
        ]
    },
    {
        name: "Alpine",
        logo: "",
        color: "#005081",
        tp: { name: "", lastname: "", age: 22, birthdate: new Date, image: "", nationality: {name: "", image: "" } },
        drivers: [
            { name: "", lastname: "", age: 22, image: "", birthdate: new Date, nationality: { name: "", image: "" } },
            { name: "", lastname: "", age: 22, image: "", birthdate: new Date, nationality: { name: "", image: "" } },
        ]
    }
]

export interface Team {
    name: string,
    logo: string,
    tp: TeamPrincipal,
    color: string,
    drivers: Driver[]
}

export interface TeamPrincipal{
    name: string,
    lastname: string,
    age: number,
    birthdate: Date,
    image: string,
    nationality: Nationality
}

export interface Driver{
    name: string,
    lastname: string,
    age: number,
    birthdate: Date,
    image: string,
    nationality: Nationality
}

export interface Nationality{
    name: string,
    image: string
}