import React from 'react';
import PropTypes from 'prop-types';

import cx from 'classnames';

import PlaceholderImage from '../PlaceholderImage';

function Image(props) {
  const {
    alt,
    className,
    height,
    placeholderHeight,
    placeholderWidth,
    src,
    width,
    ...rest
  } = props;

  const [loaded, setLoaded] = React.useState(false);
  const handleLoad = React.useCallback(() => {
    setLoaded(true);
  }, []);

  return (
    <>
      {!loaded && (
        <PlaceholderImage
          className={className}
          height={height || placeholderHeight}
          width={width || placeholderWidth}
        />
      )}
      <img
        alt={alt}
        className={cx(className, {
          invisible: !loaded,
        })}
        height={height}
        onLoad={handleLoad}
        src={src}
        width={width}
        {...rest}
      />
    </>
  );
}

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  placeholderHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  placeholderWidth: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  src: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default Image;
