/** @jsx React.DOM */

// loading jQuery
$ = jQuery = require('jquery');


var React           = require('react');
var Router          = require('react-router');
var Route           = Router.Route;
var Routes          = Router.Routes;
var Redirect        = Router.Redirect;
var DefaultRoute    = Router.DefaultRoute;
var NotFoundRoute   = Router.NotFoundRoute;

// loading our files
var App   = require('./app');
var Login = require('./login');
var Chat  = require('./chat');

var routes = 
  (
    <Route name="app" path="/" handler={App}>
      <Route name="login" path="/login" handler={Login.View} />
      <Route name="chat"  path="/chat" handler={Chat.View} />
      <DefaultRoute handler={Login} />
    </Route>
  );

Router.run(routes, function (Handler, state) {
  React.render(<Handler params={state.params} query={state.query}/>, document.body);
});
