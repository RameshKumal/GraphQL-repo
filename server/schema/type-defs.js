const { gql } = require("apollo-server");

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    username: String!
    age: Int!
    nationality: Nationality!
    friends: [User]
    favouriteMovies: [Movie]
  }

  type Movie {
    id: ID!
    name: String!
    releaseYear: String!
    isInTheaters: Boolean!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User!
    movies: [Movie!]!
    movie(name: String!): Movie!
  }

  input CreateUserInput {
    name: String!
    username: String!
    age: Int!
    nationality: Nationality = AMERICAN
  }

  input UpdateUserName {
    id: ID!
    newUserName: String!
  }

  

  type Mutation {
    createUser(input: CreateUserInput!): User
    updateUser(input: UpdateUserName!):User
    deleteUser(id: ID!):User
  }
  enum Nationality {
    AMERICAN
    MEXICAN
    PAKISTANI
    BRITISH
    EGYPTIAN
    SOUTHKOREAN
  }
`;

module.exports = { typeDefs };
