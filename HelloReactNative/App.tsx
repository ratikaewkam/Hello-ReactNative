import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

const App = () => {
  const [point, setPoint] = useState(0);

  let increasePoint = () => {
    setPoint(point + 1);
  }

  let decreasePoint = () => {
    setPoint(point - 1);
  }

  let resetPoint = () => {
    setPoint(0);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.toptitle}>React Native Counter App</Text>
      <Text style={styles.num}>Point: {point}</Text>
      <View style={styles.row}>
        <Pressable style={styles.btnBlue} onPress={increasePoint}>
          <Text style={{color: 'white', fontSize: 18}}>+</Text>
        </Pressable>
        <Pressable style={styles.btnRed} onPress={decreasePoint}>
          <Text style={{color: 'white', fontSize: 18}}>-</Text>
        </Pressable>
        <Pressable style={styles.btnGreen} onPress={resetPoint}>
          <Text style={{color: 'white', fontSize: 18}}>reset</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  toptitle: {
    fontSize: 18,
    paddingBottom: 10
  },
  num: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingBottom: 10
  },
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20
  },
  btnBlue: {
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    marginRight: 10
  },
  btnRed: {
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    marginRight: 10
  },
  btnGreen: {
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
  }
});

export default App;