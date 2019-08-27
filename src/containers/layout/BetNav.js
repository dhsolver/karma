import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Menu } from 'antd';
import { AuthSelectors } from '@redux/AuthRedux';
import history from '@utils/history';

function BetNav(props) {
  const { isLoggedIn } = props;

  const handleMenuClick = item => {
    const { key: menuKey } = item;
    history.push(`/${menuKey}`);
  };

  const renderUserMenus = () => {
    return (
      <Menu onClick={handleMenuClick} mode="horizontal">
        <Menu.Item key="enter-bet">Enter A Bet</Menu.Item>
        <Menu.Item key="single-game">Single Game</Menu.Item>
        <Menu.Item key="prop-bet">Prop Bet</Menu.Item>
        <Menu.Item key="parlay">Parlay</Menu.Item>
        <Menu.Item key="my-bet-history">My Bet History</Menu.Item>
      </Menu>
    );
  };

  return <div className="menu-blocks">{isLoggedIn && renderUserMenus()}</div>;
}

BetNav.propTypes = {
  isLoggedIn: PropTypes.bool
};

const mapStatesToProps = state => ({
  isLoggedIn: AuthSelectors.selectIsLoggedIn(state)
});

export default connect(mapStatesToProps)(BetNav);
