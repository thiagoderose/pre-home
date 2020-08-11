import React from 'react';
import Grid from '@livipdev/core/Grid';

import propTypes from './propTypes';
import defaultProps from './defaultProps';

const Fullscreen = ({ children, ...props }) => (
  <Grid {...props}>{children}</Grid>
);

Fullscreen.propTypes = {
  ...Grid.propTypes,
  ...propTypes,
};
Fullscreen.defaultProps = defaultProps;

export default Fullscreen;
