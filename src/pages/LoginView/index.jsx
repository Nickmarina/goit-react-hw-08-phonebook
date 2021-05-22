import useStyles from './styles';

const LoginView = () => {
  const classes = useStyles();
  return (
    <div>
      <h1 className={classes.mainTitle}>Login Page</h1>
      <form className={classes.form}>
        <label className={classes.inputContainer}>
          <h3 className={classes.title}>Email</h3>
          <input className={classes.input} type="text" />
        </label>
        <label className={classes.inputContainer}>
          <h3 className={classes.title}>Password</h3>
          <input className={classes.input} type="text" />
        </label>
        <button className={classes.btn} type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginView;
