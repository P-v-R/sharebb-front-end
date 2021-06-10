import React, { useState, useEffect } from "react"
import ShareBnBApi from "./api.js";


/** SimpleForm
 * 
 * state: file
 * 
 * simple form to upload file 
 */
function UploadPhotoForm() {
  const [file, setFile] = useState(null)
  console.log("SimpleFile mounted")
  async function submitFile(){
    let resp = await ShareBnBApi.uploadImage(file);
    // console.log("resp =====>", resp)
  }
  async function handleSubmit(evt) {
    evt.preventDefault()
    // console.log("event file ==>", file)
    await submitFile();
  }
  function handleChange(evt) {
    setFile(evt.target.files[0])
  }
  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data" >
      <input onChange={handleChange} name="file" type="file" accept="image/*" />
      <button type="submit">SUBMIT</button>
    </form>
  )
}
// very important attr we will need on form // look for req.files 
export default UploadPhotoForm;