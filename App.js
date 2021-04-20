import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const [getPrice, setPrice] = useState();
  const [getDiscount, setDiscount] = useState();

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Original Price"
        keyboardType={'decimal-pad'}
        onChangeText={(text) => setPrice(text)}
        value={getPrice}
      />
      <TextInput
        style={styles.input}
        placeholder="Discount %"
        maxLength={3}
        keyboardType={'decimal-pad'}
        onChangeText={(text) => setDiscount(text)}
        value={getDiscount}
      />
      <View style={styles.calculationContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>You Save: </Text>
          <Text style={styles.text}>{0}</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>Final Price: </Text>
          <Text style={styles.text}>{0}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  calculationContainer: {
    paddingTop: 30, height: 100, width: "70%", justifyContent: 'space-between'
  },
  textContainer: { flexDirection: "row", justifyContent: 'space-between' },
  input: {
    borderColor: 'grey',
    borderBottomWidth: 2,
    width: "80%",
    height: 50,
    fontSize: 20
  },
  text: {
    fontSize: 20
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    paddingTop: 50,
    paddingLeft: 50,
  },
});
