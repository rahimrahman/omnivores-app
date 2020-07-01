import React, { PureComponent } from "react";
import { View, Text } from "react-native";

interface CoolerCounterProps {
  counter: number
}
class CoolerCounter extends PureComponent<CoolerCounterProps, any> {
  constructor(props: CoolerCounterProps) {
    super(props);
    console.log("::: in constructor ::: ")
    console.log(`::: counter: ${props.counter} :::`)
    this.state = {
      fontWeight: "normal"
    }
  }

  componentDidUpdate() {
    console.log("::: in componentDidUpdate :::")

    if (this.state.fontWeight !== "bold" && this.props.counter % 10 === 0) {
      this.setState({
        fontWeight: "bold"
      });
    }
    else if (this.state.fontWeight === "bold" && this.props.counter % 10 !== 0) {
      this.setState({
        fontWeight: "normal"
      });
    }
  }

  public render(): JSX.Element {
    return (
      <View><Text style={{ fontWeight: this.state.fontWeight }}>Cooler Container : ** {this.props.counter} **</Text></View>
    )
  }
}

export default CoolerCounter;
