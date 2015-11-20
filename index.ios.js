/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
//var Index = require('./app/Modal.ios');
var Index = require('./app/root');

var {
  AppRegistry,
  Component,
  View
} = React;


class ExNavigatorExample extends Component {

  render() {

      return (
        <Index/>
      )
  }
}


AppRegistry.registerComponent('ExNavigatorExample', () => ExNavigatorExample);
