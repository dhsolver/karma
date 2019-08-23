import React from 'react';
import { Typography, Divider } from 'antd';
import {
  Page,
  PageContent,
  TopNav,
  SecondNav,
  BetNav
} from '@containers/Layout';
import ParlayBetForm from '@containers/MyBetTracker/ParlayBetForm/ParlayBetForm';
import ParlayBetList from '@containers/MyBetTracker/ParlayBetForm/ParlayBetList';
import ParlayBetAmount from '@containers/MyBetTracker/ParlayBetForm/ParlayBetAmount';
import './ParlayBet.less';

const { Title } = Typography;

export default function ParlayBetPage() {
  return (
    <Page>
      <TopNav />
      <SecondNav>
        <BetNav />
      </SecondNav>
      <PageContent className="parlayBet">
        <Title level={2}>Parlay Bet</Title>
        <div className="parlayBet__content">
          <div className="parlayBet__list-container">
            <ParlayBetList />
          </div>
          <div className="parlayBet_forms-container">
            <div className="parlayBet__amount-container">
              <ParlayBetAmount />
            </div>
            <div className="parlayBet__form-container">
              <Title level={4}>BET #1</Title>
              <Divider />
              <ParlayBetForm />
            </div>
          </div>
        </div>
      </PageContent>
    </Page>
  );
}
