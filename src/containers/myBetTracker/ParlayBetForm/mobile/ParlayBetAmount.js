import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Field, Form } from 'formik';
import { Row, Col } from 'antd';
import { TextInput } from '@components/form';

class ParlayBetAmount extends React.Component {
  static propTypes = {
    betAmount: PropTypes.number
  };

  state = {
    formData: {
      betAmount: null
    }
  };

  static getDerivedStateFromProps(props, state) {
    if (props.betAmount && props.betAmount !== state.formData.betAmount) {
      return {
        formData: {
          betAmount: props.betAmount
        }
      };
    }
    return null;
  }

  renderForm = () => {
    return (
      <Form>
        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Field
              component={TextInput}
              name="betAmount"
              type="text"
              label="Bet Amount"
              addontype="dollar"
              disabled
            />
          </Col>
        </Row>
      </Form>
    );
  };

  render() {
    return (
      <Formik
        enableReinitialize={true}
        initialValues={this.state.formData}
        render={this.renderForm}
      />
    );
  }
}

export default ParlayBetAmount;
