import React from 'react';
import PropTypes from 'prop-types';
import { Form, Select } from 'antd';
import { getIn } from 'formik';

const { Option } = Select;

function SelectMenu(props) {
  const { field, form, ...restProps } = props;

  const error = getIn(form.errors, field.name);
  const touched = getIn(form.touched, field.name);

  const hasError = error !== undefined && touched;
  const isValid = !error && touched;

  const { name, value } = field;
  const { options, label, handleChange } = restProps;

  const children = [];
  options.forEach(option => {
    children.push(
      <Option key={option.id} value={option.name}>
        {option.name}
      </Option>
    );
  });

  const handleChangeLocal = value => {
    form.setFieldValue(name, value);
    if (handleChange) {
      handleChange(value);
    }
  };

  return (
    <Form.Item
      label={label}
      validateStatus={hasError ? 'error' : undefined}
      hasFeedback={isValid}
      help={(hasError && <li>{error}</li>) || (isValid && '')}
      colon={false}
    >
      <Select
        name={name}
        style={{ width: '100%' }}
        placeholder="Please select"
        value={value}
        // defaultValue={value ? { key: value } : undefined}
        // onChange={onChange}
        onChange={handleChangeLocal}
        onBlur={() => form.setFieldTouched(name, true)}
        {...restProps}
      >
        {children}
      </Select>
    </Form.Item>
  );
}

SelectMenu.propTypes = {
  field: PropTypes.object,
  form: PropTypes.object
};

export default SelectMenu;
