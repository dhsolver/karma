import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Icon } from 'antd';
import { getIn } from 'formik';

function TextInput(props) {
  const { field, form, ...restProps } = props;

  const error = getIn(form.errors, field.name);
  const touched = getIn(form.touched, field.name);

  const hasError = error !== undefined && touched;
  const isValid = !error && touched;

  const { name, onChange, onBlur, value } = field;
  const { label, addontype } = restProps;

  return (
    <Form.Item
      validateStatus={hasError ? 'error' : undefined}
      hasFeedback={isValid}
      help={(hasError && <li>{error}</li>) || (isValid && '')}
      label={label}
      colon={false}
    >
      <Input
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        addonBefore={addontype ? <Icon type={addontype} /> : null}
        {...restProps}
      />
    </Form.Item>
  );
}

TextInput.propTypes = {
  field: PropTypes.object,
  form: PropTypes.object
};

export default TextInput;
