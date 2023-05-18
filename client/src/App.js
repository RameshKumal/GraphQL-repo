import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "./App.css";
import DisplayUser from "./component/DisplayUsers";
/*apollo client use to connect the api of graphql */

function App() {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "http://localhost:4000/graphql",
  });
  return (
    <ApolloProvider client={client}>
      <DisplayUser />
    </ApolloProvider>
  );
}

export default App;
