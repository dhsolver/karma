import PropTypes from 'prop-types';
import React from 'react';
import { Layout, Menu } from 'antd';
import history from '@utils/history';
const { Header } = Layout;

function SecondNav(props) {
  const { children } = props;
  const handleMenuClick = item => {
    const { key: menuKey } = item;
    history.push(`/${menuKey}`);
  };
  const { pathname } = history.location;
  const currentPathname = pathname && pathname.slice(1, pathname.length);
  return (
    <Header className="sub-header">
      <Menu
        mode="horizontal"
        selectedKeys={[currentPathname]}
        onClick={handleMenuClick}
      >
        {children}
      </Menu>
    </Header>
  );
  /* return <Header>{children}</Header>; */
}

SecondNav.propTypes = {
  children: PropTypes.object,
  history: PropTypes.object
};

export default SecondNav;
