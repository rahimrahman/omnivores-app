import React, { Component } from "react";
import { View, Text } from "react-native";

interface CoolerCounterProps {
  counter: number
}
class CoolerCounter extends Component<CoolerCounterProps, any> {

  public render(): JSX.Element {
    return (
      <View><Text>Cooler Container : ** {this.props.counter} **</Text></View>
    )
  }
}

export default CoolerCounter;
