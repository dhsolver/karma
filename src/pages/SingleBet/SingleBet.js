import React from 'react';
import { Typography } from 'antd';
import { isMobile } from 'react-device-detect';
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
        {!isMobile && <Title level={2}>Single Game Bet</Title>}
        <div
          className={
            isMobile
              ? 'singleBet__form-container_mobile'
              : 'singleBet__form-container'
          }
        >
          <SingleBetForm betForm="single" />
        </div>
      </PageContent>
    </Page>
  );
}
