const styles = theme => ({
  root: {
    padding: '2rem',
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',

    '& svg': {
      height: '42px',
      color: theme.palette.common.black,

      '& tspan': {
        color: theme.palette.common.black,
      },
    },
  },

  socialIcons: {
    '& svg': {
      opacity: 0.4,
      transition: 'all 0.6s ease-out',

      '&:hover': {
        opacity: 1,
      },
    },
  },
});

export default styles;
