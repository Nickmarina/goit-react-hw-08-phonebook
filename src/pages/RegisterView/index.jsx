import { useState } from 'react';
import useStyles from './styles';

const RegisterView = () => {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeName = e => setName(e.target.value);
  const handleChangeEmail = e => setEmail(e.target.value);
  const handleChangePassword = e => setPassword(e.target.value);
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div>
      <h1 className={classes.mainTitle}>Create Account</h1>
      <form className={classes.form} onSubmit={handleSubmit}>
        <label className={classes.inputContainer}>
          <h3 className={classes.title}>Name</h3>
          <input
            className={classes.input}
            type="text"
            value={name}
            onChange={handleChangeName}
          />
        </label>
        <label className={classes.inputContainer}>
          <h3 className={classes.title}>Email</h3>
          <input
            className={classes.input}
            type="email"
            value={email}
            onChange={handleChangeEmail}
          />
        </label>
        <label className={classes.inputContainer}>
          <h3 className={classes.title}>Password</h3>
          <input
            className={classes.input}
            type="text"
            value={password}
            onChange={handleChangePassword}
          />
        </label>
        <button className={classes.btn} type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterView;
