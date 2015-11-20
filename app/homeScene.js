'use strict';

var React = require('react-native');
var {
  View,
  Text
} = React;

var Button = require('react-native-button');
var YourRouter = require('./router.js');

class HomeScene extends React.Component {
  render() {
    return (
      <View style={{ justifyContent: 'center' }}>
        <Button onPress={() => {
          // Get a route object from the router
          let profile = {
            name: 'Jane',
            photoUrl: 'http://api.randomuser.me/portraits/thumb/women/39.jpg',
          };
          let route = YourRouter.getProfileRoute(profile);

          // `navigator` is passed into your scene component when you have
          // implemented getSceneClass in your route
          this.props.navigator.push(route);
        }}>
          Navigate to a profile
        </Button>
      </View>
    );
  }
}


module.exports = HomeScene;
