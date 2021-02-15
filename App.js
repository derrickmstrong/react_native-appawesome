import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Linking
} from 'react-native';

const App = () => {
  const [name, setName] = useState('Derrick');
  const [session, setSession] = useState({number: 7, title: 'state'});
  const [current, setCurrent] = useState(true);
  
  const handleName = () => {
    setName('D.Strong')
  }

  const handleSession = () => {
    setSession({number: 8, title: 'styles'})
  }

  const handleCurrent = () => {
    setCurrent(!current)
  }

  return (
    <View style={styles.body}>
      <Text style={styles.text}>Hi, I'm {name}!</Text>
      {/* <Button title='Learn More' onPress={()=>{Linking.openURL('http://www.derrickstrong.com')}}></Button> */}
      <Button title="Update Name" onPress={handleName}></Button>
      <Text style={styles.text}>
        Session: {session.number} - About: {session.title}
      </Text>
      <Button title="Update Session" onPress={handleSession}></Button>
      <Text style={styles.text}>
        Status: {current ? 'Current Session' : 'Next Session'}
      </Text>
      <Button title="Update Current" onPress={handleCurrent}></Button>
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
  },
});

export default App;
