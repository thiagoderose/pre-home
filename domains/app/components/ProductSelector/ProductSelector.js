import React from 'react';
import Grid from '@livipdev/core/Grid';
import ContainerWithBackground from '@livipdev/core/ContainerWithBackground';
import Box from '@livipdev/core/Box';
import Logotype from '@livipdev/core/Logotype';
import Typography from '@livipdev/core/Typography';

import messages from './messages';

const ProductSelector = props => (
  <Grid item className={props.classes.root}>
    <Grid item className={props.classes.product}>
      <ContainerWithBackground
        background='images/tickets-background.jpg'
        customClass={props.classes.tickets}
      >
        <Box className={props.classes.inside}>
          <Logotype variant='tickets' />
          <Box className={props.classes.hidden}>
            <Typography message={messages.tickets.description} />
            <Typography message={messages.learnMore} />
          </Box>
        </Box>
      </ContainerWithBackground>
    </Grid>

    <Grid item className={props.classes.product}>
      <ContainerWithBackground
        background='images/travel-background.jpg'
        customClass={props.classes.travel}
      >
        <Box className={props.classes.inside}>
          <Logotype variant='travel' />
          <Box className={props.classes.hidden}>
            <Typography message={messages.tickets.description} />
            <Typography message={messages.learnMore} />
          </Box>
        </Box>
      </ContainerWithBackground>
    </Grid>

    <Grid item className={props.classes.product}>
      <ContainerWithBackground
        background='images/one-background.jpg'
        customClass={props.classes.one}
      >
        <Box className={props.classes.inside}>
          <Logotype variant='one' />
          <Box className={props.classes.hidden}>
            <Typography message={messages.tickets.description} />
            <Typography message={messages.learnMore} />
          </Box>
        </Box>
      </ContainerWithBackground>
    </Grid>
  </Grid>
);

export default ProductSelector;
