import React from 'react';
import { Typography, Menu } from 'antd';
import { Page, PageContent, TopNav, SecondNav } from '@containers/Layout';
const { Title } = Typography;
const BetCalculator = () => {
  return (
    <Page>
      <TopNav />
      <PageContent className="home">
        <Title level={2}>Bet Calculator</Title>
      </PageContent>
    </Page>
  );
};

export default BetCalculator;
