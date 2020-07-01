import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { connect } from "react-redux";
import CoolCounter from "./containers/CoolCounter";
import CoolerCounter from "./components/CoolerCounter";
import { OmniAppState } from "./redux/";

interface AppProps {
  counter: number
}

class App extends React.Component<AppProps, any> {
  constructor(props: AppProps) {
    super(props);
  }
  public render() {
    return (
      <View style={styles.container}>
        <Text>Omnivores</Text>
        <CoolerCounter counter={this.props.counter}/>
        <CoolCounter startingCount={2} />
        <StatusBar style="auto" />
      </View>
    );
  }
}

const mapStateToProps = (state: OmniAppState) => {
  return {
    counter: state.counter
  }
}

export default connect(mapStateToProps, {})(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
