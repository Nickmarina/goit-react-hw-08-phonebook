const RegisterView = () => {
  return (
    <div>
      <h1>Register Page</h1>
      <form>
        <label>
          Name
          <input type="text" />
        </label>
        <label>
          Email
          <input type="text" />
        </label>
        <label>
          Password
          <input type="text" />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterView;
