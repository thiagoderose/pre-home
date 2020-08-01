import React from 'react';
import Grid from '@livipdev/core/Grid';
import Logotype from '@livipdev/core/Logotype';
import Box from '@livipdev/core/Box';
import SocialIcons from '@livipdev/core/SocialIcons';

const Header = props => (
  <Grid item className={props.classes.root}>
    <Logotype variant='root' viewBox='0 0 70 26' />

    <Box className={props.classes.socialIcons}>
      <SocialIcons />
    </Box>
  </Grid>
);

export default Header;
