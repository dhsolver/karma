import React from 'react';
import { Page, PageContent, TopNav } from '@containers/Layout';

export default function NBA(props) {
  const { history } = props;
  return (
    <Page>
      <TopNav history={history} />
      <PageContent>
        <h1>NBA</h1>
      </PageContent>
    </Page>
  );
}
