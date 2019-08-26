import React from 'react';
import { Form, Select } from 'antd';
import { getIn } from 'formik';

const { Option } = Select;

function SelectMenu(props) {
  const { field, form, ...restProps } = props;

  const error = getIn(form.errors, field.name);
  const touched = getIn(form.touched, field.name);

  const hasError = error !== undefined && touched;
  const isValid = !error && touched;

  const { name, onChange, value, onBlur } = field;
  const { options, label, handleChange } = restProps;

  const children = [];
  // const options_test = ["Money Line", "Spread", "Over/Under"];
  options.forEach(option => {
    children.push(<Option key={option.id} value={option.id}>{option.name}</Option>);
  });
  console.log('Select Props: ',props);

  const handleChangeLocal = (value) => {
    console.log("inside handleChangeLocal :", value);
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
        // defaultValue={value ? { key: value } : undefined}
        // onChange={onChange}
        onChange={handleChangeLocal}
        onBlur={()=> form.setFieldTouched(name, true)}
        {...restProps}
      >
        {children}
      </Select>
    </Form.Item>
  );
}
export default SelectMenu;
