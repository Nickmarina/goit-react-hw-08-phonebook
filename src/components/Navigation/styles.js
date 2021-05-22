import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  nav: {
    display: 'flex',
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 10,
    paddingTop: 20,
    justifyContent: 'space-between',
  },
  link: {
    margin: 0,
    padding: 0,
    marginRight: 10,
    marginLeft: 10,
    fontSize: 20,
    fontWeight: 700,
    color: 'white',
    textDecoration: 'none',
  },
  linkActive: {
    color: 'darkMagenta',
  },
});

export default useStyles;
