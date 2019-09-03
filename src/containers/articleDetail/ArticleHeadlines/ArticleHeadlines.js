import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Spin, List } from 'antd';
import ArticleActions, { ArticleSelectors } from '@redux/ArticleRedux';

import './ArticleHeadlines.less';

function ArticleHeadlines(props) {
  const { articleId, loadHeadlines, loading, articleHeadlines } = props;

  useEffect(() => {
    loadHeadlines(articleId);
  }, []);

  if (loading) {
    return <Spin />;
  }

  return (
    <div className="article-headlines">
      <List
        dataSource={articleHeadlines}
        renderItem={item => <List.Item>{item}</List.Item>}
      />
    </div>
  );
}

ArticleHeadlines.propTypes = {
  loading: PropTypes.bool,
  articleId: PropTypes.string,
  loadHeadlines: PropTypes.func,
  articleHeadlines: PropTypes.array
};

const mapStatesToProps = state => ({
  loading: ArticleSelectors.selectLoading(state),
  articleHeadlines: ArticleSelectors.selectArticleHeadlines(state)
});

const mapDispatchToProps = dispatch => ({
  loadHeadlines: articleId =>
    dispatch(ArticleActions.requestArticleHeadlines(articleId))
});

export default connect(
  mapStatesToProps,
  mapDispatchToProps
)(ArticleHeadlines);
