import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Formik, Field, Form } from 'formik';
import { Row, Col } from 'antd';
import { TextInput } from '@components/form';
import API from '@utils/api';

import validationSchema from './schema';
import AuthActions from '@redux/AuthRedux';
import { AppSelectors } from '@redux/AppRedux';

class ParlayBetAmount extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func
  };

  handleSubmit = async (values, actions) => {
    console.log('inside handleSubmit');
  };

  renderForm = ({ isValid, isSubmitting }) => {
    return (
        <Form>
          <Row gutter={16}>
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
        </Form>
      );
  };

  render() {
    return (
        <Formik
          initialValues={{
            betAmount: ''
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
)(ParlayBetAmount);
