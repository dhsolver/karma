import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import cns from 'classnames';
import { Typography, Divider } from 'antd';
import ImageBackground from '@components/ImageBackground';

const { Text, Title } = Typography;

import './ArticleDetailCard.less';

function ArticleDetailCard(props) {
  const { className, article } = props;

  const {
    tag,
    title,
    articleImage,
    author,
    date,
    articleText,
    authorImage
  } = article;

  const mainClassName = 'article-detail-card';

  return (
    <div className={cns(mainClassName, className)}>
      <div className={`${mainClassName}__banner`}>
        <ImageBackground src={articleImage}>
          <div className={`${mainClassName}__tag`}>
            <Text>{tag}</Text>
          </div>
          <div className={`${mainClassName}__title`}>
            <Title level={3}>{title}</Title>
          </div>
          <div className={`${mainClassName}__author`}>
            <Title level={4}>{author}</Title>
          </div>
          <div className={`${mainClassName}__timestamp`}>
            <Title level={4}>{moment(date).fromNow()}</Title>
          </div>
        </ImageBackground>
      </div>
      <div className={`${mainClassName}__content`}>
        <div
          className={`${mainClassName}__long-text`}
          dangerouslySetInnerHTML={{
            __html: articleText
          }}
        />
        <Divider />
        <div className={`${mainClassName}__author-detail`}>
          <div className={`${mainClassName}__author-img`}>
            <ImageBackground src={authorImage} className="circle-img" />
          </div>
          <div>
            <Title level={4} className={`${mainClassName}__author-title`}>
              {author}
            </Title>
          </div>
        </div>
      </div>
    </div>
  );
}

ArticleDetailCard.propTypes = {
  className: PropTypes.string,
  article: PropTypes.object
};

export default ArticleDetailCard;
