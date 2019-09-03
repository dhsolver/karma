import React from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';
import { Typography, Spin } from 'antd';
import { Link } from 'react-router-dom';
import ImageBackground from '../ImageBackground';

const { Text, Title } = Typography;

import './ArticleCard.less';

function ArticleCard(props) {
  const { loading, article, className } = props;
  if (loading) {
    return <Spin />;
  }

  const { tag, title, articleShortText, articleImage, premium } = article;

  const mainClassName = 'karma-article-card';

  return (
    <div className={cns(mainClassName, className)}>
      <div className={`${mainClassName}__banner`}>
        <ImageBackground src={articleImage}>
          <div className={`${mainClassName}__tag`}>
            <Text>{tag}</Text>
          </div>
        </ImageBackground>
      </div>
      <div className={`${mainClassName}__content`}>
        <Title level={4}>{title}</Title>
        <div
          className={`${mainClassName}__long-text`}
          dangerouslySetInnerHTML={{
            __html: articleShortText
          }}
        />
        <div className={`${mainClassName}__tool-bar`}>
          <Link to={{ pathname: '/article', state: { article: article } }}>
            READ MORE
          </Link>
          {premium && (
            <div className={`${mainClassName}__badge`}>
              <Text>Premium</Text>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

ArticleCard.propTypes = {
  loading: PropTypes.bool,
  article: PropTypes.object,
  className: PropTypes.string
};

export default ArticleCard;
