import * as React from 'react';
import { StyleSheet } from 'react-native';


import { Text, View } from '../components/Themed';
import { TextInput } from 'react-native-gesture-handler';

export default function TabOneScreen() {


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#000',
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
