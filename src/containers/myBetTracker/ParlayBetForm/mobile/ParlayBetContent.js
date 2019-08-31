import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import AppActions from '@redux/AppRedux';
import { AppSelectors } from '@redux/AppRedux';

import ParlayBetList from './ParlayBetList';
import ParlayBetForm from './ParlayBetForm';
import ParlayBetSubmit from './ParlayBetSubmit';
import ParlayBetAmount from './ParlayBetAmount';

import './ParlayBetForm.less';

class ParlayBetContent extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func,
    appData: PropTypes.object,
    addABetClicked: PropTypes.func,
    editSingleInParlay: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.state = {
      parlayBetList: [],
      listVisibleOnMobile: false
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (
      'parlayBet' in props.appData &&
      props.appData.parlayBet !== state.parlayBetList
    ) {
      return {
        parlayBetList: props.appData.parlayBet,
        listVisibleOnMobile: true
      };
    }
    return null;
  }

  getBetAmount = () => {
    let betAmount = 0;
    if (this.props.appData.parlayBet && this.props.appData.parlayBet.length) {
      const { parlayBet } = this.props.appData;
      parlayBet.forEach(bet => {
        if (bet.betAmount && bet.betAmount !== '') {
          betAmount = betAmount + parseInt(bet.betAmount);
        }
      });
    }
    return betAmount;
  };

  editSingleInParlay = singleBet => {
    this.setState(
      {
        listVisibleOnMobile: false
      },
      () => {
        this.props.editSingleInParlay(singleBet);
      }
    );
  };

  addABetClicked = () => {
    this.setState(
      {
        listVisibleOnMobile: false
      },
      () => {
        this.props.addABetClicked();
      }
    );
  };

  cancelSubmission = () => {
    this.setState({
      listVisibleOnMobile: true
    });
  };

  render() {
    const { listVisibleOnMobile } = this.state;
    const betAmount = this.getBetAmount();
    return (
      <div className="parlayBet__content_mobile">
        {!listVisibleOnMobile && (
          <ParlayBetForm cancelSubmission={this.cancelSubmission} />
        )}
        {listVisibleOnMobile && (
          <div className="parlayBet__list-container_mobile">
            <div>
              <ParlayBetAmount betAmount={betAmount} />
            </div>
            <ParlayBetList editSingleInParlay={this.editSingleInParlay} />
            <ParlayBetSubmit addABetClicked={this.addABetClicked} />
          </div>
        )}
      </div>
    );
  }
}

const mapStatesToProps = state => ({
  appData: AppSelectors.selectData(state)
});

const mapDispatchToProps = dispatch => ({
  onSubmit: () => dispatch(AppActions.addParlayBet()),
  editSingleInParlay: singleBet =>
    dispatch(AppActions.editSingleInParlay(singleBet)),
  addABetClicked: () => dispatch(AppActions.addABetClicked())
});

export default connect(
  mapStatesToProps,
  mapDispatchToProps
)(ParlayBetContent);
