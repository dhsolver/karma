import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Spin } from 'antd';
import Login from '@pages/Login';
import Home from '@pages/Home';
import Account from '@pages/Account';
import AppActions, { AppSelectors } from '@redux/AppRedux';
import { AuthSelectors } from '@redux/AuthRedux';

import '@styles/main.less';
import Sales from '@pages/Sales';

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
        <Route exact path="/login" component={Login} />
        <Route exact path="/sales" component={Sales} />
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
