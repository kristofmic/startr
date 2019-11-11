import React from 'react';

import Logo from '../Images/Logo';

if (process.env.BROWSER) {
  require('./Footer.scss');
}

function Footer() {
  return (
    <div
      id="footer"
      className="d-flex flex-column align-items-center justify-content-center py-4 py-md-6">
      <Logo className="mb-2" fill="#FFFFFF" />
      <p className="text-muted small mb-0">made on weekends in San Francisco</p>
    </div>
  );
}

export default Footer;
