import React, { Component} from 'react';
import { connect } from 'react-redux';

import { readEvents } from '../actions';

class EventsIndex extends Component {
  componentDidMount() {
    this.props.readEvents();
  }
  render() {
    return (
      <h1>
        Hello, React!
      </h1>
    );
  }
}

export default connect(
  state => ({}),
  { readEvents }
)(EventsIndex);