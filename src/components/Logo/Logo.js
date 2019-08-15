import React from 'react';
import { Typography } from 'antd';
import history from '@utils/history';
import './Logo.less';

const { Text } = Typography;

export default function Logo() {
  return (
    <div
      className="logo"
      onClick={() => {
        history.push('/');
      }}
    >
      <Text>BET KARMA</Text>
    </div>
  );
}
