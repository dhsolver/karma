import React from 'react';
import { Typography } from 'antd';
import { Page, PageContent, TopNav } from '@containers/Layout';
const { Title } = Typography;
const MyBetTracker = () => {
  return (
    <Page>
      <TopNav />
      <PageContent className="home">
        <Title level={2}>My Bet Tracker</Title>
      </PageContent>
    </Page>
  );
};

export default MyBetTracker;
