import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native';
// import {useTailwind} from 'tailwind-rn';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>hello from rev match</Text>
      <Button title="Click Me"></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
