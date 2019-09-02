import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Typography, Divider } from 'antd';

import { AppSelectors } from '@redux/AppRedux';

import SingleBetForm from '@containers/MyBetTracker/SingleBetForm';
// import SingleBetForm from '../../SingleBetForm';

import './ParlayBetForm.less';

const { Title } = Typography;

class ParlayBetForm extends React.Component {
  static propTypes = {
    appData: PropTypes.object,
    cancelSubmission: PropTypes.func
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
    if ('parlayBet' in props.appData) {
      const actualBetCount = props.appData.parlayBet.length + 1;
      if (props.appData.parlayBet !== state.parlayBetList) {
        return {
          parlayBetList: props.appData.parlayBet,
          betCount: actualBetCount
        };
      }
    }
    if (
      'editSingleBet' in props.appData &&
      props.appData.editSingleBet !== state.editSingleBet
    ) {
      return {
        editSingleBet: props.appData.editSingleBet,
        editMode: Object.keys(props.appData.editSingleBet).length ? true : false
      };
    }
    return null;
  }

  getBetCount = () => {
    const { editMode, editSingleBet, betCount } = this.state;
    if (editMode) {
      return editSingleBet.betNumber;
    } else {
      return betCount;
    }
  };

  render() {
    const { betCount } = this.state;
    return (
      <div className="parlayBet_forms-container_mobile">
        <div className="parlayBet_form-container_mobile">
          <Title level={4}>BET #{this.getBetCount()}</Title>
          <Divider />
          <SingleBetForm
            betForm="parlay"
            parlayBetCount={betCount}
            cancelSubmission={this.props.cancelSubmission}
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
