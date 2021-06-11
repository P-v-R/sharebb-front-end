import React, { useState, useEffect } from "react"
import ShareBnBApi from "./api.js";


/**FormUploadPhoto Component
 * 
 * Props:
 * - photoFormData {}
 * - goBack
 * - goForward()
 * - submit()
 * 
 * ListingAddForm -> FormUploadPhoto
 * EditListingPage -> FormUploadPhoto
 */

 //TODO save uploaded photo before submit if user leaves this form page
function FormUploadPhoto({ goBack, photoFormData, submit }) {
  const [currFormData, setCurrFormData] = useState(photoFormData);
  console.log("SimpleFile mounted")

  async function handleSubmit(evt) {
    evt.preventDefault()
    submit(currFormData);
  }
  function handleChange(evt) {
    setCurrFormData(evt.target.files[0]);
  }

  function handleBack(evt) {
    goBack(currFormData);
  }

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data" >
      
      <input onChange={handleChange} name="file" type="file" accept="image/*" />
      <div className="row">
        <div className="col-3">
      <button className="Form-button-fb" onClick={handleBack}>←</button>
      </div>
      <div className="col-5 offset-4">
      <button className="Form-button-submit" onClick={handleSubmit} type="submit">SUBMIT</button>
      </div></div>
    </form>
  )
}
// very important attr we will need on form // look for req.files 
export default FormUploadPhoto;