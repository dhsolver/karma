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
// import ParlayBetContent from '@containers/MyBetTracker/ParlayBetForm/web/ParlayBetContent';
// import ParlayBetContentMobile from '@containers/MyBetTracker/ParlayBetForm/mobile/ParlayBetContent';
import ParlayBetContent from '../../containers/myBetTracker/ParlayBetForm/web/ParlayBetContent';
import ParlayBetContentMobile from '../../containers/myBetTracker/ParlayBetForm/mobile/ParlayBetContent';

import './ParlayBet.less';

const { Title } = Typography;

export default function ParlayBetPage() {
  return (
    <Page>
      <TopNav />
      <SecondNav>
        <BetNav />
      </SecondNav>
      <PageContent
        className={isMobile ? 'parlayBet parlayBet_mobile' : 'parlayBet'}
      >
        {!isMobile && <Title level={2}>Parlay Bet 2</Title>}
        {isMobile ? <ParlayBetContentMobile /> : <ParlayBetContent />}
      </PageContent>
    </Page>
  );
}
