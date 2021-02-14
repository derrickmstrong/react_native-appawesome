/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Linking
} from 'react-native';

const App = () => {
  return (
    <View style={styles.body}>
    <Text style={styles.text}>Hi, I'm Derrick!</Text>
    <Button title='Learn More' onPress={()=>{Linking.openURL('http://www.derrickstrong.com')}}></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: '#006fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  text: {
    color: 'orange',
    fontSize: 25,
    margin: 10,
  }
});

export default App;
