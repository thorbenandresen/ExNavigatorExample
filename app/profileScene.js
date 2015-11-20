
'use strict';

var React = require('react-native');
var YourRouter = require('./router.js');
var {
  View,
  Text,
  TouchableOpacity
} = React;


class Component extends React.Component {

  handlePress()
  {
    //this.props.navigator.pop()
    let route = YourRouter.getOtherRoute();
    this.props.navigator.push(route);
  }


  render() {
    return (
      <View style={styles.container}>

        <Text style={{fontWeight: 'bold'}}>
          {this.props.profile.name}
        </Text>

      </View>
    );
  }
}




var styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',


  },
};



module.exports = Component;
