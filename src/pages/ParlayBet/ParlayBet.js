import React from 'react';
import { Typography } from 'antd';
import {
  Page,
  PageContent,
  TopNav,
  SecondNav,
  BetNav
} from '@containers/Layout';
import ParlayBetSubmit from '@containers/MyBetTracker/ParlayBetForm/ParlayBetSubmit';
import ParlayBetList from '@containers/MyBetTracker/ParlayBetForm/ParlayBetList';
import ParlayBetForm from '@containers/MyBetTracker/ParlayBetForm/ParlayBetForm';
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
            <ParlayBetSubmit />
          </div>
          <ParlayBetForm />
        </div>
      </PageContent>
    </Page>
  );
}
