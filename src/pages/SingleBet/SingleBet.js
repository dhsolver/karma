import React from 'react';
import { Typography } from 'antd';
import {
  Page,
  PageContent,
  TopNav,
  SecondNav,
  BetNav
} from '@containers/Layout';
import SingleBetForm from '@containers/MyBetTracker/SingleBetForm';
import './SingleBet.less';

const { Title } = Typography;

export default function SingleBetPage() {
  return (
    <Page>
      <TopNav />
      <SecondNav>
        <BetNav />
      </SecondNav>
      <PageContent className="singleBet">
        <Title level={2}>Single Game Bet</Title>
        <div className="singleBet__form-container">
          <SingleBetForm />
        </div>
      </PageContent>
    </Page>
  );
}
