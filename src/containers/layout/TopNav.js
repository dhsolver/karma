import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Menu, Icon } from 'antd';
import Logo from '@components/Logo';
import { AuthSelectors } from '@redux/AuthRedux';
import history from '@utils/history';
import windowSize from 'react-window-size';
import { Button } from '@components/Button';

export const NAV_TYPES = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary'
};

class RenderMobileUserMenus extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false
    };
  }
  toggleExpandedMenu = () => {
    this.setState({
      isExpanded: !this.state.isExpanded
    });
  };
  render() {
    return (
      <React.Fragment>
        <ul>
          {!this.state.isExpanded && (
            <li style={{ display: 'inline-block' }}>
              <Button type="primary" variant="cta" size="very-small">
                Free trial
              </Button>
            </li>
          )}
          <li
            onClick={this.toggleExpandedMenu}
            style={{ cursor: 'pointer', display: 'inline-block' }}
          >
            {this.state.isExpanded ? (
              <Icon type="close" />
            ) : (
              <Icon type="menu" />
            )}
          </li>
        </ul>
        {this.state.isExpanded && (
          <div className="mobile-menu">
            <ul>
              <li>MLB</li>
              <li>NBA</li>
              <li>NFL</li>
            </ul>
            <ul>
              <li>Bet Calculator</li>
              <li>My Bet Tracker</li>
              <li>My Account</li>
              <li>Logout</li>
            </ul>
          </div>
        )}
      </React.Fragment>
    );
  }
}

function TopNav(props) {
  const { type, isLoggedIn, windowWidth } = props;

  const handleMenuClick = item => {
    const { key: menuKey } = item;
    history.push(`/${menuKey}`);
  };

  const renderAnnonMenus = () => {
    return (
      <Menu onClick={handleMenuClick} mode="horizontal">
        <Menu.Item key="mlb" style={{ fontWeight: '700' }}>
          MLB
        </Menu.Item>
        <Menu.Item key="nba" style={{ fontWeight: '700' }}>
          NBA
        </Menu.Item>
        <Menu.Item key="nfl" style={{ fontWeight: '700' }}>
          NFL
        </Menu.Item>
      </Menu>
    );
  };

  const renderUserMenus = () => {
    if (windowWidth > 900) {
      return (
        <Menu onClick={handleMenuClick} mode="horizontal">
          <Menu.Item style={{ fontSize: '12px' }} key="where-to-bet">
            Where to Bet
          </Menu.Item>
          <Menu.Item style={{ fontSize: '12px' }} key="bet-calculator">
            Bet Calculator
          </Menu.Item>
          <Menu.Item style={{ fontSize: '12px' }} key="my-bet-tracker">
            My Bet Tracker
          </Menu.Item>
          <Menu.Item key="account">
            <Icon type="user"></Icon>
          </Menu.Item>
        </Menu>
      );
    } else {
      return <RenderMobileUserMenus />;
    }
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
      <div className="menu-blocks">{renderUserMenus()}</div>
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

export default connect(mapStatesToProps)(windowSize(TopNav));
