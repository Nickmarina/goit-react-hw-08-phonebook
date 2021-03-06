import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/auth-operations';
import useStyles from './styles';

const RegisterView = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeName = e => setName(e.target.value);
  const handleChangeEmail = e => setEmail(e.target.value);
  const handleChangePassword = e => setPassword(e.target.value);

  const handleSubmit = e => {
    e.preventDefault();
    const user = {
      name,
      email,
      password,
    };
    dispatch(register(user));
    setName('');
    setEmail('');
    setPassword('');
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
            placeholder="Enter your name"
          />
        </label>
        <label className={classes.inputContainer}>
          <h3 className={classes.title}>Email</h3>
          <input
            className={classes.input}
            type="email"
            value={email}
            onChange={handleChangeEmail}
            placeholder="Enter your email"
          />
        </label>
        <label className={classes.inputContainer}>
          <h3 className={classes.title}>Password</h3>
          <input
            className={classes.input}
            type="text"
            value={password}
            onChange={handleChangePassword}
            placeholder="Enter a password (min 7 symbols)"
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
