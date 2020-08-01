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
  },

  product: {
    display: 'flex',
    flexGrow: 1,
    cursor: 'pointer',
    transition: '0.4s all ease-in-out',

    '&:hover': {
      flexGrow: 6,

      '& $hidden': {
        animation: '$expandDescription 0.8s forwards',
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
    overflow: 'hidden',
    width: '95%',
    height: '100%',
  },

  hidden: {
    color: theme.palette.common.white,
    width: 0,
    height: 0,
    position: 'absolute',
    right: 0,

    '& p': {
      fontSize: '17px',

      '&:last-child': {
        textAlign: 'right',
        textDecoration: 'underline',
      },
    },
  },

  '@keyframes expandDescription': {
    '0%': {
      width: 0,
      height: '18%',
    },
    '50%': {
      width: 0,
      height: '18%',
    },
    '100%': {
      width: '30%',
      height: '18%',
    },
  },
});

export default styles;
