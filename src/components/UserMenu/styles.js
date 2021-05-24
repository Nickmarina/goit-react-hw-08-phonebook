import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
    marginRight: 10,
  },
  title: {
    margin: 0,
    padding: 0,
    marginRight: 20,
    fontSize: 20,
    fontWeight: 700,
    color: 'darkMagenta',
    textDecoration: 'none',
  },
  btn: {
    width: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: 'lavender',
  },
  btnText: {
    color: 'darkMagenta',
    fontWeight: 700,
  },
});

export default useStyles;
