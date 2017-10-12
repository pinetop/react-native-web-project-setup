import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Text, View, Image, StyleSheet, Button, Dimensions } from 'react-native';

class About extends Component{

  render(){
    return(
      <View>
        <Text>About Us</Text>
      </View>
    )
  }


}

const mapStateToProps = (state, props) => ({
})


export default connect(mapStateToProps)(About);
