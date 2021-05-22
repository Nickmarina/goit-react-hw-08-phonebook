import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    minHeight: '100vh',
    width: '100%',
    boxSizing: 'border-box',
    backgroundColor: 'lavender',
  },
});

export default useStyles;
