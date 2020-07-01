import React from "react";
import { Button, View, Text } from "react-native";

interface CoolCounterState {
  counter: number;
  quantity: number
}
interface CoolCounterProps {
  startingQuantity?: number;
  onCounterUpdate: (counter: number) => void;
}
export default class CoolCounter extends React.Component<CoolCounterProps, CoolCounterState> {
  constructor(props: CoolCounterProps) {
    super(props);

    this.state = {
      counter: 0,
      quantity: props.startingQuantity || 0
    }
  }
  private onButtonPress = (type: string) => {
    let quantity = this.state.quantity;
    if (type === "+") {
      quantity = this.state.quantity + 1
    } else if (type === "-") {
      quantity = this.state.quantity - 1
    }
    this.setState({
      quantity
    })
  }

  private onItemAddedPress = () => {
    const counter = this.state.quantity + this.state.counter;
    this.setState({
      counter
    })
    this.props.onCounterUpdate(counter);
  }

  public render() {
    return (
      <>
        <View><Text>Items in Basket: {this.state.counter}</Text></View>
        <Button title={"+"} onPress={() => this.onButtonPress("+")}/>
        <View><Text>Quantity: {this.state.quantity}</Text></View>
        <Button title={"-"} onPress={() => this.onButtonPress("-")}/>
        <Button title={"Add Item Into Basket"} onPress={() => this.onItemAddedPress()} />
      </>
    )
  }
}
