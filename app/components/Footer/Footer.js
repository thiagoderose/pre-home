import React from 'react';
import Grid from '@livipdev/core/Grid';
import Typography from '@livipdev/core/Typography';

import messages from './messages';

const Footer = props => (
  <Grid item className={props.classes.root}>
    <Typography
      className={props.classes.footerText}
      message={messages.brand}
      variant='body1'
    />

    <Typography
      className={props.classes.footerText}
      message={messages.address}
      variant='body1'
    />

    <Typography
      className={props.classes.footerText}
      message={messages.copyright}
      variant='body1'
    />

    <Typography
      className={props.classes.footerText}
      message={messages.contact}
      variant='body1'
    />
  </Grid>
);

export default Footer;
