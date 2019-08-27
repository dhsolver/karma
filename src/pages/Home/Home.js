import React from 'react';
import { isMobile } from 'react-device-detect';
import { Page, PageContent, TopNav } from '@containers/Layout';
import { ArticlesList } from '@containers/articles';
import './Home.less';

export default function HomePage() {
  const mainClassName = 'home';
  return (
    <Page>
      <TopNav />
      <PageContent className="home">
        <div className={`${mainClassName}__articles`}>
          <ArticlesList title="Latest" />
        </div>
        {isMobile && <div className={`${mainClassName}__live-odds`}></div>}
      </PageContent>
    </Page>
  );
}
