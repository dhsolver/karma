import React from 'react';
import { Typography, Row, Col } from 'antd';
import { Page, PageContent, TopNav } from '@containers/Layout';
import { ArticlesList } from '@containers/articles';
import './Home.less';

const { Title } = Typography;

export default function HomePage() {
  const mainClassName = 'home';
  return (
    <Page>
      <TopNav />
      <PageContent className="home">
        <div className={`${mainClassName}__articles`}>
          <ArticlesList title="Latest" />
        </div>
        <div className={`${mainClassName}__live-odds`}></div>
      </PageContent>
    </Page>
  );
}
