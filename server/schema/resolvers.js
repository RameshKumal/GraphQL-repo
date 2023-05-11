const { userList, moviesList } = require("../FakeData");
const _ = require("lodash");

const resolvers = {
  Query: {
    users: () => {
      return userList;
    },
    user: (parent, args) => {
      const id = args.id;
      const user = _.find(userList, { id: Number(id) });
      return user;
    },
    movies: () => {
      return moviesList;
    },
    movie: (parent, args) => {
      const name = args.name;
      const movie = _.find(moviesList, { name: name });
      return movie;
    },
  },

  User: {
    favouriteMovies: () => {
      return _.filter(
        moviesList,
        (movie) => movie.releaseYear >= 2020 && movie.releaseYear <= 2021
      );
    },
  },
  Mutation: {
    createUser: (parent, args) => {
      const user = args.input;
      const lastId = userList[userList.length - 1].id;
      user.id = lastId + 1;
      userList.push(user);
      return user;
    },
  },
};

module.exports = { resolvers };
