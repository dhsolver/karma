import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import { Row, Col, Divider } from 'antd';
import { TextInput, SelectMenu, DateInput } from '@components/form';
import API from '@utils/api';

import validationSchema from './schema';
import AuthActions from '@redux/AuthRedux';
import { AppSelectors } from '@redux/AppRedux';

import { BET_TYPE } from '@appConfig';

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

  setBetType = value => {
    this.setState({
      betType: value.label
    });
  };

  handleSubmit = async (values, actions) => {
    console.log('inside handleSubmit');
  };

  renderForm = ({ isValid, isSubmitting }) => {
    const { betType } = this.state;
    const { initialData } = this.props;
    return (
      <Form>
        <Row gutter={16}>
          <Col span={12}>
            <Field
              component={SelectMenu}
              name="betType"
              label="Bet Type"
              options={initialData['betTypeMenu']}
              onChange={this.setBetType}
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
              options={initialData['sportMenu']}
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
                options={initialData['teamMenu']}
              />
            </Col>
            <Col span={2}>over</Col>
            <Col span={11}>
              <Field
                component={SelectMenu}
                name="teamTwo"
                label="Team 2"
                options={initialData['teamMenu']}
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
                options={initialData['matchupMenu']}
              />
            </Col>
            <Col span={12}>
              <Field
                component={SelectMenu}
                name="overUnderFlag"
                label="Over / Under?"
                options={initialData['overUnderMenu']}
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
      </Form>
    );
  };

  render() {
    return (
      <Formik
        initialValues={{
          betType: BET_TYPE['ml'],
          betAmount: '',
          sport: 'NFL',
          date: new Date()
        }}
        onSubmit={this.handleSubmit}
        validationSchema={validationSchema}
        render={this.renderForm}
      />
    );
  }
}

const mapStatesToProps = state => ({
  initialData: AppSelectors.selectData(state)
});

const mapDispatchToProps = dispatch => ({
  onSubmit: token => dispatch(AuthActions.setLoggedIn(token))
});

export default connect(
  mapStatesToProps,
  mapDispatchToProps
)(SingleBetForm);
