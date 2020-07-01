import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CoolCounter from "./containers/CoolCounter";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Omnivores</Text>
      <CoolCounter startingCount={2} />
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
