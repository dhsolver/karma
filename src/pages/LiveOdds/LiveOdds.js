import React from 'react';
import { Page, PageContent, TopNav } from '@containers/Layout';
import { LiveOddsList } from '@containers/games';
import './LiveOdds.less';

export default function LiveOddsPage() {
  const mainClassName = 'live-odds-page';
  return (
    <Page>
      <TopNav />
      <PageContent className={`${mainClassName}`}>
        <LiveOddsList />
      </PageContent>
    </Page>
  );
}
