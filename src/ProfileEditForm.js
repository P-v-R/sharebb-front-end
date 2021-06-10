import { useState } from "react";
import Error from "./Error";
import { Form } from "react-bootstrap";
function ProfileEditForm({ currUser }) {
  //TODO needs an endpoint 
  const [formData, setFormData] = useState({ firstName: currUser.firstName, lastName: currUser.lastName, bio: currUser.bio})
  const [errors, setErrors] = useState(null);

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(currData => ({ ...currData, [name]: value }));
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    console.log("profile edited")
  }

  return (
    <div className="ProfilePage">
      <h3>Edit My Profile</h3>
          <Form onSubmit={handleSubmit}>
          <Form.Label htmlFor="ProfileForm-email">Email</Form.Label>
          <p>{currUser.email}</p>
            <Form.Label htmlFor="ProfileForm-firstName">First Name</Form.Label>
            <Form.Control
              id="ProfileForm-firstName"
              name="firstName"
              type="text"
              onChange={handleChange}
              value={formData.firstName}
              required
            />
            <Form.Label htmlFor="ProfileForm-lastName">Last Name</Form.Label>
            <Form.Control
              id="ProfileForm-lastName"
              name="lastName"
              type="text"
              onChange={handleChange}
              value={formData.lastName}
              required
            />
            <Form.Label htmlFor="ProfileForm-bio">Bio</Form.Label>
            <Form.Control
              id="ProfileForm-bio"
              name="bio"
              type="text"
              onChange={handleChange}
              value={formData.bio}
              required
            />
            <Form.Label htmlFor="ProfileForm-password">Enter Password to Make Changes</Form.Label>
            <Form.Control
              id="ProfileForm-password"
              name="password"
              type="password"
              onChange={handleChange}
              autoComplete="current-password"
              value={formData.password}
              required
            />
            <button className="btn btn-primary" type="submit">Update My Profile</button>
          </Form>
          {errors && errors.map(e => <Error error={e} />)}
        </div>
  );
}

export default ProfileEditForm;
