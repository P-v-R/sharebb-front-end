import React, { useState, useEffect } from "react"
import ShareBnBApi from "./api.js"






/** SimpleForm
 * 
 * state: file
 * 
 * simple form to upload file 
 */
function SimpleForm() {
  const [file, setFile] = useState(null)

  console.log("SimpleFile mounted")
  async function submitFile(){
    let resp = await ShareBnBApi.uploadImage(file)
    // console.log("resp =====>", resp)
  }

  function handleSubmit(evt) {
    evt.preventDefault()
    // console.log("event file ==>", file)
    submitFile();
  }

  function handleChange(evt) {
    setFile(evt.target.files)
  }

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data" >
      <input onChange={handleChange} name="file" type="file" />
      <button type="submit">SUBMIT</button>
    </form>
  )

}


// very important attr we will need on form // look for req.files 


export default SimpleForm;