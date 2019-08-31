import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from '@components/common/Button';
import API from '@utils/api';

import AppActions from '@redux/AppRedux';
import { AppSelectors } from '@redux/AppRedux';

class ParlayBetSubmit extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func,
    appData: PropTypes.object,
    addABetClicked: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.state = {
      parlayBetList: []
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (
      'parlayBet' in props.appData &&
      props.appData.parlayBet !== state.parlayBetList
    ) {
      return {
        parlayBetList: props.appData.parlayBet
      };
    }
    return null;
  }

  handleSubmit = async () => {
    const { parlayBetList } = this.state;
    const { onSubmit } = this.props;

    try {
      const result = await API.addParlayBet(parlayBetList);
      if (result.success) {
        onSubmit();
      }
    } catch (err) {
      /*
      const errors = {
        password: 'Password is wrong'
      };
      */
    }
  };

  addABetClicked = () => {
    this.props.addABetClicked();
  };

  render() {
    return (
      <div>
        <Button
          type="secondary"
          size="large"
          icon="plus"
          onClick={this.addABetClicked}
          block
          outline
        >
          Add a Bet
        </Button>
        <Button
          type="secondary"
          icon="check-circle"
          theme="filled"
          size="large"
          onClick={this.handleSubmit}
          block
        >
          Submit Parlay
        </Button>
      </div>
    );
  }
}

const mapStatesToProps = state => ({
  appData: AppSelectors.selectData(state)
});

const mapDispatchToProps = dispatch => ({
  onSubmit: () => dispatch(AppActions.addParlayBet())
});

export default connect(
  mapStatesToProps,
  mapDispatchToProps
)(ParlayBetSubmit);
