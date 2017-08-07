// @flow
import React from 'react';
import ReactDom from 'react-dom';

import { createBrowserHistory } from 'history';
import { Router } from 'react-router';
import {
  Switch,
  Route,
} from 'react-router-dom';

chrome.runtime.getBackgroundPage((bgWindow) =>
  bgWindow.Weer.ErrorCatchers.installListenersOn({ hostWindow: window, nameForDebug: 'PUP' }, () => {

    const history = createBrowserHistory();

    const render = (Component, props = {}) =>
      ReactDom.render(
        (
          <Router history={history}>
            <Component {...props} />
          </Router>
        ),
        document.getElementById('root'),
      );


    class App extends React.Component {

      constructor(props) {

        super(props);
        this.state = {
          ifLoading: false,
          ifError: false,
        };

      }

      state: {
        ifLoading: boolean,
        ifError: boolean,
      };

      renderForm = () => (
        <div>
          <form>
            <input />
            <input type="submit" />
          </form>
        </div>
      );

      renderResults = () => (
        <div>TODO:</div>
      );

      renderError = () => (
        <div>
          <h4 style={{ color: 'red' }}>Error!</h4>
          <div>
            Try to figure out what happened from the message below:
          </div>
          <pre style={{ color: 'darkred' }}>{ new Error('TODO') }</pre>
          <div>
            Maybe your connection is down or our server is overloaded.
          </div>
        </div>
      );

      render() {

        return (
          <Switch>
            <Route
              exact
              path="/results"
              render={this.renderResults}
            />
            <Route
              exact
              path="/error"
              render={this.renderError}
            />
            <Route
              exact
              path=""
              render={this.renderForm}
            />
          </Switch>
        );

      }

    }

    render(App);

  }),
);
