import React, {useState} from 'react';
import {StyleSheet, View, Text, Button, Linking} from 'react-native';

const App = () => {
  const [count, setCount] = useState(0);
  const [click, setClick] = useState(0);

  const handleClick = () => {
    setCount(count + 5);
    setClick(click + 1);
  };

  return (
    <View style={styles.body}>
      <Text style={styles.text}>{count}</Text>
      <Button title="Add" onPress={handleClick}></Button>
      <Text style={styles.text}>You clicked {click} times</Text>
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
