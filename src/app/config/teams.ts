export const Teams: Team[] = [
  {
    name: "McLaren",
    color: "#863400",
    tp: { name: "Andrea", lastname: "Stella", age: 54, birthdate: new Date("1971-02-22"), image: "", nationality: { name: "Italy", image: "" } },
    drivers: [
      { name: "Oscar", lastname: "Piastri", age: 24, number: 81, rank: 2, image: "", birthdate: new Date("2001-04-06"), nationality: { name: "Australia", image: "AUS" } },
      { name: "Lando", lastname: "Norris", age: 25, number: 4, rank: 1, image: "", birthdate: new Date("1999-11-13"), nationality: { name: "United Kingdom", image: "GBR" } },
    ]
  },
  {
    name: "Ferrari",
    color: "#710006",
    tp: { name: "Fred", lastname: "Vasseur", age: 57, birthdate: new Date("1968-05-28"), image: "", nationality: { name: "France", image: "FRA" } },
    drivers: [
      { name: "Charles", lastname: "Leclerc", age: 27, number: 16, rank: 5, image: "", birthdate: new Date("1997-10-16"), nationality: { name: "Monaco", image: "MCO" } },
      { name: "Lewis", lastname: "Hamilton", age: 40, number: 44, rank: 6, image: "", birthdate: new Date("1985-01-07"), nationality: { name: "United Kingdom", image: "GBR" } },
    ]
  },
  {
    name: "Mercedes",
    color: "#007560",
    tp: { name: "Toto", lastname: "Wolff", age: 53, birthdate: new Date("1972-01-12"), image: "", nationality: { name: "Austria", image: "AUS" } },
    drivers: [
      { name: "George", lastname: "Russell", age: 27, number: 63, rank: 4, image: "", birthdate: new Date("1998-02-15"), nationality: { name: "United Kingdom", image: "GBR" } },
      { name: "Kimi", lastname: "Antonelli", age: 18, number: 81, rank: 7, image: "", birthdate: new Date("2006-08-25"), nationality: { name: "Italy", image: "ITA" } },
    ]
  },
  {
    name: "Red Bull Racing",
    color: "#003282",
    tp: { name: "Laurent Mekies", lastname: "Horner", age: 51, birthdate: new Date("1973-11-16"), image: "", nationality: { name: "United Kingdom", image: "GBR" } },
    drivers: [
      { name: "Max", lastname: "Verstappen", age: 27, number: 1, rank: 3, image: "", birthdate: new Date("1997-09-30"), nationality: { name: "Netherlands", image: "NLD" } },
      { name: "Yuki", lastname: "Tsunoda", age: 25, number: 22, rank: 17, image: "", birthdate: new Date("2000-05-11"), nationality: { name: "Japan", image: "JPN" } },
    ]
  },
  {
    name: "Williams",
    color: "#000681",
    tp: { name: "James", lastname: "Vowles", age: 45, birthdate: new Date("1979-01-15"), image: "", nationality: { name: "United Kingdom", image: "GBR" } },
    drivers: [
      { name: "Alex", lastname: "Albon", age: 29, number: 23, rank: 8, image: "", birthdate: new Date("1996-03-23"), nationality: { name: "Thailand", image: "THA" } },
      { name: "Carlos", lastname: "Sainz", age: 30, number: 55, rank: 12, image: "", birthdate: new Date("1994-09-01"), nationality: { name: "Spain", image: "ESP" } },
    ]
  },
  {
    name: "Racing Bulls",
    color: "#2345AB",
    tp: { name: "Alan", lastname: "Permane", age: 48, birthdate: new Date("1977-04-28"), image: "", nationality: { name: "France", image: "FRA" } },
    drivers: [
      { name: "Isack", lastname: "Hadjar", age: 19, number: 31, rank: 11, image: "", birthdate: new Date("2004-05-14"), nationality: { name: "France", image: "FRA" } },
      { name: "Liam", lastname: "Lawson", age: 22, number: 30, rank: 15, image: "", birthdate: new Date("2002-02-11"), nationality: { name: "New Zealand", image: "NZL" } },
    ]
  },
  {
    name: "Aston Martin",
    color: "#00482C",
    tp: { name: "Andy", lastname: "Cowell", age: 50, birthdate: new Date("1974-06-28"), image: "", nationality: { name: "United Kingdom", image: "GBR" } },
    drivers: [
      { name: "Fernando", lastname: "Alonso", age: 44, number: 14, rank: 10, image: "", birthdate: new Date("1981-07-29"), nationality: { name: "Spain", image: "ESP" } },
      { name: "Lance", lastname: "Stroll", age: 26, number: 18, rank: 14, image: "", birthdate: new Date("1998-10-29"), nationality: { name: "Canada", image: "CAN" } },
    ]
  },
  {
    name: "Haas F1 Team",
    color: "#4D5052",
    tp: { name: "Ayao", lastname: "Komatsu", age: 51, birthdate: new Date("1974-10-21"), image: "", nationality: { name: "Japan", image: "JPN" } },
    drivers: [
      { name: "Esteban", lastname: "Ocon", age: 28, number: 31, rank: 16, image: "", birthdate: new Date("1996-09-17"), nationality: { name: "France", image: "FRA" } },
      { name: "Oliver", lastname: "Bearman", age: 19, number: 87, rank: 13, image: "", birthdate: new Date("2005-05-08"), nationality: { name: "United Kingdom", image: "GBR" } },
    ]
  },
  {
    name: "Kick Sauber",
    color: "#006300",
    tp: { name: "Jonathan", lastname: "Wheatley", age: 58, birthdate: new Date("1967-05-07"), image: "", nationality: { name: "United Kingdom", image: "GBR" } },
    drivers: [
      { name: "Nico", lastname: "Hülkenberg", age: 37, number: 27, rank: 9, image: "", birthdate: new Date("1987-08-19"), nationality: { name: "Germany", image: "DEU" } },
      { name: "Gabriel", lastname: "Bortoleto", age: 21, number: 5, rank: 19, image: "", birthdate: new Date("2004-03-30"), nationality: { name: "Brazil", image: "BRA" } },
    ]
  },
  {
    name: "Alpine",
    color: "#005081",
    tp: { name: "Flavio", lastname: "Briatore", age: 39, birthdate: new Date("1986-04-10"), image: "", nationality: { name: "United Kingdom", image: "GBR" } },
    drivers: [
      { name: "Pierre", lastname: "Gasly", age: 28, number: 10, rank: 18, image: "", birthdate: new Date("1996-02-07"), nationality: { name: "France", image: "FRA" } },
      { name: "Franco", lastname: "Colapinto", age: 20, number: 6, rank: 20, image: "", birthdate: new Date("2004-04-20"), nationality: { name: "Argentina", image: "ARG" } },
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

import { animate, style, transition, trigger } from "@angular/animations";

export const inOutOpac = trigger('inOutOpac', [
    transition(':enter', [
        style({ opacity: 0}),
        animate('.9s {{delay}}ms ease', style({ opacity: 1}))
    ], { params: { delay: 0}}),
    transition(':leave', [
        style({opacity: 1}),
        animate('.9s {{delay}}ms ease', style({ opacity: 0}))
    ], { params: { delay: 0}})
])

export const inBottom = trigger('inBottom', [
    transition(':enter', [
        style({transform: 'translateY(100%)'}),
        animate('.4s ease', style({transform: 'translateY(0%)'}))
    ]),
    transition(':leave', [
        style({transform: 'translateY(0%)'}),
        animate('.4s ease', style({transform: 'translateY(100%)'}))
    ])
])

export const inLeft = trigger('inLeft', [
    transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate('.4s ease', style({ transform: 'translateX(0)', opacity: 1 }))
    ]),
    transition(':leave' , [
        style({ transform: 'translateX(0)', opacity: 1 }),
        animate('.4s ease', style({ transform: 'translateX(-100%)', opacity: 0 }))
    ])
])

export const inLeftBottom = trigger('inLeftBottom', [
    transition(':enter', [
        style({opacity: 0, transform: 'translate(-20%,20%)'}),
        animate('.4s ease-in-out', style({opacity: 1, transform: 'translate(0,0)'}))
    ]),
    transition(':leave', [
        style({opacity: 1, transform: 'translate(0,0)'}),
        animate('.4s ease-in-out', style({opacity: 0, transform: 'translate(-20%, 20%'}))
    ])
])

export const inHeight = trigger('inHeight', [
    transition(':enter', [
        style({ height: 0}),
        animate('2s ease', style({height: 'calc(100% - 10px)'}))
    ]),
    transition(':leave', [
        style({height: 'calc(100% - 10px)'}),
        animate('2s ease', style({height: 0}))
    ])
])

export const inWidth = trigger('inWidth', [
    transition(':enter', [
        style({ width: 0}),
        animate('2.8s ease', style({width: 'calc(100% - 10px)'}))
    ]),
    transition(':leave', [
        style({width: 'calc(100% - 10px)'}),
        animate('2.8s ease', style({width: 0}))
    ])
])

export const inFull = trigger('inFull', [
    transition(':enter', [
        style({ width: 0, height: 0}),
        animate('.6s ease', style({width: '100%', height: '100%'}))
    ]),
    transition(':leave', [
        style({width: '100%', height: '100%'}),
        animate('.6s ease', style({width: 0, height: 0}))
    ])
])