const styles = theme => ({
  root: {
    backgroundColor: ({ background }) =>
      background || theme.palette.common.white,
    minHeight: '100vh',
    minWidth: '100vw',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
});

export default styles;
