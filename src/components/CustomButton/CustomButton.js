import React from 'react';
import { Button } from 'antd';
import './CustomButton.less';
const CustomButton = ({ type, content, style }) => {
  return (
    <Button
      className="button"
      type={type === 'cta' && 'danger'}
      style={style && style}
    >
      {content}
    </Button>
  );
};

export default CustomButton;
