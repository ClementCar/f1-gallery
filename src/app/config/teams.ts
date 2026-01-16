export const Teams: Team[] = [
  {
    name: "McLaren",
    color: "#863400", // #863400
    tp: { name: "Andrea", lastname: "Stella", age: 54, birthdate: new Date("1971-02-22"), image: "", nationality: { name: "Italy", image: "" } },
    drivers: [
      { name: "Lando", lastname: "Norris", age: 25, number: 4, rank: 1, image: "", birthdate: new Date("1999-11-13"), nationality: { name: "United Kingdom", image: "GBR" } },
      { name: "Oscar", lastname: "Piastri", age: 24, number: 81, rank: 2, image: "", birthdate: new Date("2001-04-06"), nationality: { name: "Australia", image: "AUS" } },
    ]
  },
  {
    name: "Mercedes",
    color: "#007560", // #007560
    tp: { name: "Toto", lastname: "Wolff", age: 53, birthdate: new Date("1972-01-12"), image: "", nationality: { name: "Austria", image: "AUT" } },
    drivers: [
      { name: "George", lastname: "Russell", age: 26, number: 63, rank: 3, image: "", birthdate: new Date("1998-02-15"), nationality: { name: "United Kingdom", image: "GBR" } },
      { name: "Kimi", lastname: "Antonelli", age: 19, number: 12, rank: 0, image: "", birthdate: new Date("2006-11-13"), nationality: { name: "Italy", image: "ITA" } },
    ]
  },
  {
    name: "Red Bull Racing",
    color: "#003282", // #003282
    tp: { name: "Laurent", lastname: "Mekies", age: 48, birthdate: new Date("1977-11-30"), image: "", nationality: { name: "France", image: "FRA" } },
    drivers: [
      { name: "Max", lastname: "Verstappen", age: 27, number: 3, rank: 4, image: "", birthdate: new Date("1997-09-30"), nationality: { name: "Netherlands", image: "NLD" } },
      { name: "Isack", lastname: "Hadjar", age: 21, number: 6, rank: 0, image: "", birthdate: new Date("2004-08-09"), nationality: { name: "France", image: "FRA" } },
    ]
  },
  {
    name: "Ferrari",
    color: "#710006", // #710006
    tp: { name: "Fred", lastname: "Vasseur", age: 58, birthdate: new Date("1967-04-19"), image: "", nationality: { name: "France", image: "FRA" } },
    drivers: [
      { name: "Lewis", lastname: "Hamilton", age: 40, number: 44, rank: 5, image: "", birthdate: new Date("1985-01-07"), nationality: { name: "United Kingdom", image: "GBR" } },
      { name: "Charles", lastname: "Leclerc", age: 26, number: 16, rank: 6, image: "", birthdate: new Date("1997-10-16"), nationality: { name: "Monaco", image: "MCO" } },
    ]
  },
  {
    name: "Williams",
    color: "#000681", // #000681
    tp: { name: "James", lastname: "Vowles", age: 45, birthdate: new Date("1980-04-19"), image: "", nationality: { name: "United Kingdom", image: "GBR" } },
    drivers: [
      { name: "Carlos", lastname: "Sainz", age: 29, number: 55, rank: 7, image: "", birthdate: new Date("1994-09-01"), nationality: { name: "Spain", image: "ESP" } },
      { name: "Alexander", lastname: "Albon", age: 28, number: 23, rank: 8, image: "", birthdate: new Date("1996-03-23"), nationality: { name: "Thailand", image: "THA" } },
    ]
  },
  {
    name: "Racing Bulls",
    color: "#2345AB", // #2345AB
    tp: { name: "Alan", lastname: "Permane", age: 58, birthdate: new Date("1967-02-05"), image: "", nationality: { name: "United Kingdom", image: "GBR" } },
    drivers: [
      { name: "Liam", lastname: "Lawson", age: 23, number: 30, rank: 9, image: "", birthdate: new Date("2002-02-11"), nationality: { name: "New Zealand", image: "NZL" } },
      { name: "Arvid", lastname: "Lindblad", age: 18, number: 3, rank: 0, image: "", birthdate: new Date("2007-08-07"), nationality: { name: "United Kingdom", image: "GBR" } },
    ]
  },
  {
    name: "Aston Martin",
    color: "#00482C", // #00482C
    tp: { name: "Adrian", lastname: "Newey", age: 65, birthdate: new Date("1960-12-26"), image: "", nationality: { name: "United Kingdom", image: "GBR" } },
    drivers: [
      { name: "Fernando", lastname: "Alonso", age: 43, number: 14, rank: 10, image: "", birthdate: new Date("1981-07-29"), nationality: { name: "Spain", image: "ESP" } },
      { name: "Lance", lastname: "Stroll", age: 25, number: 18, rank: 11, image: "", birthdate: new Date("1998-10-29"), nationality: { name: "Canada", image: "CAN" } },
    ]
  },
  {
    name: "Haas",
    color: "#4D5052",
    tp: { name: "Ayao", lastname: "Komatsu", age: 52, birthdate: new Date("1973-05-18"), image: "", nationality: { name: "Japan", image: "JPN" } },
    drivers: [
      { name: "Esteban", lastname: "Ocon", age: 28, number: 31, rank: 12, image: "", birthdate: new Date("1996-09-17"), nationality: { name: "France", image: "FRA" } },
      { name: "Ollie", lastname: "Bearman", age: 20, number: 87, rank: 13, image: "", birthdate: new Date("2005-06-23"), nationality: { name: "United Kingdom", image: "GBR" } },
    ]
  },
  {
    name: "Audi",
    color: "#FFDD00",
    tp: { name: "Jonathan", lastname: "Wheatley", age: 55, birthdate: new Date("1969-10-16"), image: "", nationality: { name: "United Kingdom", image: "GBR" } },
    drivers: [
      { name: "Nico", lastname: "Hulkenberg", age: 37, number: 27, rank: 14, image: "", birthdate: new Date("1987-08-19"), nationality: { name: "Germany", image: "DEU" } },
      { name: "Gabriel", lastname: "Bortoleto", age: 20, number: 5, rank: 15, image: "", birthdate: new Date("2005-11-03"), nationality: { name: "Brazil", image: "BRA" } },
    ]
  },
  {
    name: "Alpine",
    color: "#005081", // #005081
    tp: { name: "Pierre", lastname: "Gasly", age: 28, birthdate: new Date("1996-02-07"), image: "", nationality: { name: "France", image: "FRA" } },
    drivers: [
      { name: "Pierre", lastname: "Gasly", age: 28, number: 10, rank: 16, image: "", birthdate: new Date("1996-02-07"), nationality: { name: "France", image: "FRA" } },
      { name: "Franco", lastname: "Colapinto", age: 22, number: 43, rank: 17, image: "", birthdate: new Date("2004-08-26"), nationality: { name: "Argentina", image: "ARG" } },
    ]
  },
  {
    name: "Cadillac",
    color: "#8B0000",
    tp: { name: "Graeme", lastname: "Lowdon", age: 56, birthdate: new Date("1969-03-06"), image: "", nationality: { name: "United Kingdom", image: "GBR" } },
    drivers: [
      { name: "Sergio", lastname: "Perez", age: 35, number: 11, rank: 18, image: "", birthdate: new Date("1990-01-26"), nationality: { name: "Mexico", image: "MEX" } },
      { name: "Valtteri", lastname: "Bottas", age: 34, number: 77, rank: 19, image: "", birthdate: new Date("1989-08-28"), nationality: { name: "Finland", image: "FIN" } },
    ]
  },
];



export interface Team {
    name: string,
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
    number: number,
    birthdate: Date,
    image: string,
    rank: number,
    nationality: Nationality
}

export interface Nationality{
    name: string,
    image: string
}