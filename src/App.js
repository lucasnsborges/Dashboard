import "./styles/index.css";
import "./styles/custom.css"
import React, { Component } from "react";
import PropTypes from "prop-types";

import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import { ApolloClient } from "apollo-client";
import { ApolloLink } from "apollo-link";
import { onError } from "apollo-link-error";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import { InMemoryCache } from "apollo-cache-inmemory";
import { Helmet } from "react-helmet";

import OauthTokenRetrieve from "./components/OauthTokenRetrieve";
import PrivateRoute from "./components/PrivateRoute";
import OauthTokenStart from "./components/OauthTokenStart";
import SignOut from "./components/SignOut";

import Dashboard from "./screens/Dashboard";

import Login from './screens/Auth/Signin';
import Signup from './screens/Auth/Signup';

import { AuthTokenKey, GraphqlEndpoint } from "./utils/config";


class App extends Component {
  constructor(props) {
    super(props);
    // Get the Access Token from local storage
    const authToken = localStorage.getItem(AuthTokenKey);

    // Set the Graphql endpoint
    const httpLink = createHttpLink({
      uri: GraphqlEndpoint
    });

    const authLink = setContext((_, { headers }) => {
      // get the authentication token from local storage if it exists
      const token = authToken;
      // return the headers to the context so httpLink can read them
      return {
        headers: {
          ...headers,
          authorization: token ? `Bearer ${token}` : authToken
        }
      };
    });

    const errorLink = onError(({ networkError, graphQLErrors }) => {
      if (graphQLErrors) {
        const oauth2Error = `OAuth2 token expired or not provided`;

        graphQLErrors.forEach(({ message, locations, path }) => {
          if (message === oauth2Error) {
            this.props.history.push(`/`);
          }
          console.log(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
          );
        });
      }
      if (networkError) console.log(`[Network error]: ${networkError}`);
    });

    const link = ApolloLink.from([authLink, errorLink, httpLink]);

    this.client = new ApolloClient({
      link,
      cache: new InMemoryCache()
    });
  }

  render() {
    return (
      <Router>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Dashboard - Feed for showcasing your prototypes</title>
          <meta
            name="description"
            content="Dashboard is a livestream of images uploaded to company projects in Marvel."
          />
          <meta
            name="keywords"
            content="design dashboard, office dashboard, prototyping dashboard"
          />
          <link rel="canonical" href="https://dashboard.marvelapp.com" />
        </Helmet>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/cadastro" component={Signup} />
          <Route exact path="/oauth/" component={OauthTokenStart} />
          <Route exact path="/oauth/callback" component={OauthTokenRetrieve} />
          <Route path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/signout" component={SignOut} />
        </Switch>
      </Router>
    );
  }
}

App.propTypes = {
  history: PropTypes.object.isRequired
};

export default withRouter(App);
