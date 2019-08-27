import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import { Row, Col, Divider } from 'antd';
import { TextInput, SelectMenu, DateInput } from '@components/form';
import { Button } from '@components/Button';
import API from '@utils/api';

import validationSchema from './schema';
import AppActions from '@redux/AppRedux';
import { AppSelectors } from '@redux/AppRedux';

class ParlayBetForm extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.state = {
      parlayBetList: []
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.appData !== this.props.appData) {
      if ('parlayBet' in nextProps.appData && nextProps.appData.parlayBet.length) {
        this.setState({
          parlayBetList: nextProps.appData.parlayBet
        });
      }
    }
  }

  handleSubmit = async () => {
    console.log('inside handleSubmit');
    const { parlayBetList } = this.state;
    const { onSubmit, addSingleInParlay, betForm } = this.props;

    try {
      const { result } = await API.addParlayBet(parlayBetList);
      if (result.success) {
        onSubmit(parlayBetList);
      }
    } catch (err) {
      /*
      const errors = {
        password: 'Password is wrong'
      };
      */
    }
  };

  render() {
    return (
      <div>
        <Button type="secondary" size="large" block outline>Add a Bet</Button>
        <Button type="secondary" size="large" onClick={this.handleSubmit} block>Submit Parlay</Button>
      </div>
    );
  }
}

const mapStatesToProps = state => ({
  appData: AppSelectors.selectData(state)
});

const mapDispatchToProps = dispatch => ({
  onSubmit: parlayBetList => dispatch(AppActions.addParlayBet(parlayBetList))
});

export default connect(
  mapStatesToProps,
  mapDispatchToProps
)(ParlayBetForm);
