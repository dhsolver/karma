import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, List, Typography, Divider } from 'antd';
import { Button } from '@components/Button';
import './ParlayBetForm.less';

import { AppSelectors } from '@redux/AppRedux';

const { Title, Text } = Typography;

const data = [
  {
    "bet": "Bet 1",
    "betType": "Money Line",
    "sport": "MLB",
    "date": "06/06/19",
    "matchup": "HOU Over SEA",
    "odds": "+119"
  },
  {
    "bet": "Bet 2",
    "betType": "Over/Under",
    "sport": "MLB",
    "date": "06/06/19",
    "matchup": "BOS at TB",
    "overUnderFlag": "Over",
    "overUnderNumber": "8.5",
    "odds": "-144"
  },
  {
    "bet": "Bet 3",
    "betType": "Spread",
    "sport": "NBA",
    "date": "06/06/19",
    "matchup": "TOR over GS",
    "odds": "-4.5"
  }
]

class ParlayBetList extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      dataSource: []
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.appData !== this.props.appData) {
      if ('parlayBet' in nextProps.appData && nextProps.appData.parlayBet.length) {
        this.setState({
          dataSource: nextProps.appData.parlayBet
        });
      }
    }
  }

  renderList = (item) => {
    return (
      <List.Item>
          <Row>
            <Col span={16}>
              <Title level={4} style={{color: "#FD6B3A"}}>{item.bet}</Title>
              <div><Text>{item.betType}</Text></div>
              <div><Text>{item.sport} : </Text></div>
              <div><Text>{item.matchup} {item.odds}</Text></div>
            </Col>
            <Col span={8}>
              <Row gutter={8} type="flex">
                <Col span={16}>
                  <Button type="link" size="very-small" >EDIT</Button>
                </Col>
                <Col span={8} className="closeBtnCol">
                  <Button className="closeBtn" icon="close" type="link" size="very-small" shape="round" outline/>
                </Col>
              </Row>
            </Col>
          </Row>
      </List.Item>
    );
  }

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

const mapStatesToProps = state => {
  console.log("state in mapstatetoprops :", state);
  return ({
    appData: AppSelectors.selectData(state)
  });
};

export default connect(
  mapStatesToProps,
  null
)(ParlayBetList);
