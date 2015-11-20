/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');

import ExNavigator from '@exponent/react-native-navigator';

var Button = require('react-native-button');
var YourRouter = require('./router.js');




var {
  AppRegistry,
  View,
  Text
} = React;

class Component extends React.Component {
  render() {
    return (
      <ExNavigator
        initialRoute={YourRouter.getHomeRoute()}
        style={{ flex: 1 }}
        sceneStyle={{ paddingTop: 64 }}
      />
    );
  }
}





module.exports = Component
