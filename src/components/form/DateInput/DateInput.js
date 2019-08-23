import React from 'react';
import moment from 'moment';
import { Form, DatePicker } from 'antd';
import { getIn } from 'formik';

function DateInput(props) {
  const { field, form, ...restProps } = props;

  const error = getIn(form.errors, field.name);
  const touched = getIn(form.touched, field.name);

  const hasError = error !== undefined && touched;
  const isValid = !error && touched;

  const { name, onChange, value, onBlur } = field;
  const { label } = restProps;

  const dateFormat = 'DD/MM/YYYY';

  return (
    <Form.Item
      label={label}
      validateStatus={hasError ? 'error' : undefined}
      hasFeedback={isValid}
      help={(hasError && <li>{error}</li>) || (isValid && '')}
      colon={false}
    >
      <DatePicker
        defaultValue={moment(value, dateFormat)}
        format={dateFormat}
      />
    </Form.Item>
  );
}
export default DateInput;
