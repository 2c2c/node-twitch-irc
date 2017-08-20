import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import LoginPage from './containers/LoginPage';
import ChatPage from './containers/ChatPage';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={LoginPage} />
    <Route path="/chatpage/:username/:oauth/:channel" component={ChatPage} />
  </Route>
);
