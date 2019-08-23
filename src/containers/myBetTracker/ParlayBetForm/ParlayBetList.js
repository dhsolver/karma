import React from 'react';
import { Row, Col, List, Typography } from 'antd';

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

  renderList = (item) => {
    return (
      <List.Item>
          <Row>
            <Col span={20}>
              <Title level={4} style={{color: "#FD6B3A"}}>{item.bet}</Title>
              <div><Text>{item.betType}</Text></div>
              <div><Text>{item.sport} : {item.date}</Text></div>
              <div><Text>{item.matchup} {item.odds}</Text></div>
            </Col>
            <Col span={4}>
              
            </Col>
          </Row>
      </List.Item>
    );
  }

  render() {
    return (
      <List
        dataSource={data}
        renderItem={this.renderList}
      />
    );
  }
}

export default ParlayBetList;
