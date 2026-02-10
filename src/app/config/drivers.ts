export const Drivers: Driver[] = [
  {
    teamId: 'mclaren',
    name: 'Lando', lastname: 'Norris', age: 25, number: 4, rank: 1,
    bio: 'BIO.NORRIS', birthdate: new Date('1999-11-13'),
    nationality: { name: 'United Kingdom', image: 'GBR' },
    stat: {
        gp: 152,
        point: 1430,
        finish: "1 (x11)",
        podium: 44,
        grid: "1 (x16)",
        pole: 16,
        champion: 1,
        dnf: 13
    }
  },
  {
    teamId: 'mclaren',
    name: 'Oscar', lastname: 'Piastri', age: 24, number: 81, rank: 2,
    bio: 'BIO.PIASTRI', birthdate: new Date('2001-04-06'),
    nationality: { name: 'Australia', image: 'AUS' },
    stat: {
        gp: 70,
        point: 1033,
        finish: "1 (x5)",
        podium: 24,
        grid: "1 (x8)",
        pole: 7,
        champion: 0,
        dnf: 19
    }
  },
  {
    teamId: 'mercedes',
    name: 'George', lastname: 'Russell', age: 26, number: 63, rank: 3,
    bio: 'BIO.RUSSELL', birthdate: new Date('1998-02-15'),
    nationality: { name: 'United Kingdom', image: 'GBR' },
    stat: {
        gp: 152,
        point: 1430,
        finish: "1 (x11)",
        podium: 24,
        grid: "1 (x16)",
        pole: 16,
        champion: 1,
        dnf: 13
    }
  },
  {
    teamId: 'mercedes',
    name: 'Kimi', lastname: 'Antonelli', age: 19, number: 12, rank: 0,
    bio: 'BIO.ANTONELLI', birthdate: new Date('2006-11-13'),
    nationality: { name: 'Italy', image: 'ITA' },
    stat: {
        gp: 24,
        point: 150,
        finish: "2 (x1)",
        podium: 3,
        grid: "2 (x1)",
        pole: 0,
        champion: 0,
        dnf: 4
    }
  },
  {
    teamId: 'redbull',
    name: 'Max', lastname: 'Verstappen', age: 27, number: 3, rank: 4,
    bio: 'BIO.VERSTAPPEN', birthdate: new Date('1997-09-30'),
    nationality: { name: 'Netherlands', image: 'NLD' },
    stat: {
        gp: 233,
        point: 3444.5,
        finish: "1 (x71)",
        podium: 127,
        grid: "1 (x48)",
        pole: 48,
        champion: 4,
        dnf: 33
    }
  },
  {
    teamId: 'redbull',
    name: 'Isack', lastname: 'Hadjar', age: 21, number: 6, rank: 0,
    bio: 'BIO.HADJAR', birthdate: new Date('2004-08-09'),
    nationality: { name: 'France', image: 'FRA' },
    stat: {
        gp: 23,
        point: 51,
        finish: "3 (x1)",
        podium: 1,
        grid: "4 (x1)",
        pole: 0,
        champion: 0,
        dnf: 2
    }
  },
  {
    teamId: 'ferrari',
    name: 'Lewis', lastname: 'Hamilton', age: 40, number: 44, rank: 5,
    bio: 'BIO.HAMILTON', birthdate: new Date('1985-01-07'),
    nationality: { name: 'United Kingdom', image: 'GBR' },
    stat: {
        gp: 380,
        point: 5018.5,
        finish: "1 (x105)",
        podium: 202,
        grid: "1 (x104)",
        pole: 104,
        champion: 7,
        dnf: 34
    }
  },
  {
    teamId: 'ferrari',
    name: 'Charles', lastname: 'Leclerc', age: 26, number: 16, rank: 6,
    bio: 'BIO.LECLERC', birthdate: new Date('1997-10-16'),
    nationality: { name: 'Monaco', image: 'MCO' },
    stat: {
        gp: 171,
        point: 1672,
        finish: "1 (x18)",
        podium: 50,
        grid: "1 (x27)",
        pole: 27,
        champion: 0,
        dnf: 23
    }
  },
  {
    teamId: 'williams',
    name: 'Carlos', lastname: 'Sainz', age: 29, number: 55, rank: 7,
    bio: 'BIO.SAINZ', birthdate: new Date('1994-09-01'),
    nationality: { name: 'Spain', image: 'ESP' },
    stat: {
        gp: 230,
        point: 1336.5,
        finish: "1 (x14)",
        podium: 29,
        grid: "1 (x16)",
        pole: 6,
        champion: 0,
        dnf: 42
    }
  },
  {
    teamId: 'williams',
    name: 'Alexander', lastname: 'Albon', age: 28, number: 23, rank: 8,
    bio: 'BIO.ALBON', birthdate: new Date('1996-03-23'),
    nationality: { name: 'Thailand', image: 'THA' },
    stat: {
        gp: 128,
        point: 313,
        finish: "3 (x2)",
        podium: 2,
        grid: "4 (x5)",
        pole: 0,
        champion: 0,
        dnf: 22
    }
  },
  {
    teamId: 'racing',
    name: 'Liam', lastname: 'Lawson', age: 23, number: 30, rank: 9,
    bio: 'BIO.LAWSON', birthdate: new Date('2002-02-11'),
    nationality: { name: 'New Zealand', image: 'NZL' },
    stat: {
        gp: 35,
        point: 44,
        finish: "5 (x1)",
        podium: 0,
        grid: "3 (x1)",
        pole: 0,
        champion: 0,
        dnf: 6
    }
  },
  {
    teamId: 'racing',
    name: 'Arvid', lastname: 'Lindblad', age: 18, number: 3, rank: 0,
    bio: 'BIO.LINDBLAD', birthdate: new Date('2007-08-07'),
    nationality: { name: 'United Kingdom', image: 'GBR' },
    stat: {
        gp: 0,
        point: 0,
        finish: "0",
        podium: 0,
        grid: "0",
        pole: 0,
        champion: 0,
        dnf: 0
    }
  },
  {
    teamId: 'aston',
    name: 'Fernando', lastname: 'Alonso', age: 43, number: 14, rank: 10,
    bio: 'BIO.ALONSO', birthdate: new Date('1981-07-29'),
    nationality: { name: 'Spain', image: 'ESP' },
    stat: {
        gp: 427,
        point: 2393,
        finish: "1 (x32)",
        podium: 106,
        grid: "1 (x22)",
        pole: 22,
        champion: 2,
        dnf: 83
    }
  },
  {
    teamId: 'aston',
    name: 'Lance', lastname: 'Stroll', age: 25, number: 18, rank: 11,
    bio: 'BIO.STROLL', birthdate: new Date('1998-10-29'),
    nationality: { name: 'Canada', image: 'CAN' },
    stat: {
        gp: 190,
        point: 325,
        finish: "3 (x3)",
        podium: 3,
        grid: "1 (x1)",
        pole: 1,
        champion: 0,
        dnf: 31
    }
  },
  {
    teamId: 'haas',
    name: 'Esteban', lastname: 'Ocon', age: 28, number: 31, rank: 12,
    bio: 'BIO.OCON', birthdate: new Date('1996-09-17'),
    nationality: { name: 'France', image: 'FRA' },
    stat: {
        gp: 180,
        point: 483,
        finish: "1 (x1)",
        podium: 4,
        grid: "3 (x3)",
        pole: 0,
        champion: 0,
        dnf: 25
    }
  },
  {
    teamId: 'haas',
    name: 'Ollie', lastname: 'Bearman', age: 20, number: 87, rank: 13,
    bio: 'BIO.BEARMAN', birthdate: new Date('2005-06-23'),
    nationality: { name: 'United Kingdom', image: 'GBR' },
    stat: {
        gp: 27,
        point: 48,
        finish: "4 (x1)",
        podium: 0,
        grid: "8 (x2)",
        pole: 0,
        champion: 0,
        dnf: 16
    }
  },
  {
    teamId: 'audi',
    name: 'Nico', lastname: 'Hulkenberg', age: 37, number: 27, rank: 14,
    bio: 'BIO.HULKENBERG', birthdate: new Date('1987-08-19'),
    nationality: { name: 'Germany', image: 'DEU' },
    stat: {
        gp: 251,
        point: 622,
        finish: "3 (x1)",
        podium: 1,
        grid: "1 (x1)",
        pole: 1,
        champion: 0,
        dnf: 44
    }
  },
  {
    teamId: 'audi',
    name: 'Gabriel', lastname: 'Bortoleto', age: 20, number: 5, rank: 15,
    bio: 'BIO.BORTOLETO', birthdate: new Date('2005-11-03'),
    nationality: { name: 'Brazil', image: 'BRA' },
    stat: {
        gp: 24,
        point: 19,
        finish: "6 (x1)",
        podium: 0,
        grid: "7 (x3)",
        pole: 0,
        champion: 0,
        dnf: 5
    }
  },
  {
    teamId: 'alpine',
    name: 'Pierre', lastname: 'Gasly', age: 28, number: 10, rank: 16,
    bio: 'BIO.GASLY', birthdate: new Date('1996-02-07'),
    nationality: { name: 'France', image: 'FRA' },
    stat: {
        gp: 177,
        point: 458,
        finish: "1 (x1)",
        podium: 5,
        grid: "2 (x1)",
        pole: 0,
        champion: 0,
        dnf: 26
    }
  },
  {
    teamId: 'alpine',
    name: 'Franco', lastname: 'Colapinto', age: 22, number: 43, rank: 17,
    bio: 'BIO.COLAPINTO', birthdate: new Date('2004-08-26'),
    nationality: { name: 'Argentina', image: 'ARG' },
    stat: {
        gp: 27,
        point: 5,
        finish: "8 (x1)",
        podium: 0,
        grid: "8 (x1)",
        pole: 0,
        champion: 0,
        dnf: 3
    }
  },
  {
    teamId: 'cadillac',
    name: 'Sergio', lastname: 'Perez', age: 35, number: 11, rank: 18,
    bio: 'BIO.PEREZ', birthdate: new Date('1990-01-26'),
    nationality: { name: 'Mexico', image: 'MEX' },
    stat: {
        gp: 281,
        point: 1638,
        finish: "1 (x6)",
        podium: 39,
        grid: "1 (x3)",
        pole: 3,
        champion: 0,
        dnf: 39
    }
  },
  {
    teamId: 'cadillac',
    name: 'Valtteri', lastname: 'Bottas', age: 34, number: 77, rank: 19,
    bio: 'BIO.BOTTAS', birthdate: new Date('1989-08-28'),
    nationality: { name: 'Finland', image: 'FIN' },
    stat: {
        gp: 246,
        point: 1797,
        finish: "1 (x10)",
        podium: 67,
        grid: "1 (x20)",
        pole: 20,
        champion: 0,
        dnf: 28
    }
  },
];

export interface Driver {
  teamId: string;
  name: string;
  lastname: string;
  age: number;
  number: number;
  birthdate: Date;
  bio: string;
  rank: number;
  nationality: Nationality;
  stat: {
    gp: number,
    point: number,
    finish: string,
    podium: number,
    grid: string,
    pole: number,
    champion: number,
    dnf: number
  }
}

export interface Nationality {
  name: string;
  image: string;
}

export interface Stat {
    label: string,
    number: string
}
