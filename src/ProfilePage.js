import { useState } from "react";
import Error from "./Error";
import { Form } from "react-bootstrap";
import ProfileEditForm from "./ProfileEditForm";


/**ProfilePage Component
 * 
 * Props
 * - currUser {}
 * 
 * State
 * -profileFormData {}
 * -errors []
 * 
 * ProfilePage -> ProfileEditForm
*/

//TODO add info about bookings and listings??
function ProfilePage({ currUser }) {
  const [errors, setErrors] = useState(null);



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
