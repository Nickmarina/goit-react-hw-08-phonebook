import { createUseStyles } from 'react-jss';
const useStyles = createUseStyles({
  form: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    marginBottom: 50,
  },
  inputContainer: {
    display: 'inline-flex',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: 365,
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  title: {
    margin: 0,
    padding: 0,
    fontSize: 25,
    color: 'lightslategray',
  },
  input: {
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
