import React from 'react';
import { Menu } from 'antd';
import { Page, PageContent, TopNav, SecondNav } from '@containers/Layout';

export default function Account(props) {
  const { history } = props;
  return (
    <Page>
      <TopNav history={history} />
      <SecondNav history={history}>
        <Menu.Item key="enter-a-bet">Enter a bet</Menu.Item>
      </SecondNav>
      <PageContent className="home">
        <h1>Account page</h1>
      </PageContent>
    </Page>
  );
}
