import useStyles from './styles';

const RegisterView = () => {
  const classes = useStyles();
  return (
    <div>
      <h1 className={classes.mainTitle}>Register Page</h1>
      <form className={classes.form}>
        <label className={classes.inputContainer}>
          <h3 className={classes.title}>Name</h3>
          <input className={classes.input} type="text" />
        </label>
        <label className={classes.inputContainer}>
          <h3 className={classes.title}>Email</h3>
          <input className={classes.input} type="text" />
        </label>
        <label className={classes.inputContainer}>
          <h3 className={classes.title}>Password</h3>
          <input className={classes.input} type="text" />
        </label>
        <button className={classes.btn} type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterView;
