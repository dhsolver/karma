const MAX_SHORT_DESC_LEN = 200;

const INITIAL_STRUCTURE = {
  title: '',
  articleText: '',
  articleShortText: '',
  articleImage: '',
  premium: true,
  id: '',
  author: '',
  date: '',
  authorImage: '',
  tag: 'NFL'
};

export function transformFromAPI(apiResponse) {
  const {
    article,
    article_image: articleImage,
    author_image: authorImage,
    ...rest
  } = apiResponse;

  const articleShortText = `${article.substring(0, MAX_SHORT_DESC_LEN)} ...`;

  return {
    ...INITIAL_STRUCTURE,
    articleText: article,
    articleShortText,
    articleImage,
    authorImage,
    ...rest
  };
}
