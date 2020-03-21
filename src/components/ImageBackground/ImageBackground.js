import React from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';
import { Spin } from 'antd';

import './ImageBackground.less';

function ImageBackground(props) {
  const { loading, src, resizeMethod, className, children } = props;
  if (loading) {
    return <Spin />;
  }

  return (
    <div
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: `${resizeMethod}`
      }}
      className={cns('karma-image-bg', className)}
    >
      {children}
    </div>
  );
}

ImageBackground.propTypes = {
  loading: PropTypes.bool,
  article: PropTypes.object,
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
  resizeMethod: PropTypes.oneOf(['contain', 'conver']),
  children: PropTypes.any
};

export default ImageBackground;
