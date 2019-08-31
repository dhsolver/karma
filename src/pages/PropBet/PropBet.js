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
        {!isMobile && <Title level={2}>Prop Bet</Title>}
        <div
          className={
            isMobile
              ? 'propBet__form-container_mobile'
              : 'propBet__form-container'
          }
        >
          <PropBetForm />
        </div>
      </PageContent>
    </Page>
  );
}
