import React from 'react';
import { Typography } from 'antd';
import { Page, PageContent, TopNav } from '@containers/Layout';
// import { isMobile } from 'react-device-detect';
import './ArticleDetail.less';

import ArticleDetailCard from '../../containers/articleDetail/ArticleDetailCard';
import ArticleHeadlines from '../../containers/articleDetail/ArticleHeadlines';
import LiveOddsList from '../../containers/articleDetail/LiveOddsList';

const { Title } = Typography;

export default function ArticleDetail(props) {
  const { article } = props.location.state;
  console.log('article in ArticleDetail :', article);
  const mainClassName = 'article-detail';
  return (
    <Page>
      <TopNav />
      <PageContent className={mainClassName}>
        <div className={`${mainClassName}__left-container`}>
          <ArticleDetailCard article={article} />
        </div>
        <div className={`${mainClassName}__right-container`}>
          <div className={`${mainClassName}__headlines-container`}>
            <Title level={3}>Headlines</Title>
            <ArticleHeadlines articleId={article.id} />
          </div>
          <div className={`${mainClassName}__liveodds-container`}>
            <Title level={3}>Live Odds</Title>
            <LiveOddsList />
          </div>
        </div>
      </PageContent>
    </Page>
  );
}
