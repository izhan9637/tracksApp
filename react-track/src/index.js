import React from "react";
import ReactDOM from "react-dom";

import { ApolloProvider, Query } from "react-apollo";
import ApolloClient, { gql } from "apollo-boost";
import Root from "./Root";
import * as serviceWorker from "./serviceWorker";



const client = new ApolloClient({
    uri: "http://localhost:8000/graphql/"
});

ReactDOM.render(
    <ApolloProvider client={client}><Root />
    </ApolloProvider>,
    document.getElementById("root")
  );
  
  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: http://bit.ly/CRA-PWA
  serviceWorker.unregister();
  