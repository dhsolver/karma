import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import { Row, Col, Divider } from 'antd';
import moment from 'moment';
import uuid from 'uuid';
import { TextInput, SelectMenu, DateInput } from '@components/form';
import { Button } from '@components/common/Button';
import API from '@utils/api';

import validationSchema from './schema';
import AppActions from '@redux/AppRedux';
import { AppSelectors } from '@redux/AppRedux';

import { BET_TYPE } from '@appConfig';

import './SingleBetForm.less';

class SingleBetForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      betType: BET_TYPE['ml'],
      editMode: false,
      formData: {
        betType: null,
        betAmount: null,
        sport: null,
        date: moment(new Date(), 'DD/MM/YYYY'),
        teamOne: null,
        teamTwo: null,
        matchup: null,
        overUnderFlag: null,
        overUnderNumber: null,
        spread: null,
        odds: null
      }
    };
  }

  static propTypes = {
    onSubmit: PropTypes.func,
    appData: PropTypes.object,
    addSingleInParlay: PropTypes.func,
    betForm: PropTypes.string,
    parlayBetCount: PropTypes.number,
    updateSingleInParlay: PropTypes.func
  };

  static getDerivedStateFromProps(props, state) {
    if (
      'editSingleBet' in props.appData &&
      props.appData.editSingleBet !== state.formData
    ) {
      return {
        formData: props.appData.editSingleBet,
        betType: props.appData.editSingleBet.betType,
        editMode: Object.keys(props.appData.editSingleBet).length ? true : false
      };
    }
    return null;
  }

  setBetType = value => {
    const { appData } = this.props;
    const { betTypeMenu } = appData;
    let betType = '';
    betTypeMenu.forEach(betTypeData => {
      if (betTypeData.name === value) {
        betType = betTypeData.name;
      }
    });
    this.setState({
      betType: betType
    });
  };

  handleSubmit = async (values, actions) => {
    const {
      onSubmit,
      addSingleInParlay,
      betForm,
      updateSingleInParlay
    } = this.props;
    const { setSubmitting, setErrors, resetForm } = actions;
    setSubmitting(true);

    try {
      if (betForm === 'single') {
        const result = await API.addSingleBet(values);
        setSubmitting(false);
        if (result.success) {
          onSubmit(values);
        }
      } else if (betForm === 'parlay') {
        if (!this.state.editMode) {
          addSingleInParlay({
            ...values,
            betNumber: this.props.parlayBetCount,
            id: uuid()
          });
        } else {
          updateSingleInParlay(this.state.formData.id, values);
          /*
          this.setState({
            editMode: false
          });
          */
        }
        resetForm({});
      }
    } catch (err) {
      /*
      const errors = {
        password: 'Password is wrong'
      };
      */
      setErrors(err);
    }
    setSubmitting(false);
  };

  renderForm = ({ isValid, isSubmitting }) => {
    const { betType } = this.state;
    const { appData } = this.props;
    return (
      <Form>
        <Row gutter={16}>
          <Col span={12}>
            <Field
              component={SelectMenu}
              name="betType"
              label="Bet Type"
              options={appData['betTypeMenu']}
              handleChange={this.setBetType}
            />
          </Col>
          <Col span={12}>
            <Field
              component={TextInput}
              name="betAmount"
              type="text"
              label="Bet Amount"
              addontype="dollar"
            />
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={12}>
            <Field
              component={SelectMenu}
              name="sport"
              label="Sport"
              options={appData['sportMenu']}
            />
          </Col>
          <Col span={12}>
            <Field component={DateInput} name="date" label="Date" />
          </Col>
        </Row>
        {betType !== BET_TYPE['ou'] && (
          <Row gutter={16} type="flex" justify="center" align="middle">
            <Col span={11}>
              <Field
                component={SelectMenu}
                name="teamOne"
                label="Team 1"
                options={appData['teamMenu']}
              />
            </Col>
            <Col span={2}>over</Col>
            <Col span={11}>
              <Field
                component={SelectMenu}
                name="teamTwo"
                label="Team 2"
                options={appData['teamMenu']}
              />
            </Col>
          </Row>
        )}
        {betType === BET_TYPE['ou'] && (
          <Row gutter={16}>
            <Col span={12}>
              <Field
                component={SelectMenu}
                name="matchup"
                label="Matchup"
                options={appData['matchupMenu']}
              />
            </Col>
            <Col span={12}>
              <Field
                component={SelectMenu}
                name="overUnderFlag"
                label="Over / Under?"
                options={appData['overUnderMenu']}
              />
            </Col>
          </Row>
        )}
        <Row gutter={16}>
          {betType === BET_TYPE['ou'] && (
            <Col span={12}>
              <Field
                component={TextInput}
                name="overUnderNumber"
                type="text"
                label="Over / Under Number"
              />
            </Col>
          )}
          {betType !== BET_TYPE['sd'] && (
            <Col span={12}>
              <Field
                component={TextInput}
                name="odds"
                type="text"
                label="Odds"
              />
            </Col>
          )}
        </Row>
        {betType === BET_TYPE['sd'] && (
          <Row gutter={16}>
            <Col span={12}>
              <Field
                component={TextInput}
                name="spread"
                type="text"
                label="Spread"
              />
            </Col>
          </Row>
        )}
        <Divider />
        <Row gutter={16}>
          <Col span={12}>
            <Button
              type="secondary"
              size="large"
              htmlType="submit"
              disabled={!isValid || isSubmitting}
              block
            >
              {this.state.editMode ? 'Update' : 'Submit'}
            </Button>
          </Col>
          <Col span={12}>
            <Button type="secondary" size="large" block outline>
              Cancel
            </Button>
          </Col>
        </Row>
      </Form>
    );
  };

  render() {
    return (
      <Formik
        enableReinitialize
        initialValues={this.state.formData}
        onSubmit={this.handleSubmit}
        validationSchema={this.state.editMode ? null : validationSchema}
        render={this.renderForm}
      />
    );
  }
}

const mapStatesToProps = state => ({
  appData: AppSelectors.selectData(state)
});

const mapDispatchToProps = dispatch => ({
  onSubmit: values => dispatch(AppActions.addSingleBet(values)),
  addSingleInParlay: values => dispatch(AppActions.addSingleInParlay(values)),
  updateSingleInParlay: (betId, values) =>
    dispatch(AppActions.updateSingleInParlay({ betId, values }))
});

export default connect(
  mapStatesToProps,
  mapDispatchToProps
)(SingleBetForm);
