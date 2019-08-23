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

class ParlayBetForm extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func
  };

  handleSubmit = async (values, actions) => {
    console.log('inside handleSubmit');
  };

  renderForm = ({ isValid, isSubmitting }) => {
    const { initialData } = this.props;
    return (
      <Form>
        <Row gutter={16}>
          <Col span={12}>
            <Field
              component={TextInput}
              name="moneyLine"
              type="text"
              label="Money Line"
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
        <Row gutter={16} type="flex" justify="center" align="middle">
          <Col span={12}>
            <Field
              component={SelectMenu}
              name="teamOne"
              label="Team 1"
              options={initialData['teamMenu']}
            />
          </Col>
          <Col span={12}>
            <Field
              component={SelectMenu}
              name="teamTwo"
              label="Team 2"
              options={initialData['teamMenu']}
            />
          </Col>
        </Row>
        <Row gutter={16}>
            <Col span={12}>
              <Field
                component={TextInput}
                name="odds"
                type="text"
                label="Odds"
              />
            </Col>
        </Row>
        <Divider />
      </Form>
    );
  };

  render() {
    return (
      <Formik
        initialValues={{
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
)(ParlayBetForm);
