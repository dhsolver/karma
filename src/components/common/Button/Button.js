import React from 'react';
import { Button as Btn } from 'antd';
import classNames from 'classnames';
import SvgIcon from '@components/SvgIcon';
import './Button.less';
const createType = (type, outline) => {
  if (outline && type) {
    return `ant-btn-outline-${type}`;
  } else if (outline) {
    return 'ant-btn-outline-primary';
  } else if (type) {
    return `ant-btn-${type}`;
  } else {
    return 'ant-btn-primary';
  }
};
const Button = ({
  size,
  type,
  outline,
  variant,
  children,
  disabled,
  icon,
  theme,
  ...restProps
}) => {
  const btnTypeAndOutline = createType(type, outline);

  return (
    <Btn
      className={classNames({
        btn: true,
        [`ant-btn-${size || 'normal'}`]: true,
        [`ant-btn-${variant}`]: variant,
        [btnTypeAndOutline]: true
      })}
      disabled={disabled}
      {...restProps}
    >
      {icon && <SvgIcon name={icon} theme={theme} />}
      {children}
    </Btn>
  );
};

export default Button;
