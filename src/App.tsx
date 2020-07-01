import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CoolCounter from "./containers/CoolCounter";
import CoolerCounter from "./components/CoolerCounter";

interface AppProps {}
interface AppState {
  counter: number
}

export default class App extends React.Component<AppProps, any> {
  constructor(props: AppProps) {
    super(props);

    this.state = {
      counter: 0
    }
  }
  private updateCounter = (counter: number): void => {
    this.setState({
      counter
    });
  }
  public render() {
    return (
      <View style={styles.container}>
        <Text>Omnivores</Text>
        <CoolerCounter counter={this.state.counter}/>
        <CoolCounter startingCount={2} updateCounter={this.updateCounter} />
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
