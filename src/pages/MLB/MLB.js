import React from 'react';
import { Page, PageContent, TopNav } from '@containers/Layout';

export default function MLB(props) {
  const { history } = props;
  return (
    <Page>
      <TopNav history={history} />
      <PageContent>
        <h1>MLB</h1>
      </PageContent>
    </Page>
  );
}
