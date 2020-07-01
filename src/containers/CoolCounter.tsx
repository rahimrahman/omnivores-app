import React from "react";
import { Button, Text, View } from "react-native";
import { connect } from "react-redux";
import { updateCounter } from "../redux";

interface CoolCounterProps {
  startingCount: number;
  updateCounter: (counter: number) => void;
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
    // console.log("::: in constructor :::");
  }

  public static getDerivedStateFromProps(props: CoolCounterProps, state: CoolCounterState) {
    // console.log("::: in getDerivedStateFromProps :::");
    if (props.startingCount !== state.prevCount) {
      return {
        counter: props.startingCount,
        prevCount: props.startingCount
      }
    }
    return null;
  }

  public componentDidUpdate(prevProps: CoolCounterProps, prevState: CoolCounterState) {
    // console.log("::: in componentDidUpdate :::");
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
    const counter = this.state.counter + this.state.quantity;
    // setting component state
    this.setState({
      counter
    });
    // updating parent state counter
    this.props.updateCounter(counter);
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

export default connect(undefined, { updateCounter })(CoolCounter);
