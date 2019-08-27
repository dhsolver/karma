import React from 'react';
import { Typography, Menu } from 'antd';
import { Page, PageContent, TopNav, SecondNav } from '@containers/Layout';
const { Title } = Typography;
const WhereToBet = () => {
  return (
    <Page>
      <TopNav />
      <PageContent className="home">
        <Title level={2}>Where to Bet</Title>
      </PageContent>
    </Page>
  );
};

export default WhereToBet;
