import React, { Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';

import { readEvents } from '../actions';

class EventsIndex extends Component {
  componentDidMount() {
    this.props.readEvents();
  }
  renderEvents() {
    const { events } = this.props;
    return _.map(events, event => (
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>
          <Link to={`/events/${event.id}`}>
            {event.title}
          </Link>
        </td>
        <td>{event.body}</td>
      </tr>
    ));
  }

  render() {
    return (
      <>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {this.renderEvents()}
          </tbody>
        </table>

        <Link to="/events/new">
          New Event
        </Link>
      </>
    );
  }
}

export default connect(
  state => ({ events: state.events }),
  { readEvents }
)(EventsIndex);