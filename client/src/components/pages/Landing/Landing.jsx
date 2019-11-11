import React from 'react';

if (process.env.BROWSER) {
  require('./Landing.scss');
}

function Landing() {
  return (
    <div id="landing">
      <h4>I am Groot!</h4>
    </div>
  );
}

export default Landing;