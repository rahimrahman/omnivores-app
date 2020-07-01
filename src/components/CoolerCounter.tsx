import React from "react";
import { View, Text } from "react-native"

interface CoolerCounterProps {
  counter: number;
}
export default class CoolerCounter extends React.PureComponent<CoolerCounterProps, any> {

  public render() {
    return (
      <View style={{ backgroundColor: "red" }}><Text>Cooler Counter: {this.props.counter}</Text></View>
    )
  }
}
