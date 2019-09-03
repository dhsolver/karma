import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Menu, Icon } from 'antd';
import Logo from '@components/Logo';
import AuthActions, { AuthSelectors } from '@redux/AuthRedux';
import history from '@utils/history';
import windowSize from 'react-window-size';
import { Button } from '@components/common/Button';

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
  handleMenuClick = event => {
    const { key: menuKey } = event.target.dataset;
    if (menuKey === 'logout') {
      this.props.onLogout();
    }
    history.push(`/${menuKey}`);
  };
  render() {
    const { isLoggedIn } = this.props;
    return (
      <React.Fragment>
        <ul>
          {!this.state.isExpanded && (
            <li style={{ display: 'inline-block', cursor: 'pointer' }}>
              <Button
                type="primary"
                variant="cta"
                size="very-small"
                onClick={() => history.push('/sales')}
              >
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
              <li onClick={this.handleMenuClick} key="mlb" data-key="mlb">
                MLB
              </li>
              <li onClick={this.handleMenuClick} key="nba" data-key="nba">
                NBA
              </li>
              <li onClick={this.handleMenuClick} key="nfl" data-key="nfl">
                NFL
              </li>
            </ul>
            {isLoggedIn ? (
              <ul>
                <li
                  key="bet-calculator"
                  data-key="bet-calculator"
                  onClick={this.handleMenuClick}
                >
                  Bet Calculator
                </li>
                <li
                  key="my-bet-tracker"
                  data-key="my-bet-tracker"
                  onClick={this.handleMenuClick}
                >
                  My Bet Tracker
                </li>
                <li
                  key="account"
                  data-key="account"
                  onClick={this.handleMenuClick}
                >
                  My Account
                </li>
                <li
                  key="logout"
                  data-key="logout"
                  onClick={this.handleMenuClick}
                >
                  Logout
                </li>
              </ul>
            ) : (
              <ul>
                <li key="login" data-key="login" onClick={this.handleMenuClick}>
                  Log In
                </li>
                <li
                  key="sign-up"
                  data-key="sign-up"
                  onClick={this.handleMenuClick}
                >
                  Sign Up
                </li>
              </ul>
            )}
          </div>
        )}
      </React.Fragment>
    );
  }
}

function TopNav(props) {
  const { type, isLoggedIn, windowWidth, onLogout } = props;

  const handleMenuClick = item => {
    const { key: menuKey } = item;
    if (menuKey === 'logout') {
      onLogout();
    }
    history.push(`/${menuKey}`);
  };

  const renderAnnonMenus = () => {
    const { pathname } = history.location;
    const currentPathname = pathname && pathname.slice(1, pathname.length);
    return (
      <Menu
        onClick={handleMenuClick}
        mode="horizontal"
        selectedKeys={[currentPathname]}
      >
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
    const { pathname } = history.location;
    const currentPathname = pathname && pathname.slice(1, pathname.length);
    if (windowWidth > 900) {
      if (isLoggedIn) {
        return (
          <Menu
            onClick={handleMenuClick}
            mode="horizontal"
            selectedKeys={[currentPathname]}
          >
            <Menu.Item style={{ fontSize: '12px' }} key="where-to-bet">
              Where to Bet
            </Menu.Item>
            <Menu.Item style={{ fontSize: '12px' }} key="bet-calculator">
              Bet Calculator
            </Menu.Item>
            <Menu.Item style={{ fontSize: '12px' }} key="my-bet-tracker">
              My Bet Tracker
            </Menu.Item>
            <Menu.Item style={{ fontSize: '12px' }} key="logout">
              Logout
            </Menu.Item>
            <Menu.Item key="account" id="account">
              <Icon type="user"></Icon>
            </Menu.Item>
          </Menu>
        );
      } else {
        return (
          <Menu
            onClick={handleMenuClick}
            mode="horizontal"
            selectedKeys={[currentPathname]}
          >
            <Menu.Item style={{ fontSize: '12px' }} key="sign-up">
              Sign Up
            </Menu.Item>
            <Menu.Item style={{ fontSize: '12px' }} key="login">
              Login
            </Menu.Item>
          </Menu>
        );
      }
    } else {
      return (
        <RenderMobileUserMenus onLogout={onLogout} isLoggedIn={isLoggedIn} />
      );
    }
  };

  const renderSecondaryNav = () => {
    return (
      <div className="page-header secondary">
        <Logo />
        <Button variant="cta" size="small">
          Sign up
        </Button>
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
  isLoggedIn: PropTypes.bool,
  onLogout: PropTypes.func,
  windowWidth: PropTypes.number,
  history: PropTypes.object
};

const mapStatesToProps = state => ({
  isLoggedIn: AuthSelectors.selectIsLoggedIn(state)
});
const mapDispatchToProps = dispatch => ({
  onLogout: () => dispatch(AuthActions.setLoggedOut())
});
export default connect(
  mapStatesToProps,
  mapDispatchToProps
)(windowSize(TopNav));
