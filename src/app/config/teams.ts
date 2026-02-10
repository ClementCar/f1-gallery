import { Driver } from "./drivers";

export const Teams: Team[] = [
  {
    id: 'mclaren',
    name: "McLaren",
    color: "#863400", // #863400
    tp: { name: "Andrea", lastname: "Stella", age: 54, birthdate: new Date("1971-02-22"), image: "", nationality: { name: "Italy", image: "" } },
  },
  {
    id: 'mercedes',
    name: "Mercedes",
    color: "#007560", // #007560
    tp: { name: "Toto", lastname: "Wolff", age: 53, birthdate: new Date("1972-01-12"), image: "", nationality: { name: "Austria", image: "AUT" } },
  },
  {
    id: 'redbull',
    name: "Red Bull Racing",
    color: "#003282", // #003282
    tp: { name: "Laurent", lastname: "Mekies", age: 48, birthdate: new Date("1977-11-30"), image: "", nationality: { name: "France", image: "FRA" } },
  },
  {
    id: 'ferrari',
    name: "Ferrari",
    color: "#710006", // #710006
    tp: { name: "Fred", lastname: "Vasseur", age: 58, birthdate: new Date("1967-04-19"), image: "", nationality: { name: "France", image: "FRA" } },
  },
  {
    id: 'williams',
    name: "Williams",
    color: "#000681", // #000681
    tp: { name: "James", lastname: "Vowles", age: 45, birthdate: new Date("1980-04-19"), image: "", nationality: { name: "United Kingdom", image: "GBR" } },
  },
  {
    id: 'racing',
    name: "Racing Bulls",
    color: "#2345AB", // #2345AB
    tp: { name: "Alan", lastname: "Permane", age: 58, birthdate: new Date("1967-02-05"), image: "", nationality: { name: "United Kingdom", image: "GBR" } },
  },
  {
    id: 'aston',
    name: "Aston Martin",
    color: "#00482C", // #00482C
    tp: { name: "Adrian", lastname: "Newey", age: 65, birthdate: new Date("1960-12-26"), image: "", nationality: { name: "United Kingdom", image: "GBR" } },
  },
  {
    id: 'haas',
    name: "Haas",
    color: "#4D5052",
    tp: { name: "Ayao", lastname: "Komatsu", age: 52, birthdate: new Date("1973-05-18"), image: "", nationality: { name: "Japan", image: "JPN" } },
  },
  {
    id: 'audi',
    name: "Audi",
    color: "#FFDD00",
    tp: { name: "Jonathan", lastname: "Wheatley", age: 55, birthdate: new Date("1969-10-16"), image: "", nationality: { name: "United Kingdom", image: "GBR" } },
  },
  {
    id: "alpine",
    name: "Alpine",
    color: "#005081", // #005081
    tp: { name: "Pierre", lastname: "Gasly", age: 28, birthdate: new Date("1996-02-07"), image: "", nationality: { name: "France", image: "FRA" } },
  },
  {
    id: "cadillac",
    name: "Cadillac",
    color: "#8B0000",
    tp: { name: "Graeme", lastname: "Lowdon", age: 56, birthdate: new Date("1969-03-06"), image: "", nationality: { name: "United Kingdom", image: "GBR" } },
  },
];



export interface Team {
    id: string,
    name: string,
    tp: TeamPrincipal,
    color: string,
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