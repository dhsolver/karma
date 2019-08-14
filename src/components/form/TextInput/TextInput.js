import React from 'react';
import { Form, Input } from 'antd';
import { getIn } from 'formik';

function TextInput(props) {
  const { field, form, ...rest } = props;

  const error = getIn(form.errors, field.name);
  const touched = getIn(form.touched, field.name);

  return (
    <Form.Item
      hasFeedback={!!(touched && error)}
      validateStatus={error && 'error'}
      help={error}
    >
      <Input {...field} {...rest} />
    </Form.Item>
  );
}
export default TextInput;
