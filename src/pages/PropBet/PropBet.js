import React from 'react';
import { Typography } from 'antd';
import {
  Page,
  PageContent,
  TopNav,
  SecondNav,
  BetNav
} from '@containers/Layout';
import PropBetForm from '@containers/MyBetTracker/PropBetForm';
import './PropBet.less';

const { Title } = Typography;

export default function PropBetPage() {
  return (
    <Page>
      <TopNav />
      <SecondNav>
        <BetNav />
      </SecondNav>
      <PageContent className="propBet">
        <Title level={2}>Prop Bet</Title>
        <div className="propBet__form-container">
          <PropBetForm />
        </div>
      </PageContent>
    </Page>
  );
}
