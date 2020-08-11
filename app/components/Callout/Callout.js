import React from 'react';
import Grid from '@livipdev/core/Grid';
import Typography from '@livipdev/core/Typography';

import messages from './messages';

const Callout = props => (
  <Grid item className={props.classes.root}>
    <Typography
      className={props.classes.title}
      message={messages.title}
      variant='h1'
    />
    <Typography
      message={messages.subtitle}
      variant='subtitle1'
    />
  </Grid>
);

export default Callout;
