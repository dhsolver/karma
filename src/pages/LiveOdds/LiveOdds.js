import React from 'react';
import { Page, PageContent, TopNav } from '@containers/Layout';
import { LiveOddsList } from '@containers/games';
import './LiveOdds.less';

export default function LiveOddsPage(props) {
  const mainClassName = 'live-odds-page';
  const { history } = props;
  return (
    <Page>
      <TopNav history={history} />
      <PageContent className={`${mainClassName}`}>
        <LiveOddsList />
      </PageContent>
    </Page>
  );
}
