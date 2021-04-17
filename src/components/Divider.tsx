import * as React from 'react';

interface IDivider {
  color?: 'dark';
}

const Divider: React.FunctionComponent<IDivider> = ({ color }) => {
  return (
    <span className={`is-divider ${color ? `is-divider-${color}` : ''}`} />
  );
};

export default Divider;
