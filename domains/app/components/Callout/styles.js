import { SCREEN_SIZES } from '@livipdev/core/styles/theme/constants';

const styles = theme => ({
  root: {
    padding: '2rem',
    paddingBottom: '6rem',

    [theme.breakpoints.down(SCREEN_SIZES.EXTRA_LARGE)]: {
      padding: '2rem',
      paddingBottom: '3rem',
    },
  },

  title: {
    fontSize: '29px',
  },
});

export default styles;
