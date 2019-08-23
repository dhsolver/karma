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

class PropBetForm extends React.Component {
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
            <Row gutter={16}>
                <Col span={12}>
                    <Field
                    component={SelectMenu}
                    name="matchup"
                    label="Matchup"
                    options={initialData['matchupMenu']}
                    />
                </Col>
            </Row>
            <Row gutter={16} type="flex" justify="center" align="middle">
                <Col span={12}>
                    <Field
                    component={SelectMenu}
                    name="team"
                    label="Team"
                    options={initialData['teamMenu']}
                    />
                </Col>
                <Col span={12}>
                    <Field
                    component={SelectMenu}
                    name="player"
                    label="Player (Optional)"
                    options={initialData['playerMenu']}
                    />
                </Col>
            </Row>
            <Row gutter={16} type="flex" justify="center" align="middle">
                <Col span={12}>
                    <Field
                    component={SelectMenu}
                    name="stat"
                    label="Stat"
                    options={initialData['statMenu']}
                    />
                </Col>
                <Col span={12}>
                    <Field
                    component={SelectMenu}
                    name="player"
                    label="Number"
                    options={initialData['overUnderMenu']}
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
)(PropBetForm);
