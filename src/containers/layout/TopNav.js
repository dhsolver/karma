import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Menu } from 'antd';
import Logo from '@components/Logo';
import { AuthSelectors } from '@redux/AuthRedux';
import history from '@utils/history';

export const NAV_TYPES = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary'
};

function TopNav(props) {
  const { type, isLoggedIn } = props;

  const handleMenuClick = item => {
    const { key: menuKey } = item;
    history.push(`/${menuKey}`);
  };

  const renderAnnonMenus = () => {
    return (
      <Menu onClick={handleMenuClick} mode="horizontal">
        <Menu.Item key="mlb">NLB</Menu.Item>
        <Menu.Item key="nba">NBA</Menu.Item>
        <Menu.Item key="nfl">NFL</Menu.Item>
      </Menu>
    );
  };

  const renderUserMenus = () => {
    return (
      <Menu onClick={handleMenuClick} mode="horizontal">
        <Menu.Item key="where-to-bet">Where to Bet</Menu.Item>
        <Menu.Item key="bet-calculator">Bet Calculator</Menu.Item>
        <Menu.Item key="my-bet-tracker">My Bet Tracker</Menu.Item>
      </Menu>
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

  return (
    <div className="page-header primary">
      <div className="menu-blocks">
        <Logo />
        {renderAnnonMenus()}
      </div>
      <div className="menu-blocks">{isLoggedIn && renderUserMenus()}</div>
    </div>
  );
}

TopNav.propTypes = {
  type: PropTypes.oneOf([NAV_TYPES.PRIMARY, NAV_TYPES.SECONDARY]),
  isLoggedIn: PropTypes.bool
};

const mapStatesToProps = state => ({
  isLoggedIn: AuthSelectors.selectIsLoggedIn(state)
});

export default connect(mapStatesToProps)(TopNav);
