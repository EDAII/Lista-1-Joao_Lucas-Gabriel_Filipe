import React from "react";
import { BarChart, Grid } from "react-native-svg-charts";

class BarGraph extends React.PureComponent {

  state = {
    data: [0, 0, 0],
    svg: 'rgb(134, 65, 244)'
  }

  componentWillReceiveProps() {
    this.setState({ data: this.props.data(), svg: this.props.svg() });
    console.log("Chamou "+this.props.data())
  }

  render() {
    console.log(this.state.data , this.state.svg);
    const fill = 'rgb(134, 65, 244)'
    return (
      <BarChart
        style={{ height: 200 }}
        data={this.state.data}
        svg={{fill}}
        contentInset={{ top: 30, bottom: 30 }}
      >
        <Grid />
      </BarChart>
    );
  }
}

export default BarGraph;
