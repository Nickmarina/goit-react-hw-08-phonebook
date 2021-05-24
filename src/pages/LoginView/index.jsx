import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/auth-operations';
import useStyles from './styles';

const LoginView = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeEmail = e => setEmail(e.target.value);
  const handleChangePassword = e => setPassword(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    dispatch(login(user));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1 className={classes.mainTitle}>Login</h1>
      <form className={classes.form} onSubmit={handleSubmit}>
        <label className={classes.inputContainer}>
          <h3 className={classes.title}>Email</h3>
          <input
            className={classes.input}
            type="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleChangeEmail}
          />
        </label>
        <label className={classes.inputContainer}>
          <h3 className={classes.title}>Password</h3>
          <input
            className={classes.input}
            type="text"
            value={password}
            placeholder="Enter your password"
            onChange={handleChangePassword}
          />
        </label>
        <button className={classes.btn} type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginView;
