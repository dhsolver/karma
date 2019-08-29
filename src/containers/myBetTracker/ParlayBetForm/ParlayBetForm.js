import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Typography, Divider } from 'antd';

import { AppSelectors } from '@redux/AppRedux';

import SingleBetForm from '@containers/MyBetTracker/SingleBetForm';
import ParlayBetAmount from '@containers/MyBetTracker/ParlayBetForm/ParlayBetAmount';
import './ParlayBetForm.less';

const { Title } = Typography;

class ParlayBetForm extends React.Component {
  static propTypes = {
    appData: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = {
      parlayBetList: [],
      betCount: 1,
      editMode: false,
      editSingleBet: {}
    };
  }

  static getDerivedStateFromProps(props, state) {
    if (
      'editSingleBet' in props.appData &&
      props.appData.editSingleBet !== state.editSingleBet
    ) {
      return {
        editSingleBet: props.appData.editSingleBet,
        editMode: Object.keys(props.appData.editSingleBet).length ? true : false
      };
    }
    if ('parlayBet' in props.appData) {
      const actualBetCount = props.appData.parlayBet.length + 1;
      if (props.appData.parlayBet !== state.parlayBetList) {
        return {
          parlayBetList: props.appData.parlayBet,
          betCount: actualBetCount
        };
      }
    }
    return null;
  }

  renderAmountForm = () => {
    if (this.props.appData.parlayBet && this.props.appData.parlayBet.length) {
      const { parlayBet } = this.props.appData;
      let betAmount = 0;
      parlayBet.forEach(bet => {
        if (bet.betAmount && bet.betAmount !== '') {
          betAmount = betAmount + parseInt(bet.betAmount);
        }
      });
      return (
        <div className="parlayBet__amount-container">
          <ParlayBetAmount betAmount={betAmount} />
        </div>
      );
    }
    return null;
  };

  getBetCount = () => {
    const { editMode, editSingleBet, betCount } = this.state;
    if (editMode) {
      return editSingleBet.betNumber;
    } else {
      return betCount;
    }
  };

  render() {
    return (
      <div className="parlayBet_forms-container">
        {this.renderAmountForm()}
        <div className="parlayBet__form-container">
          <Title level={4}>BET #{this.getBetCount()}</Title>
          <Divider />
          <SingleBetForm
            betForm="parlay"
            parlayBetCount={this.state.betCount}
          />
        </div>
      </div>
    );
  }
}

const mapStatesToProps = state => ({
  appData: AppSelectors.selectData(state)
});

export default connect(
  mapStatesToProps,
  null
)(ParlayBetForm);
