import React from "react"; // useState
import "./App.css";
// import axios from "axios";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";

import Header from "./components/Header";
import Form from "./components/Form";
import Table from "./components/Table";
// import Footer from "./components/Footer";

const httpLink = createHttpLink({
  uri: "/graphql",
});

// const httpLink = createHttpLink({
//   uri: "http://localhost:3001/graphql",
// });

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Header />
        <Form />
        <Table />
        {/* <Footer /> */}
      </div>
    </ApolloProvider>
  );
}

export default App;
