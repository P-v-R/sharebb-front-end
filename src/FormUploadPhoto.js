import React, { useState, useEffect } from "react"
import ShareBnBApi from "./api.js";


/** SimpleForm
 * 
 * state: file
 * 
 * simple form to upload file 
 */
function FormUploadPhoto({ goBack, uploadPhoto, photoFormData }) {
  const [currFormData, setCurrFormData] = useState(photoFormData);
  console.log("SimpleFile mounted")

  async function handleSubmit(evt) {
    evt.preventDefault()
    // console.log("event file ==>", file)
    await uploadPhoto(currFormData);
  }
  function handleChange(evt) {
    setCurrFormData(evt.target.files[0]);
  }

  function handleBack(evt) {
    goBack(currFormData);
  }

    //TODO save uploaded photo before submit if we go back on the form
  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data" >
      
      <input onChange={handleChange} name="file" type="file" accept="image/*" />
      <div ClassName="row">
      <button onClick={handleBack}>Go Back</button>
      <button type="submit">SUBMIT</button>
      </div>
    </form>
  )
}
// very important attr we will need on form // look for req.files 
export default FormUploadPhoto;