import { createUseStyles } from 'react-jss';
const useStyles = createUseStyles({
  title: {
    top: 0,
    left: 0,
    position: 'sticky',
    zIndex: 1100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 64,
    marginTop: 0,
    paddingRight: 24,
    paddingLeft: 24,
    paddingTop: 12,
    paddingBottom: 12,
    color: '#fff',
    backgroundColor: 'mediumpurple',
  },
  icon: {
    marginLeft: 15,
  },
});

export default useStyles;
