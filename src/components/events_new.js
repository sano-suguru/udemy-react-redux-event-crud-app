import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';

import { postEvent } from '../actions';

const validate = values => {
  const errors = {};
  if (!values.title) {
    errors.title = 'Enter a title, please.'
  }
  if (!values.body) {
    errors.body = 'Enter a body, please.'
  }
  return errors;
}

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error }
}) => (
  <div>
    <input {...input} placeholder={label} type={type} />
    {touched && error && <span>{error}</span>}
  </div>
);

const onSubmit = async values => {
  await postEvent(values);
}

const NewEventForm = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Field label="Title" name="title" type="text" component={renderField} />
      </div>
      <div>
        <Field label="Body" name="body" type="text" component={renderField} />
      </div>
      <div>
        <input type="submit" value="Submit" disabled={false} />
        <Link to="/">Cancel</Link>
      </div>
    </form>
  );
}

export default connect(null, { postEvent })(
  reduxForm({
    validate,
    form: 'NewEventForm'
  })(NewEventForm)
);
