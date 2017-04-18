import React from 'react';
import InlineSVG from 'jacobmarshall-react-inline-svg';
import ExternalLink from 'components/ExternalLink';
import './Credits.css';

function Credits({ url }) {
  return (
    <div className="Credits primary">
      powered by
      <ExternalLink href={url}>
        <InlineSVG
          src={require('assets/wolfram-alpha.svg')}
        />
      </ExternalLink>
    </div>
  );
}

export default Credits;