import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function SvgInline(props) {
  const { url } = props;
  const [svg, setSvg] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isErrored, setIsErrored] = useState(false);

  useEffect(() => {
    fetch(url)
      .then(res => res.text())
      .then(setSvg)
      .catch(setIsErrored)
      .then(() => setIsLoaded(true));
  }, [url]);

  return (
    <div
      className={`svgInline svgInline--${isLoaded ? 'loaded' : 'loading'} ${
        isErrored ? 'svgInline--errored' : ''
      }`}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}

SvgInline.propTypes = {
  url: PropTypes.string.isRequired
};

export default SvgInline;
