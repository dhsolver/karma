import React from 'react';
import { Typography, Row } from 'antd';
import { Page, PageContent, TopNav } from '@containers/Layout';
import { FeatureCards } from '@containers/Sales';
import { Button } from '@components/common/Button';
import { PreLaunch } from '@components/PreLaunch';
import './Sales.less';

const { Title, Text } = Typography;

export default function Sales() {
  return (
    <Page>
      <TopNav type="secondary" />
      <PageContent className="sales">
        <div className="sales-header">
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
          <PreLaunch />
        </div>
        <FeatureCards />
        <Row
          type="flex"
          align="middle"
          justify="center"
          className="sales-footer"
        >
          <div className="sales-footer-content">
            <Title level={3} style={{ fontWeight: 'normal' }}>
              Sign up today for our limited time discount!
            </Title>
            <Button variant="cta">get on this list</Button>
          </div>
        </Row>
      </PageContent>
    </Page>
  );
}
