import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

import Header from './components/Header.js';

export default function App() {
  const [getPrice, setPrice] = useState();
  const [getDiscount, setDiscount] = useState();
  const [getSaveValue, setSaveValue] = useState(0);
  const [getFinalPrice, setFinalPrice] = useState(0);

  useEffect(() => {
    if (getPrice != undefined && getDiscount != undefined) {
      console.log(`Price: ${getPrice}, Discount: ${getDiscount}`)
      const save = getDiscount / 100 * getPrice;
      setSaveValue(save);
      const discountedPrice = getPrice - save;
      setFinalPrice(discountedPrice);
      console.log(`You Save: ${save}, Final Price: ${discountedPrice}`)
    }
  })

  const isValidInput = (text) => {
    return !isNaN(text) && text >= 0 && text <= 100
  }

  return (
    <View>
      <Header title="Discount Calculator" />
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Original Price"
          maxLength={15}
          keyboardType={'decimal-pad'}
          onChangeText={(text) => {
            if (isValidInput(text)) {
              setPrice(text);
            }
          }}
          value={getPrice}
        />
        <TextInput
          style={styles.input}
          placeholder="Discount %"
          maxLength={3}
          keyboardType={'decimal-pad'}
          onChangeText={(text) => {
            if (isValidInput(text)) {
              setDiscount(text)
            }
          }}
          value={getDiscount}
        />
        <View style={styles.calculationContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.text}>You Save: </Text>
            <Text style={styles.text}>{getSaveValue}</Text>
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.text}>Final Price: </Text>
            <Text style={styles.text}>{getFinalPrice}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  calculationContainer: {
    paddingTop: 30,
    height: 130,
    width: "80%",
    justifyContent: 'space-between'
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: 'space-between',
    backgroundColor: 'purple',
    padding: 10,
    elevation: 5
  },
  input: {
    borderColor: 'purple',
    borderBottomWidth: 2,
    width: "80%",
    height: 50,
    fontSize: 20
  },
  text: {
    fontSize: 20,
    color: "white"
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    paddingTop: 30,
    paddingLeft: 50,
  },
});
