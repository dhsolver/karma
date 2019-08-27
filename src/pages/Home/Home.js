import React from 'react';
import { Menu } from 'antd';
import { Page, PageContent, TopNav, SecondNav } from '@containers/Layout';
import { isMobile } from 'react-device-detect';
import { ArticlesList } from '@containers/articles';
import './Home.less';

export default function HomePage() {
  const mainClassName = 'home';
  return (
    <Page>
      <TopNav />
      <SecondNav>
        <Menu mode="horizontal">
          <Menu.Item>Enter a bet</Menu.Item>
          <Menu.Item>af</Menu.Item>
        </Menu>
      </SecondNav>
      <PageContent className="home">
        <div className={`${mainClassName}__articles`}>
          <ArticlesList title="Latest" />
        </div>
        {isMobile && <div className={`${mainClassName}__live-odds`}></div>}
      </PageContent>
    </Page>
  );
}
