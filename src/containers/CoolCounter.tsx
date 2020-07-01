import React from "react";
import { Button, Text, View } from "react-native";

interface CoolCounterProps {
  startingCount: number;
}
interface CoolCounterState {
  counter: number;
  quantity: number;
  prevCount?: number;
}

class CoolCounter extends React.Component<CoolCounterProps, CoolCounterState> {
  constructor(props: CoolCounterProps) {
    super(props);

    this.state = {
      counter: 0,
      quantity: 0
    };
    console.log("::: in constructor :::");
  }

  public static getDerivedStateFromProps(props: CoolCounterProps, state: CoolCounterState) {
    console.log("::: in getDerivedStateFromProps :::");
    if (props.startingCount !== state.prevCount) {
      return {
        counter: props.startingCount,
        prevCount: props.startingCount
      }
    }
    return null;
  }

  public componentDidUpdate(prevProps: CoolCounterProps, prevState: CoolCounterState) {
    console.log("::: in componentDidUpdate :::");
  }


  private onButtonPress = (type: string) => {
    let quantity = 0;
    if (type === "+") {
      quantity = this.state.quantity + 1;
    } else {
      quantity = this.state.quantity - 1;
    }
    this.setState({
      quantity
    })
  }

  private onAddButtonPress = () => {
    this.setState({
      counter: this.state.counter + this.state.quantity
    });
  }


  public render() {
    return (
      <View>
        <Text>Cool Counter: {this.state.counter}</Text>

        <Button title={"+"} onPress={() => this.onButtonPress("+")}/>
        <Text>Quantity: {this.state.quantity}</Text>
        <Button title={"-"} onPress={() => this.onButtonPress("-")}/>
        <Button title={"Add"} onPress={() => this.onAddButtonPress()}/>
      </View>
    )
  }
}

export default CoolCounter;
