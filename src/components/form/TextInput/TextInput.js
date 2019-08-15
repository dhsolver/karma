import React from 'react';
import { Form, Input } from 'antd';
import { getIn } from 'formik';

function TextInput(props) {
  const { field, form, ...restProps } = props;

  const error = getIn(form.errors, field.name);
  const touched = getIn(form.touched, field.name);

  const hasError = error !== undefined && touched;
  const isValid = !error && touched;

  const { name, onChange, onBlur, value } = field;
  return (
    <Form.Item
      validateStatus={hasError ? 'error' : undefined}
      hasFeedback={isValid}
      help={(hasError && <li>{error}</li>) || (isValid && '')}
    >
      <Input
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        {...restProps}
      />
    </Form.Item>
  );
}
export default TextInput;
