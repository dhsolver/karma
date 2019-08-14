import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import Logo from '@components/Logo';

export const NAV_TYPES = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary'
};

function TopNav(props) {
  const { type, children } = props;

  if (type === NAV_TYPES.SECONDARY) {
    return (
      <div className="page-header">
        <Logo />
      </div>
    );
  }
  return (
    <div className="page-header">
      <Row type="flex" justify="center">
        <Col>{children}</Col>
      </Row>
    </div>
  );
}

TopNav.propTypes = {
  type: PropTypes.oneOf([NAV_TYPES.PRIMARY, NAV_TYPES.SECONDARY])
};

export default TopNav;
