import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CoolCounter from "./containers/CoolCounter";
import CoolerCounter from "./components/CoolerCounter";

interface AppState {
  counter: number;
}
export default class App extends React.Component<any, AppState> {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    }
  }
  private updateCounter = (counter: number): void => {
    this.setState({
      counter
    })
    console.log('updateCounter', counter);
  }

  public render() {
    return (
      <View style={styles.container}>
        <CoolerCounter counter={this.state.counter}/>
        <CoolCounter onCounterUpdate={this.updateCounter}/>
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
