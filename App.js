import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  const [getText, setText] = useState("0")

  const buttonClick = (txt) => {
    console.log(txt)
    setText(getText + txt)
  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, paddingBottom: 100 }}>Guess a Number Game</Text>
      <Text style={{ fontSize: 50, paddingBottom: 50 }}>{getText}</Text>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.buttonContainer}>
          <Button title="1" color="green" onPress={buttonClick.bind(this, 1)} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="2" color="red" onPress={buttonClick.bind(this, 2)} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="3" color="blue" onPress={buttonClick.bind(this, 3)} />
        </View>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.buttonContainer}>
          <Button title="4" color="green" onPress={buttonClick.bind(this, 1)} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="5" color="red" onPress={buttonClick.bind(this, 2)} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="6" color="blue" onPress={buttonClick.bind(this, 3)} />
        </View>
      </View>
      <View style={{ flexDirection: 'row' }}>
        <View style={styles.buttonContainer}>
          <Button title="7" color="green" onPress={buttonClick.bind(this, 1)} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="8" color="red" onPress={buttonClick.bind(this, 2)} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="9" color="blue" onPress={buttonClick.bind(this, 3)} />
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: '30%',
    padding: 10
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
