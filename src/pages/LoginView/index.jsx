const LoginView = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <form>
        <label>
          Email
          <input type="text" />
        </label>
        <label>
          Password
          <input type="text" />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginView;
