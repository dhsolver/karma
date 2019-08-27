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
import './PropBetForm.less';

class PropBetForm extends React.Component {
    static propTypes = {
        onSubmit: PropTypes.func
    };

    handleSubmit = async (values, actions) => {
        console.log('inside handleSubmit');
        console.log(values);
        const { onSubmit } = this.props;
        const { setSubmitting, setErrors } = actions;
        setSubmitting(true);

        try {
          const { result } = await API.addPropBet(values);
          setSubmitting(false);
          if (result.success) {
            onSubmit(values);
          }
        } catch (err) {
          setErrors(err);
        }
        setSubmitting(false);
    };

    renderForm = ({ isValid, isSubmitting }) => {
        const { appData } = this.props;
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
                  options={appData['sportMenu']}
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
                      options={appData['matchupMenu']}
                    />
                </Col>
            </Row>
            <Row gutter={16} type="flex" justify="center" align="middle">
                <Col span={12}>
                    <Field
                      component={SelectMenu}
                      name="team"
                      label="Team"
                      options={appData['teamMenu']}
                    />
                </Col>
                <Col span={12}>
                    <Field
                      component={SelectMenu}
                      name="player"
                      label="Player (Optional)"
                      options={appData['playerMenu']}
                    />
                </Col>
            </Row>
            <Row gutter={16} type="flex" justify="center" align="middle">
                <Col span={12}>
                    <Field
                      component={SelectMenu}
                      name="stat"
                      label="Stat"
                      options={appData['statMenu']}
                    />
                </Col>
                <Col span={12}>
                  <Row gutter={8} type="flex" justify="center" align="middle">
                    <Col span={14}>
                      <Field
                        component={SelectMenu}
                        name="numberType"
                        label="Number"
                        options={appData['overUnderMenu']}
                      />
                    </Col>
                    <Col span={10} className="propBet__number">
                        <Field
                          component={TextInput}
                          name="number"
                          label=""
                          type="text"
                        />
                    </Col>
                  </Row>
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
                <Button type="secondary" size="large" block outline>Cancel</Button>
              </Col>
            </Row>
          </Form>
        );
      };

    render() {
        return (
            <Formik
                initialValues={{
                    betAmount: null,
                    sport: null,
                    date: new Date(),
                    matchup: null,
                    team: null,
                    player: null,
                    stat: null,
                    numberType: null,
                    number: null,
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
  console.log("inside mapStatesToProps of prop bet :", state);
  return ({
    appData: AppSelectors.selectData(state)
  });
}; 

const mapDispatchToProps = dispatch => ({
    onSubmit: values => dispatch(AppActions.addPropBet(values))
});

export default connect(
    mapStatesToProps,
    mapDispatchToProps
)(PropBetForm);
