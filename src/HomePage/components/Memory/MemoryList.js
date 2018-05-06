import React from 'react';
import _ from 'lodash';

import {MemoryItem} from "./MemoryItem";


class MemoryList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      NUMBER_OF_COLS: 3
    };

    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  renderItems(memory) {
    return _.map(memory, (memory, index) =>
        <MemoryItem
            key={index} {...memory}
            deleteFunc={this.props.deleteFunc}
        />
    )
  }

  renderColumns(cols) {

    let columns = [];
    let item_arr = [];

    /* Initialize the Empty Array Based on Number of Cols */
    for (let i = 0; i < cols; i++) {
      item_arr.push([])
    }

    /* Fill in Array Based on Number of Cols */
    for (let i = 0; i < this.props.memory.length; i++) {
      item_arr[i % cols].push(this.props.memory[i]);
    }

    /* Render the Columns */
    for (let i = 0; i < cols; i++) {
      columns.push(
          <div key={i} className={'column'}>
            {this.renderItems(item_arr[i])}
          </div>
      )
    }
    return columns;
  }

  handleResize() {
    let width = window.innerWidth;

    if (width <= 800) {
      this.setState({
        NUMBER_OF_COLS: 1
      })
    } else if (width <= 1400) {
      this.setState({
        NUMBER_OF_COLS: 2
      })
    } else {
      this.setState({
        NUMBER_OF_COLS: 3
      })
    }
  }

  render() {
    let {NUMBER_OF_COLS} = this.state;
    return (
        <div className={"image-row"}>
          {this.renderColumns(NUMBER_OF_COLS)}
        </div>
    )
  }

}

export {MemoryList}