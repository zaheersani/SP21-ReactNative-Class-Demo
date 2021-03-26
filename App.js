import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  const [getText, setText] = useState("0")

  const buttonClick = (txt) => {
    // alert(txt)
    setText(getText + txt)
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Header fullname="Zaheer Sani" />
      <Text style={{ fontSize: 50 }}>{getText}</Text>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ width: 50 }}>
          <Button title="1" color="green" onPress={buttonClick.bind(this, 1)} />
        </View>
        <Button title="2" color="red" onPress={buttonClick.bind(this, 2)} />
        <Button title="3" color="yellow" onPress={buttonClick.bind(this, 3)} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const Header = (props) => {
  return (
    <View>
      <Text style={headerStyles.text}>Name: {props.fullname}</Text>
    </View>
  )
}

const headerStyles = StyleSheet.create({
  text: {
    fontSize: 20
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
