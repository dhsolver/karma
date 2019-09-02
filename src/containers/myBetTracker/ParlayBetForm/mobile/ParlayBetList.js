import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { connect } from 'react-redux';
import { Row, Col, List, Typography, Divider } from 'antd';
import { Button } from '@components/common/Button';
import './ParlayBetForm.less';

import AppActions from '@redux/AppRedux';
import { AppSelectors } from '@redux/AppRedux';

import { BET_TYPE } from '@appConfig';

const { Title, Text } = Typography;

class ParlayBetList extends React.Component {
  static propTypes = {
    appData: PropTypes.object,
    editSingleInParlay: PropTypes.func,
    removeSingleInParlay: PropTypes.func
  };

  state = {
    dataSource: []
  };

  static getDerivedStateFromProps(props, state) {
    if (
      'parlayBet' in props.appData &&
      props.appData.parlayBet !== state.dataSource
    ) {
      return {
        dataSource: props.appData.parlayBet
      };
    }
    return null;
  }

  editBet = betItem => {
    this.props.editSingleInParlay(betItem);
  };

  removeBet = betItem => {
    this.props.removeSingleInParlay(betItem.id);
  };

  renderList = item => {
    return (
      <List.Item>
        <Row>
          <Col span={16}>
            <Title level={4} style={{ color: '#FD6B3A' }}>
              Bet {item.betNumber}
            </Title>
            <div>
              <Text>{item.betType}</Text>
            </div>
            <div>
              <Text>
                {item.sport} :{' '}
                {moment.isMoment(item.date)
                  ? item.date.format('DD/MM/YYYY')
                  : moment(item.date, 'DD/MM/YYYY')}
              </Text>
            </div>
            {item.betType !== BET_TYPE['ou'] && (
              <div>
                <Text>
                  {item.teamOne} over {item.teamTwo}{' '}
                  {item.betType === BET_TYPE['ml'] ? item.odds : item.spread}
                </Text>
              </div>
            )}
            {item.betType === BET_TYPE['ou'] && (
              <>
                <div>
                  <Text>{item.matchup}</Text>
                </div>
                <div>
                  <Text>
                    {item.overUnderFlag} {item.overUnderNumber} {item.odds}
                  </Text>
                </div>
              </>
            )}
          </Col>
          <Col span={8}>
            <Row gutter={8} type="flex">
              <Col span={16}>
                <Button
                  type="link"
                  size="very-small"
                  onClick={this.editBet.bind(this, item)}
                >
                  EDIT
                </Button>
              </Col>
              <Col span={8} className="closeBtnCol">
                <Button
                  className="closeBtn"
                  icon="close"
                  type="link"
                  size="very-small"
                  shape="round"
                  onClick={this.removeBet.bind(this, item)}
                  outline
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </List.Item>
    );
  };

  render() {
    const { dataSource } = this.state;
    if (dataSource.length) {
      return (
        <div>
          <List
            dataSource={dataSource}
            renderItem={this.renderList}
            className="parlayBet__list"
          />
          <Divider />
        </div>
      );
    } else {
      return null;
    }
  }
}

const mapStatesToProps = state => ({
  appData: AppSelectors.selectData(state)
});

const mapDispatchToProps = dispatch => ({
  removeSingleInParlay: betId =>
    dispatch(AppActions.removeSingleInParlay(betId))
});

export default connect(
  mapStatesToProps,
  mapDispatchToProps
)(ParlayBetList);
