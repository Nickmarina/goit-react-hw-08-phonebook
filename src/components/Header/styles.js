import { createUseStyles } from 'react-jss';
const useStyles = createUseStyles({
  header: {
    margin: 0,
    padding: 0,
    top: 0,
    left: 0,
    position: 'sticky',
    zIndex: 1,
    minHeight: 64,
    marginTop: 0,
    paddingBottom: 15,
    color: '#fff',
    backgroundColor: 'mediumpurple',
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 40,
  },
  icon: {
    marginLeft: 15,
  },
});

export default useStyles;
