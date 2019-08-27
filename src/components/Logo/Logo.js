import React from 'react';
import cn from 'classnames';
import { Typography } from 'antd';
import history from '@utils/history';
import './Logo.less';

const { Text } = Typography;

export default function Logo(props) {
  const { className } = props;
  return (
    <div
      className={cn('logo', className)}
      onClick={() => {
        history.push('/');
      }}
    >
      <Text>
        <span>BET</span>
        &nbsp;KARMA
      </Text>
    </div>
  );
}
