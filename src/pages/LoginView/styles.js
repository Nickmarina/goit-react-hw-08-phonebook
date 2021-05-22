import { createUseStyles } from 'react-jss';
const useStyles = createUseStyles({
  mainTitle: {
    textAlign: 'center',
    fontSize: 25,
    color: 'indigo',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
  },
  inputContainer: {
    display: 'inline-flex',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 350,
    marginBottom: 20,
  },
  title: {
    margin: 0,
    padding: 0,
    fontSize: 20,
    color: 'lightslategray',
    marginRight: 'auto',
  },
  input: {
    marginLeft: 'auto',
    width: 250,
    padding: 5,
  },
  btn: {
    width: 100,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 5,
    borderRadius: '10%',
    color: 'white',
    backgroundColor: 'thistle',
  },
});

export default useStyles;
