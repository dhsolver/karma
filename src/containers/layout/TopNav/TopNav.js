import React from 'react';
import { Layout } from 'antd';

const { Header } = Layout;

function TopNav(props) {
  const { children } = props;
  return <Header>{children}</Header>;
}

export default TopNav;
