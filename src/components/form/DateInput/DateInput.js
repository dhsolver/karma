import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Form, DatePicker } from 'antd';
import { getIn } from 'formik';

function DateInput(props) {
  const { field, form, ...restProps } = props;

  const error = getIn(form.errors, field.name);
  const touched = getIn(form.touched, field.name);

  const hasError = error !== undefined && touched;
  const isValid = !error && touched;

  const { name, value } = field;
  const { label } = restProps;

  const dateFormat = 'DD/MM/YYYY';

  const handleChangeLocal = changedDate => {
    if (changedDate) {
      form.setFieldValue(name, moment(changedDate, dateFormat));
    } else {
      form.setFieldValue(name, null);
    }
  };

  return (
    <Form.Item
      label={label}
      validateStatus={hasError ? 'error' : undefined}
      hasFeedback={isValid ? true : false}
      help={(hasError && <li>{error}</li>) || (isValid && '')}
      colon={false}
    >
      <DatePicker
        value={value ? moment(value, dateFormat) : null}
        format={dateFormat}
        onChange={handleChangeLocal}
      />
    </Form.Item>
  );
}

DateInput.propTypes = {
  field: PropTypes.object,
  form: PropTypes.object
};

export default DateInput;
