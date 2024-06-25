import Template from "../Components/Template";

function Login() {
  return (
    <div>
      <label htmlFor="email">Email Address<sup>*</sup></label>
      <br />
      <input type="email" id="email" name="email" placeholder="Enter email address" />
      <br />
      <label htmlFor="password">Password<sup>*</sup></label>
      <br />
      <input type="password" id="password" name="password" placeholder="Enter password" />
    </div>
  );
}

export default Login;
