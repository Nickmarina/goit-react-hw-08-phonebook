import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  textContainer: {
    textAlign: 'center',
  },
  title: {
    fontSize: 35,
    color: 'indigo',
  },

  text: {
    width: 800,
    marginLeft: 'auto',
    marginRight: 'auto',
    color: 'dimgray',
  },
});

export default useStyles;
