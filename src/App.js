import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from '@pages/Login';
import Home from '@pages/Home';
import AppActions, { AppSelectors } from '@redux/AppRedux';
import { AuthSelectors } from '@redux/AuthRedux';

import '@styles/main.less';

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

  renderAnonRoutes() {
    return (
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route render={() => <Redirect to="/login" />} />
      </Switch>
    );
  }

  renderUserRoutes() {
    return (
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route render={() => <Redirect to="/home" />} />
      </Switch>
    );
  }

  renderContent() {
    const { isLoggedIn } = this.props;

    if (!isLoggedIn) {
      return this.renderAnonRoutes();
    }

    return this.renderUserRoutes();
  }

  render() {
    return this.renderContent();
  }
}

const mapStatesToProps = state => ({
  loading: AppSelectors.selectLoading(state),
  isLoggedIn: AuthSelectors.selectIsLoggedIn(state)
});

const mapDispatchToProps = dispatch => ({
  startup: () => dispatch(AppActions.startup())
});

export default connect(
  mapStatesToProps,
  mapDispatchToProps
)(App);
