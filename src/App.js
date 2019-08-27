import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Spin } from 'antd';
import Login from '@pages/Login';
import Home from '@pages/Home';
import Account from '@pages/Account';
import SingleBet from '@pages/SingleBet';
import PropBet from '@pages/PropBet';
import ParlayBet from '@pages/ParlayBet';
import WhereToBet from '@pages/WhereToBet';
import BetCalculator from '@pages/BetCalculator';
import MyBetTracker from '@pages/MyBetTracker';
import LiveOdds from '@pages/LiveOdds';
import AppActions, { AppSelectors } from '@redux/AppRedux';
import { AuthSelectors } from '@redux/AuthRedux';
import { ButtonDemo } from '@components/common/Button';

import '@styles/main.less';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { isAuthenticated } = rest;
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

PrivateRoute.propTypes = {
  component: PropTypes.any
};

class App extends Component {
  static propTypes = {
    loading: PropTypes.bool,
    loaded: PropTypes.bool,
    startup: PropTypes.func,
    isLoggedIn: PropTypes.bool
  };

  componentDidMount() {
    const { startup } = this.props;

    startup();
  }

  renderContent() {
    const { isLoggedIn } = this.props;

    return (
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/nfl" component={LiveOdds} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/btn-demo" component={ButtonDemo} />
        <Route exact path="/where-to-bet" component={WhereToBet} />
        <Route exact path="/bet-calculator" component={BetCalculator} />
        <PrivateRoute
          exact
          path="/account"
          component={Account}
          isAuthenticated={!!isLoggedIn}
        />
        <PrivateRoute
          exact
          path="/my-bet-tracker"
          component={SingleBet}
          isAuthenticated={!!isLoggedIn}
        />
        <PrivateRoute
          exact
          path="/enter-bet"
          component={SingleBet}
          isAuthenticated={!!isLoggedIn}
        />
        <PrivateRoute
          exact
          path="/single-game"
          component={SingleBet}
          isAuthenticated={!!isLoggedIn}
        />
        <PrivateRoute
          exact
          path="/prop-bet"
          component={PropBet}
          isAuthenticated={!!isLoggedIn}
        />
        <PrivateRoute
          exact
          path="/parlay"
          component={ParlayBet}
          isAuthenticated={!!isLoggedIn}
        />
        <Route render={() => <Redirect to="/home" />} />
      </Switch>
    );
  }

  render() {
    const { loading, loaded } = this.props;

    if (loading || !loaded) {
      return <Spin />;
    }

    return this.renderContent();
  }
}

const mapStatesToProps = state => ({
  loading: AppSelectors.selectLoading(state),
  loaded: AppSelectors.selectLoaded(state),
  isLoggedIn: AuthSelectors.selectIsLoggedIn(state)
});

const mapDispatchToProps = dispatch => ({
  startup: () => dispatch(AppActions.startup())
});

export default connect(
  mapStatesToProps,
  mapDispatchToProps
)(App);
