import { SCREEN_SIZES } from '@livipdev/core/styles/theme/constants';

const productItem = {
  flexGrow: 1,
  height: '100%',
  padding: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'relative',
  alignItems: 'flex-end',
  flexDirection: 'row',

  '& svg': {
    marginBottom: '1rem',
  },
};

const mask = {
  content: '""',
  height: '100%',
  width: '100%',
  opacity: 0.9,
  position: 'absolute',
};

const styles = theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    width: '100%',

    [theme.breakpoints.down(SCREEN_SIZES.SMALL)]: {
      flexDirection: 'column',
    },
  },

  product: {
    display: 'flex',
    flexGrow: 1,
    cursor: 'pointer',
    transition: '0.4s all ease-in-out',

    [theme.breakpoints.down(SCREEN_SIZES.SMALL)]: {
      flexDirection: 'column',
    },

    '&:hover': {
      flexGrow: 6,

      [theme.breakpoints.down(SCREEN_SIZES.MEDIUM)]: {
        flexGrow: 10,
      },

      [theme.breakpoints.down(SCREEN_SIZES.EXTRA_SMALL)]: {
        flexGrow: 1,
      },

      '& $hidden': {
        animation: '$descriptionDelayedFadeIn 0.8s forwards',
      },
    },
  },

  tickets: {
    ...productItem,

    '&::before': {
      ...mask,
      backgroundColor: '#571c36',
    },
  },

  travel: {
    ...productItem,

    '&::before': {
      ...mask,
      backgroundColor: '#2f0919',
    },
  },

  one: {
    ...productItem,

    '&::before': {
      ...mask,
      backgroundColor: '#3f3037',
    },
  },

  inside: {
    position: 'relative',
    padding: '0 0 6rem 3rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: '95%',

    [theme.breakpoints.down(SCREEN_SIZES.EXTRA_LARGE)]: {
      padding: '0 0 5rem 3rem',
    },

    [theme.breakpoints.down(SCREEN_SIZES.MEDIUM)]: {
      padding: '0 0 2rem 3rem',
    },
  },

  hidden: {
    color: theme.palette.common.white,
    position: 'absolute',
    width: '350px',
    opacity: 0,
    right: 0,
    bottom: 50,

    [theme.breakpoints.down(SCREEN_SIZES.MEDIUM)]: {
      width: '200px',
    },

    [theme.breakpoints.down(SCREEN_SIZES.SMALL)]: {
      width: '90%',
    },

    [theme.breakpoints.down(SCREEN_SIZES.EXTRA_SMALL)]: {
      display: 'none',
    },

    '& p': {
      fontSize: '17px',

      '&:last-child': {
        textAlign: 'right',
        textDecoration: 'underline',
        paddingTop: '1rem',
      },
    },
  },

  '@keyframes descriptionDelayedFadeIn': {
    '0%': {
      opacity: 0,
    },
    '50%': {
      opacity: 0,
    },
    '100%': {
      opacity: 1,
    },
  },
});

export default styles;
