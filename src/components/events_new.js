import React, { Component} from 'react';
import { connect } from 'react-redux';

class EventsNew extends Component {
  render() {
    return (
      <div>Working!</div>
    );
  }
}

export default connect(
  state => ({ events: state.events }),
  {  }
)(EventsNew);