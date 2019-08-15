import React from 'react';
import PropTypes from 'prop-types';
import Logo from '@components/Logo';

export const NAV_TYPES = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary'
};

function TopNav(props) {
  const { type } = props;

  const renderPrimaryNav = () => {
    return (
      <div className="page-header">
        <Logo />
      </div>
    );
  };

  const renderSecondaryNav = () => {
    return (
      <div className="page-header">
        <Logo />
      </div>
    );
  };

  if (type === NAV_TYPES.SECONDARY) {
    return renderSecondaryNav();
  }

  return renderPrimaryNav();
}

TopNav.propTypes = {
  type: PropTypes.oneOf([NAV_TYPES.PRIMARY, NAV_TYPES.SECONDARY])
};

export default TopNav;
