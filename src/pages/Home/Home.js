import React from 'react';
import { Typography } from 'antd';
import { Page, PageContent, TopNav } from '@containers/Layout';
import './Home.less';

const { Title } = Typography;

export default function HomePage() {
  return (
    <Page>
      <TopNav />
      <PageContent className="home">
        <Title level={2}>Home</Title>
      </PageContent>
    </Page>
  );
}
