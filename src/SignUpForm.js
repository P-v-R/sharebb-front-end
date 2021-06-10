import { useState } from "react";
import Error from "./Error";

import { Form } from "react-bootstrap";

const initialSignUpFormData = {
  username: "",
  firstName: "",
  lastName: "",
  password: "",
  email: ""
}

/** SignUpForm Component
 * 
 * Props: 
 * - signUp()
 * 
 * State:
 * - signUpFormData: {}
 * - errors: null or []
 * 
 * Routes -> LoginForm
 */
function SignUpForm({ signUp }) {
  const [signUpFormData, setSignUpFormData] = useState(initialSignUpFormData);
  const [errors, setErrors] = useState(null);

  function handleChange(evt) {
    const { name, value } = evt.target;
    setSignUpFormData(currData => ({ ...currData, [name]: value }));
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      await signUp(signUpFormData);
    } catch (err) {
      setErrors(err);
    }
  }

  return (
    <div className="SignUpForm">
      <div className="row">
        <div className="col-1 col-sm-2 col-lg-4"></div>
        <div className="col-10 col-sm-8 col-lg-4">
      <h3>Sign Up</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Label htmlFor="signUpForm-first-name">First Name</Form.Label>
        <Form.Control
          id="signUpForm-first-name"
          name="firstName"
          type="text"
          autoComplete="first-name"
          onChange={handleChange}
          value={signUpFormData.firstName}
          required
        />
        <Form.Label htmlFor="signUpForm-last-name">Last Name</Form.Label>
        <Form.Control
          id="signUpForm-last-name"
          name="lastName"
          type="text"
          autoComplete="last-name"
          onChange={handleChange}
          value={signUpFormData.lastName}
          required
        />
        <Form.Label htmlFor="signUpForm-email">Email</Form.Label>
        <Form.Control
          id="signUpForm-email"
          name="email"
          type="text"
          autoComplete="email"
          onChange={handleChange}
          value={signUpFormData.email}
          required
        />
        <Form.Label htmlFor="signUpForm-password">Password</Form.Label>
        <Form.Control
          id="signUpForm-password"
          name="password"
          type="password"
          autoComplete="current-password"
          onChange={handleChange}
          value={signUpFormData.password}
          required
        />
        <button className="btn" type="submit">Sign Up!</button>
      </Form>
      {errors && errors.map(e => <Error error={e} />)}
      </div>
        <div className="col-1 col-sm-2 col-lg-4"></div>
      </div>
      </div>
  );
}

export default SignUpForm;