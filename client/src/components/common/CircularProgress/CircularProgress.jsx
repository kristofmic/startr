import React from 'react';
import PropTypes from 'prop-types';

import cx from 'classnames';

if (process.env.BROWSER) {
  require('./CircularProgress.scss');
}

function CircularProgress(props) {
  const { className, ...other } = props;

  return (
    <div className={cx(className, 'loading')} {...other}>
      <div className="loading-icon" />
    </div>
  );
}

CircularProgress.propTypes = {
  className: PropTypes.string,
};

export default React.memo(CircularProgress);
