const { userList, moviesList } = require("../FakeData");
const _ = require("lodash");

const resolvers = {
  /*Query resolver */
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

  /*User Resolver */
  User: {
    favouriteMovies: () => {
      return _.filter(
        moviesList,
        (movie) => movie.releaseYear >= 2020 && movie.releaseYear <= 2021
      );
    },
  },

  /*mutation resolver */
  Mutation: {
    createUser: (parent, args) => {
      const user = args.input;
      const lastId = userList[userList.length - 1].id;
      user.id = lastId + 1;
      userList.push(user);
      return user;
    },

    updateUser: (parent, args) => {
      const { id, newUserName } = args.input;
      let updatedUser;
      userList.forEach((user) => {
        if (user.id === Number(id)) {
          user.username = newUserName;
          updatedUser = user;
        }
      });
      return updatedUser;
    },

    deleteUser: (parent, args) => {
      const id  = args.id;
      // let userData = userList.filter((user) => {
      //   return user.id !== Number(id);
      // });
     _.remove(userList, (user) => user.id === Number(id))
      return null;
    },
  },
};

module.exports = { resolvers };
