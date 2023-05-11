exports.userList = [
  {
    id: 1,
    name: "John Doe",
    username: "johndoe123",
    age: 27,
    nationality: "AMERICAN",
  },

  {
    id: 2,
    name: "Maria Rodriguez",
    username: "mariarodz",
    age: 34,
    nationality: "MEXICAN",
    friends: [
      {
        id: 2,
        name: "Maria Rodriguez",
        username: "mariarodz",
        age: 34,
        nationality: "MEXICAN",
      },
    ],
  },

  {
    id: 3,
    name: "Hassan Ali",
    username: "hassanali",
    age: 22,
    nationality: "PAKISTANI",
  },

  {
    id: 4,
    name: "Sophie Johnson",
    username: "sophiej",
    age: 41,
    nationality: "BRITISH",
    friends: [
      {
        id: 3,
        name: "Hassan Ali",
        username: "hassanali",
        age: 22,
        nationality: "PAKISTANI",
      },
      {
        id: 2,
        name: "Maria Rodriguez",
        username: "mariarodz",
        age: 34,
        nationality: "MEXICAN",
      },
    ],
  },

  {
    id: 5,
    name: "Ahmed Hassan",
    username: "ahmedhassan",
    age: 29,
    nationality: "EGYPTIAN",
    friends: [
      {
        id: 2,
        name: "Maria Rodriguez",
        username: "mariarodz",
        age: 34,
        nationality: "MEXICAN",
      },
    ],
  },

  {
    id: 6,
    name: "Lena Kim",
    username: "lenak",
    age: 25,
    nationality: "SOUTHKOREAN",
  },
];

exports.moviesList = [
  {
    id: "1",
    name: "Avengers: Endgame",
    releaseYear: "2019",
    isInTheaters: false,
  },
  {
    id: "2",
    name: "Joker",
    releaseYear: "2019",
    isInTheaters: false,
  },
  {
    id: "3",
    name: "Black Panther",
    releaseYear: "2018",
    isInTheaters: false,
  },
  {
    id: "4",
    name: "Spider-Man: No Way Home",
    releaseYear: "2021",
    isInTheaters: true,
  },
  {
    id: "5",
    name: "Wonder Woman 1984",
    releaseYear: "2020",
    isInTheaters: false,
  },
  {
    id: "6",
    name: "The Dark Knight",
    releaseYear: "2008",
    isInTheaters: false,
  },
];
