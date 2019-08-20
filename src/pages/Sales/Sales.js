import React from 'react';
import { Typography, Row } from 'antd';
import { Page, PageContent, TopNav } from '@containers/Layout';
import { SalesCards, FeatureCards } from '@containers/Sales';
import { CustomButton } from '@components/CustomButton';
import './Sales.less';

const { Title, Text } = Typography;

export default function Sales() {
  return (
    <Page>
      <TopNav type="secondary" />
      <PageContent className="sales">
        <Row
          type="flex"
          justify="center"
          className="sales-main-heading-container"
        >
          <Title level={1} className="sales-main-heading">
            Bet Like a Winner
          </Title>
        </Row>
        <Row type="flex" justify="center">
          <Text className="sales-sub-heading">
            Bet Karma gives you the tools, knowledge and expert picks to bet
            like one of the pro’s.
          </Text>
        </Row>
        <SalesCards />
        <FeatureCards />
        <Row
          type="flex"
          align="middle"
          justify="center"
          style={{
            width: '25%',
            minWidth: '220px',
            margin: '80px auto',
            textAlign: 'center'
          }}
        >
          <Title level={3} style={{ fontWeight: 'normal' }}>
            Sign up today for our limited time discount!
          </Title>
          <CustomButton type="cta" content="Start your free trial" />
        </Row>
      </PageContent>
    </Page>
  );
}
