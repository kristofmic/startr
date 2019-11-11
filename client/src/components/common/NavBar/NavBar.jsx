import React from 'react';
import PropTypes from 'prop-types';

import { CSSTransition } from 'react-transition-group';

import Button from '../Button';
import IconButton from '../IconButton';
import Logo from '../Images/Logo';

import useBodyClassToggle from '../../../hooks/useBodyClassToggle';
import useToggle from '../../../hooks/useToggle';

if (process.env.BROWSER) {
  require('./NavBar.scss');
}

function NavBar(props) {
  const { onRequestAccess } = props;
  const [isMobileNavVisible, , showMobileNav, hideMobileNav] = useToggle(false);
  const [hideBodyOverflow, showBodyOverflow] = useBodyClassToggle('overflow-hidden');
  const dismissMobileNav = React.useCallback(() => {
    showBodyOverflow();
    hideMobileNav();
  }, [hideMobileNav, showBodyOverflow]);
  const displayMobileNav = React.useCallback(() => {
    hideBodyOverflow();
    showMobileNav();
  }, [showMobileNav, hideBodyOverflow]);

  return (
    <nav className="navbar navbar-expand-md navbar-light fixed-top">
      <a className="navbar-brand" href="#">
        <Logo />
      </a>

      <IconButton
        className="navbar-toggler"
        icon="icon-menu-left-right"
        onClick={displayMobileNav}
      />
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item mr-5">
            <a className="nav-link text-primary p-3" href="#features-anchor">
              Features
            </a>
          </li>
          <li className="nav-item">
            <Button className="btn btn-outline-primary btn-sm" onClick={onRequestAccess}>
              Request Early Access
            </Button>
          </li>
        </ul>
      </div>

      <CSSTransition classNames="mobile-nav" in={isMobileNavVisible} timeout={200}>
        <div className="navbar-nav mobile-nav">
          <IconButton
            className="navbar-toggler"
            icon="icon-clear"
            onClick={dismissMobileNav}
          />
          <ul className="list-unstyled">
            <li className="nav-item mb-5">
              <a
                className="nav-link text-primary p-3"
                href="#features-anchor"
                onClick={dismissMobileNav}>
                Features
              </a>
            </li>
            <li className="nav-item">
              <Button className="btn btn-outline-primary" onClick={onRequestAccess}>
                Request Early Access
              </Button>
            </li>
          </ul>
          <a className="navbar-brand" href="#" onClick={dismissMobileNav}>
            <Logo fill="#d6dadc" />
          </a>
        </div>
      </CSSTransition>
    </nav>
  );
}

NavBar.propTypes = {
  onRequestAccess: PropTypes.func.isRequired,
};

export default NavBar;
