import { Driver } from "./drivers";

export const Teams: Team[] = [
  {
    id: 'mclaren',
    name: "McLaren",
    color: "#ca6e22", // #863400
    palette: [ '#F5862B', '#010101', '#196685'],
    tp: { name: "Andrea", lastname: "Stella", age: 54, birthdate: new Date("1971-02-22"), image: "", nationality: { name: "Italy", image: "" } },
  },
  {
    id: 'mercedes',
    name: "Mercedes",
    color: "#2baca1", // #007560
    palette: ['#31C0B5', '#767676', '#2A2A2A'],
    tp: { name: "Toto", lastname: "Wolff", age: 53, birthdate: new Date("1972-01-12"), image: "", nationality: { name: "Austria", image: "AUT" } },
  },
  {
    id: 'redbull',
    name: "Red Bull Racing",
    color: "#041c72", // #003282
    palette: ['#05207E', '#E9D257', '#D91925'],
    tp: { name: "Laurent", lastname: "Mekies", age: 48, birthdate: new Date("1977-11-30"), image: "", nationality: { name: "France", image: "FRA" } },
  },
  {
    id: 'ferrari',
    name: "Ferrari",
    color: "#9e0b0b", // #710006
    palette: ['#A60C0D', '#DFDDDD', '#0D45C9'],
    tp: { name: "Fred", lastname: "Vasseur", age: 58, birthdate: new Date("1967-04-19"), image: "", nationality: { name: "France", image: "FRA" } },
  },
  {
    id: 'williams',
    name: "Williams",
    color: "#0D37F6", // #000681
    palette: ['#0D37F6', '#28A6D3', '#DADADA'],
    tp: { name: "James", lastname: "Vowles", age: 45, birthdate: new Date("1980-04-19"), image: "", nationality: { name: "United Kingdom", image: "GBR" } },
  },
  {
    id: 'racing',
    name: "Racing Bulls",
    color: "#062F8F", // #2345AB
    palette: ['#062F8F', '#DDDDDD', '#EFD958'],
    tp: { name: "Alan", lastname: "Permane", age: 58, birthdate: new Date("1967-02-05"), image: "", nationality: { name: "United Kingdom", image: "GBR" } },
  },
  {
    id: 'aston',
    name: "Aston Martin",
    color: "#0A5A43", // #00482C
    palette: ['#0A5A43', '#D0CC47', '#080806'],
    tp: { name: "Adrian", lastname: "Newey", age: 65, birthdate: new Date("1960-12-26"), image: "", nationality: { name: "United Kingdom", image: "GBR" } },
  },
  {
    id: 'haas',
    name: "Haas",
    color: "#9c9c9c",
    palette: ['#B8B8B8', '#E21213', '#2B2B2B'],
    tp: { name: "Ayao", lastname: "Komatsu", age: 52, birthdate: new Date("1973-05-18"), image: "", nationality: { name: "Japan", image: "JPN" } },
  },
  {
    id: 'audi',
    name: "Audi",
    color: "#d12038",
    palette: ['#F22425', '#F3F1F1', '#000000'],
    tp: { name: "Jonathan", lastname: "Wheatley", age: 55, birthdate: new Date("1969-10-16"), image: "", nationality: { name: "United Kingdom", image: "GBR" } },
  },
  {
    id: "alpine",
    name: "Alpine",
    color: "#146CB1", // #005081
    palette: ['#146CB1', '#EB6EAE', '#E2E4E4'],
    tp: { name: "Pierre", lastname: "Gasly", age: 28, birthdate: new Date("1996-02-07"), image: "", nationality: { name: "France", image: "FRA" } },
  },
  {
    id: "cadillac",
    name: "Cadillac",
    color: "#626262",
    palette: ['#626262', '#D8D8D8', '#090909'],
    tp: { name: "Graeme", lastname: "Lowdon", age: 56, birthdate: new Date("1969-03-06"), image: "", nationality: { name: "United Kingdom", image: "GBR" } },
  },
];



export interface Team {
    id: string,
    name: string,
    tp: TeamPrincipal,
    color: string,
    palette: string[],
    // drivers: Driver[]
}

export interface TeamAndDriver {
  team: Team,
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

export interface Nationality{
    name: string,
    image: string
}