import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Spin } from 'antd';
import Login from '@pages/Login';
import Home from '@pages/Home';
import Account from '@pages/Account';
import WhereToBet from '@pages/WhereToBet';
import BetCalculator from '@pages/BetCalculator';
import MyBetTracker from '@pages/MyBetTracker';
import LiveOdds from '@pages/LiveOdds';
import MLB from '@pages/MLB';
import NBA from '@pages/NBA';
import EnterABet from '@pages/EnterABet';
import Sales from '@pages/Sales';
import SignUp from '@pages/SignUp';
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
        <Route exact path="/mlb" component={MLB} />
        <Route exact path="/nba" component={NBA} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/btn-demo" component={ButtonDemo} />
        <Route exact path="/where-to-bet" component={WhereToBet} />
        <Route exact path="/bet-calculator" component={BetCalculator} />
        <Route exact path="/my-bet-tracker" component={MyBetTracker} />
        <Route exact path="/enter-a-bet" component={EnterABet} />
        <Route exact path="/sales" component={Sales} />
        <Route exact path="/sign-up" component={SignUp} />
        <PrivateRoute
          exact
          path="/account"
          component={Account}
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
