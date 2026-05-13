export const Drivers: Driver[] = [
  {
    teamId: 'mclaren', driverId: 'norris',
    name: 'Lando', lastname: 'Norris', age: 25, number: 4, rank: 1,
    bio: 'BIO.NORRIS', birthdate: new Date('1999-11-13'),
    nationality: { name: 'United Kingdom', image: 'GBR' },
    stat: {
        gp: 152,
        point: 1430,
        finish: {
          nb: 1,
          ct: 11
        },
        podium: 44,
        grid: {
          nb: 1,
          ct: 16
        },
        pole: 16,
        champion: 1,
        dnf: 13
    }
  },
  {
    teamId: 'mclaren', driverId: 'piastri',
    name: 'Oscar', lastname: 'Piastri', age: 24, number: 81, rank: 2,
    bio: 'BIO.PIASTRI', birthdate: new Date('2001-04-06'),
    nationality: { name: 'Australia', image: 'AUS' },
    stat: {
        gp: 70,
        point: 1033,
        finish: {
          nb: 1,
          ct: 5
        },
        podium: 24,
        grid: {
          nb: 1,
          ct: 8
        },
        pole: 7,
        champion: 0,
        dnf: 19
    }
  },
  {
    teamId: 'mercedes', driverId: 'russell',
    name: 'George', lastname: 'Russell', age: 26, number: 63, rank: 3,
    bio: 'BIO.RUSSELL', birthdate: new Date('1998-02-15'),
    nationality: { name: 'United Kingdom', image: 'GBR' },
    stat: {
        gp: 152,
        point: 1430,
        finish: {
          nb: 1,
          ct: 11
        },
        podium: 24,
        grid: {
          nb: 1,
          ct: 16
        },
        pole: 16,
        champion: 1,
        dnf: 13
    }
  },
  {
    teamId: 'mercedes', driverId: 'antonelli',
    name: 'Kimi', lastname: 'Antonelli', age: 19, number: 12, rank: 0,
    bio: 'BIO.ANTONELLI', birthdate: new Date('2006-11-13'),
    nationality: { name: 'Italy', image: 'ITA' },
    stat: {
        gp: 24,
        point: 150,
        finish: {
          nb: 2,
          ct: 1
        },
        podium: 3,
        grid: {
          nb: 2,
          ct: 1
        },
        pole: 0,
        champion: 0,
        dnf: 4
    }
  },
  {
    teamId: 'red_bull', driverId: 'verstappen',
    name: 'Max', lastname: 'Verstappen', age: 27, number: 3, rank: 4,
    bio: 'BIO.VERSTAPPEN', birthdate: new Date('1997-09-30'),
    nationality: { name: 'Netherlands', image: 'NLD' },
    stat: {
        gp: 233,
        point: 3444.5,
        finish: {
          nb: 1,
          ct: 71
        },
        podium: 127,
        grid: {
          nb: 1,
          ct: 48
        },
        pole: 48,
        champion: 4,
        dnf: 33
    }
  },
  {
    teamId: 'red_bull', driverId: 'hadjar',
    name: 'Isack', lastname: 'Hadjar', age: 21, number: 6, rank: 0,
    bio: 'BIO.HADJAR', birthdate: new Date('2004-08-09'),
    nationality: { name: 'France', image: 'FRA' },
    stat: {
        gp: 23,
        point: 51,
        finish: {
          nb: 3,
          ct: 1
        },
        podium: 1,
        grid: {
          nb: 4,
          ct: 1
        },
        pole: 0,
        champion: 0,
        dnf: 2
    }
  },
  {
    teamId: 'ferrari', driverId: 'hamilton',
    name: 'Lewis', lastname: 'Hamilton', age: 40, number: 44, rank: 5,
    bio: 'BIO.HAMILTON', birthdate: new Date('1985-01-07'),
    nationality: { name: 'United Kingdom', image: 'GBR' },
    stat: {
        gp: 380,
        point: 5018.5,
        finish: {
          nb: 1,
          ct: 105
        },
        podium: 202,
        grid: {
          nb: 1,
          ct: 104
        },
        pole: 104,
        champion: 7,
        dnf: 34
    }
  },
  {
    teamId: 'ferrari', driverId: 'leclerc',
    name: 'Charles', lastname: 'Leclerc', age: 26, number: 16, rank: 6,
    bio: 'BIO.LECLERC', birthdate: new Date('1997-10-16'),
    nationality: { name: 'Monaco', image: 'MCO' },
    stat: {
        gp: 171,
        point: 1672,
        finish: {
          nb: 1,
          ct: 18
        },
        podium: 50,
        grid: {
          nb: 1,
          ct: 27
        },
        pole: 27,
        champion: 0,
        dnf: 23
    }
  },
  {
    teamId: 'williams', driverId: 'sainz',
    name: 'Carlos', lastname: 'Sainz', age: 29, number: 55, rank: 7,
    bio: 'BIO.SAINZ', birthdate: new Date('1994-09-01'),
    nationality: { name: 'Spain', image: 'ESP' },
    stat: {
        gp: 230,
        point: 1336.5,
        finish: {
          nb: 1,
          ct: 14
        },
        podium: 29,
        grid: {
          nb: 1,
          ct: 16
        },
        pole: 6,
        champion: 0,
        dnf: 42
    }
  },
  {
    teamId: 'williams', driverId: 'albon',
    name: 'Alexander', lastname: 'Albon', age: 28, number: 23, rank: 8,
    bio: 'BIO.ALBON', birthdate: new Date('1996-03-23'),
    nationality: { name: 'Thailand', image: 'THA' },
    stat: {
        gp: 128,
        point: 313,
        finish: {
          nb: 3,
          ct: 2
        },
        podium: 2,
        grid: {
          nb: 4,
          ct: 5
        },
        pole: 0,
        champion: 0,
        dnf: 22
    }
  },
  {
    teamId: 'rb', driverId: 'lawson',
    name: 'Liam', lastname: 'Lawson', age: 23, number: 30, rank: 9,
    bio: 'BIO.LAWSON', birthdate: new Date('2002-02-11'),
    nationality: { name: 'New Zealand', image: 'NZL' },
    stat: {
        gp: 35,
        point: 44,
        finish: {
          nb: 5,
          ct: 1
        },
        podium: 0,
        grid: {
          nb: 3,
          ct: 1
        },
        pole: 0,
        champion: 0,
        dnf: 6
    }
  },
  {
    teamId: 'rb', driverId: 'lindblad',
    name: 'Arvid', lastname: 'Lindblad', age: 18, number: 3, rank: 0,
    bio: 'BIO.LINDBLAD', birthdate: new Date('2007-08-07'),
    nationality: { name: 'United Kingdom', image: 'GBR' },
    stat: {
        gp: 0,
        point: 0,
        finish: {
          nb: 0,
          ct: 0
        },
        podium: 0,
        grid: {
          nb: 0,
          ct: 0
        },
        pole: 0,
        champion: 0,
        dnf: 0
    }
  },
  {
    teamId: 'aston_martin', driverId: 'alonso',
    name: 'Fernando', lastname: 'Alonso', age: 43, number: 14, rank: 10,
    bio: 'BIO.ALONSO', birthdate: new Date('1981-07-29'),
    nationality: { name: 'Spain', image: 'ESP' },
    stat: {
        gp: 427,
        point: 2393,
        finish: {
          nb: 1,
          ct: 32
        },
        podium: 106,
        grid: {
          nb: 1,
          ct: 22
        },
        pole: 22,
        champion: 2,
        dnf: 83
    }
  },
  {
    teamId: 'aston_martin', driverId: 'stroll',
    name: 'Lance', lastname: 'Stroll', age: 25, number: 18, rank: 11,
    bio: 'BIO.STROLL', birthdate: new Date('1998-10-29'),
    nationality: { name: 'Canada', image: 'CAN' },
    stat: {
        gp: 190,
        point: 325,
        finish: {
          nb: 3,
          ct: 3
        },
        podium: 3,
        grid: {
          nb: 1,
          ct: 1
        },
        pole: 1,
        champion: 0,
        dnf: 31
    }
  },
  {
    teamId: 'haas', driverId: 'ocon',
    name: 'Esteban', lastname: 'Ocon', age: 28, number: 31, rank: 12,
    bio: 'BIO.OCON', birthdate: new Date('1996-09-17'),
    nationality: { name: 'France', image: 'FRA' },
    stat: {
        gp: 180,
        point: 483,
        finish: {
          nb: 1,
          ct: 1
        },
        podium: 4,
        grid: {
          nb: 3,
          ct: 3
        },
        pole: 0,
        champion: 0,
        dnf: 25
    }
  },
  {
    teamId: 'haas', driverId: 'bearman',
    name: 'Ollie', lastname: 'Bearman', age: 20, number: 87, rank: 13,
    bio: 'BIO.BEARMAN', birthdate: new Date('2005-06-23'),
    nationality: { name: 'United Kingdom', image: 'GBR' },
    stat: {
        gp: 27,
        point: 48,
        finish: {
          nb: 4,
          ct: 1
        },
        podium: 0,
        grid: {
          nb: 8,
          ct: 2
        },
        pole: 0,
        champion: 0,
        dnf: 16
    }
  },
  {
    teamId: 'audi', driverId: 'hulkenberg',
    name: 'Nico', lastname: 'Hulkenberg', age: 37, number: 27, rank: 14,
    bio: 'BIO.HULKENBERG', birthdate: new Date('1987-08-19'),
    nationality: { name: 'Germany', image: 'DEU' },
    stat: {
        gp: 251,
        point: 622,
        finish: {
          nb: 3,
          ct: 1
        },
        podium: 1,
        grid: {
          nb: 1,
          ct: 1
        },
        pole: 1,
        champion: 0,
        dnf: 44
    }
  },
  {
    teamId: 'audi', driverId: 'bortoleto',
    name: 'Gabriel', lastname: 'Bortoleto', age: 20, number: 5, rank: 15,
    bio: 'BIO.BORTOLETO', birthdate: new Date('2005-11-03'),
    nationality: { name: 'Brazil', image: 'BRA' },
    stat: {
        gp: 24,
        point: 19,
        finish: {
          nb: 6,
          ct: 1
        },
        podium: 0,
        grid: {
          nb: 7,
          ct: 3
        },
        pole: 0,
        champion: 0,
        dnf: 5
    }
  },
  {
    teamId: 'alpine', driverId: 'gasly',
    name: 'Pierre', lastname: 'Gasly', age: 28, number: 10, rank: 16,
    bio: 'BIO.GASLY', birthdate: new Date('1996-02-07'),
    nationality: { name: 'France', image: 'FRA' },
    stat: {
        gp: 177,
        point: 458,
        finish: {
          nb: 1,
          ct: 1
        },
        podium: 5,
        grid: {
          nb: 2,
          ct: 1
        },
        pole: 0,
        champion: 0,
        dnf: 26
    }
  },
  {
    teamId: 'alpine', driverId: 'colapinto',
    name: 'Franco', lastname: 'Colapinto', age: 22, number: 43, rank: 17,
    bio: 'BIO.COLAPINTO', birthdate: new Date('2004-08-26'),
    nationality: { name: 'Argentina', image: 'ARG' },
    stat: {
        gp: 27,
        point: 5,
        finish: {
          nb: 8,
          ct: 1
        },
        podium: 0,
        grid: {
          nb: 8,
          ct: 1
        },
        pole: 0,
        champion: 0,
        dnf: 3
    }
  },
  {
    teamId: 'cadillac', driverId: 'perez',
    name: 'Sergio', lastname: 'Perez', age: 35, number: 11, rank: 18,
    bio: 'BIO.PEREZ', birthdate: new Date('1990-01-26'),
    nationality: { name: 'Mexico', image: 'MEX' },
    stat: {
        gp: 281,
        point: 1638,
        finish: {
          nb: 1,
          ct: 6
        },
        podium: 39,
        grid: {
          nb: 1,
          ct: 3
        },
        pole: 3,
        champion: 0,
        dnf: 39
    }
  },
  {
    teamId: 'cadillac', driverId: 'bottas',
    name: 'Valtteri', lastname: 'Bottas', age: 34, number: 77, rank: 19,
    bio: 'BIO.BOTTAS', birthdate: new Date('1989-08-28'),
    nationality: { name: 'Finland', image: 'FIN' },
    stat: {
        gp: 246,
        point: 1797,
        finish: {
          nb: 1,
          ct: 10
        },
        podium: 67,
        grid: {
          nb: 1,
          ct: 20
        },
        pole: 20,
        champion: 0,
        dnf: 28
    }
  },
];

export interface Driver {
  teamId: string;
  driverId: string;
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
    finish: {
      nb: number,
      ct: number
    },
    podium: number,
    grid: {
      nb: number,
      ct: number
    },
    pole: number,
    champion: number,
    dnf: number
  }
}

export interface Nationality {
  name: string;
  image: string;
}
