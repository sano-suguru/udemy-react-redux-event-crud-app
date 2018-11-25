import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


import { postEvent } from '../actions';

class EventsNew extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  async onSubmit(values) {
    await this.props.postEvent(values);
    this.props.history.push('/');
  }

  renderField(field) {
    const {
      input,
      label,
      type,
      meta: { touched, error }
    } = field;
    return (
      <TextField
        label={label}
        type={type}
        error={!!(touched && error)}
        helperText={touched && error}
        {...input}
        fullWidth={true}
      />
    );
  }

  render() {
    const { handleSubmit, pristine, submitting, invalid } = this.props;
    return (
      <>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <div>
            <Field label="Title" name="title" type="text" component={this.renderField} />
          </div>
          <div>
            <Field label="Body" name="body" type="text" component={this.renderField} />
          </div>
          <Button
            variant="contained"
            type="submit"
            color="primary"
            style={{
              margin: 12
            }}
            disabled={pristine || submitting || invalid}
          >
            Send
          </Button>
          <Button
            variant="contained"
            component={Link} to="/"
            style={{
              margin: 12
            }}
          >
            Cancel
          </Button>
        </form>
      </>
    );
  }
}

function validate(values) {
  const errors = {};
  if (!values.title) {
    errors.title = 'Enter a title, please.'
  }
  if (!values.body) {
    errors.body = 'Enter a body, please.'
  }
  return errors;
}

export default connect(null, { postEvent} )(
  reduxForm({
    validate ,
    form: 'EventsNewForm'
  })(EventsNew)
)