import { useState } from "react";
import Error from "./Error";
import { Form } from "react-bootstrap";
import ProfileEditForm from "./ProfileEditForm";

function ProfilePage({ currUser }) {
  const [loginFormData, setLoginFormData] = useState({ username: "", password: "" })
  const [errors, setErrors] = useState(null);

  function handleChange(evt) {
    const { name, value } = evt.target;
    setLoginFormData(currData => ({ ...currData, [name]: value }));
  }



  return (
    <div className="ProfilePage">
      <div className="row">
        <div className="col-1 col-sm-1 col-lg-2">
        </div>
        <div className="col-10 col-sm-10 col-lg-4">
          <h1>My Profile</h1>
          <h2>Listings</h2>
          <h2>Bookings</h2>
        </div>
        <div className="col-10 col-sm-10 col-lg-4">
          <ProfileEditForm currUser={currUser}/>
        </div>
        <div className="col-1 col-sm-1 col-lg-2"></div>
      </div>
    </div>
  );
}

export default ProfilePage;
