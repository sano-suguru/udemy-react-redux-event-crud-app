import React, { Component } from 'react';
import { connect } from 'react-redux';

import { increment, decrement } from '../actions';

class Counter extends Component {
  render() {
    const props = this.props;
    return (
      <>
        <p>
          value: {props.value}
        </p>
        <button onClick={props.increment}>
          increment
        </button>
        <button onClick={props.decrement}>
          decrement
        </button>
      </>
    );
  }
}

export default connect(
  state => ({ value: state.count.value }),
  { increment, decrement }
)(Counter);
