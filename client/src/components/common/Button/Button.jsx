import React from 'react';
import PropTypes from 'prop-types';

import cx from 'classnames';

import Transition from 'react-transition-group/Transition';

import CircularProgress from '../CircularProgress';

if (process.env.BROWSER) {
  require('./Button.scss');
}

const LOADING_DURATION = 100;

const Button = React.forwardRef((props, ref) => {
  const { children, disabled, loading, onClick, ...rest } = props;
  const handleClick = React.useCallback(
    (...args) => {
      if (!loading && !disabled && typeof onClick === 'function') {
        onClick(...args);
      }
    },
    [disabled, loading, onClick]
  );

  return (
    <button type="button" {...rest} disabled={disabled} onClick={handleClick} ref={ref}>
      <Transition in={loading} timeout={LOADING_DURATION}>
        {state => (
          <>
            {loading && state === 'entered' && <CircularProgress />}
            <span className={cx('btn-body', `btn-body--${state}`)}>{children}</span>
          </>
        )}
      </Transition>
    </button>
  );
});

Button.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
