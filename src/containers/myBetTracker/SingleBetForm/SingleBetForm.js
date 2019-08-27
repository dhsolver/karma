import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import { Row, Col, Divider } from 'antd';
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
      betType: BET_TYPE['ml']
    };
  }

  static propTypes = {
    onSubmit: PropTypes.func
  };

  componentDidUpdate() {
    console.log('inside componentDidUpdate', this.props);
  }

  setBetType = value => {
    console.log('inside setbettype ', value);
    const { appData } = this.props;
    const { betTypeMenu } = appData;
    let betType = '';
    betTypeMenu.forEach(betTypeData => {
      if (betTypeData.id === value) {
        betType = betTypeData.name;
      }
    });
    this.setState({
      betType: betType
    });
  };

  handleSubmit = async (values, actions) => {
    console.log('inside handleSubmit');
    console.log(values);
    const { onSubmit, addSingleInParlay, betForm } = this.props;
    const { setSubmitting, setErrors, resetForm } = actions;
    setSubmitting(true);

    try {
      if (betForm === 'single') {
        const { result } = await API.addSingleBet(values);
        setSubmitting(false);
        if (result.success) {
          onSubmit(values);
          // resetForm({});
        }
      } else if (betForm === 'parlay') {
        addSingleInParlay(values);
        // resetForm({});
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
              Submit
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
        initialValues={{
          betType: null,
          betAmount: null,
          sport: null,
          date: new Date(),
          teamOne: null,
          teamTwo: null,
          matchup: null,
          overUnderFlag: null,
          overUnderNumber: null,
          spread: null,
          odds: null
        }}
        onSubmit={this.handleSubmit}
        validationSchema={validationSchema}
        render={this.renderForm}
      />
    );
  }
}

const mapStatesToProps = state => {
  return {
    appData: AppSelectors.selectData(state)
  };
};

const mapDispatchToProps = dispatch => ({
  onSubmit: values => dispatch(AppActions.addSingleBet(values)),
  addSingleInParlay: values => dispatch(AppActions.addSingleInParlay(values))
});

export default connect(
  mapStatesToProps,
  mapDispatchToProps
)(SingleBetForm);
