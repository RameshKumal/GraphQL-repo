import { useQuery, gql, useLazyQuery } from "@apollo/client";
import "./displaydata.css";
import { useState } from "react";

const QUERY_ALL_USERS = gql`
  query getAllusers {
    users {
      id
      name
      age
      username
      nationality
    }
  }
`;

const GET_MOVIE_BY_NAME = gql`
  query GetMovieByName($name: String!) {
    movie(name: $name) {
      name
      releaseYear
    }
  }
`;

const DisplayUser = () => {
  const [searchMovie, setSearchMovie] = useState("");
  const { data, loading, error } = useQuery(QUERY_ALL_USERS);

  const [fetchMovie, { data: movieData, error: movieError }] =
    useLazyQuery(GET_MOVIE_BY_NAME);

  if (loading) {
    return <h1>Data is loading</h1>;
  }
  if (data) {
    console.log(data);
  }
  return (
    <div>
      <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Username</th>
          <th>Country</th>
        </tr>

        {data &&
          data.users?.map((user) => {
            return (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.username}</td>
                <td>{user.nationality}</td>
              </tr>
            );
          })}
      </table>
      <div>
        <br></br>
        <input
          type="text"
          placeholder="oldboy..."
          onChange={(event) => setSearchMovie(event.target.value)}
        />
        <button
          onClick={() => {
            fetchMovie({
              variables: {
                name: searchMovie,
              },
            });
          }}
        >
          Fetch Movie
        </button>
        <div>
          {movieData && (
            <div>
              <h1>Movie name: {movieData.movie.name}</h1>
              <h1>Release year: {movieData.movie.releaseYear}</h1>
            </div>
          )}
          {movieError && <h1>There was error fetching the data</h1>}
        </div>
      </div>
    </div>
  );
};

export default DisplayUser;
