import React, { useState } from "react"


/** SimpleForm
 * 
 * state: file
 * 
 * simple form to upload file 
 */
function SimpleForm() {
  const [file, setFile] = useState(null)

  console.log("SimpleFile mounted")

  function handleSubmit(evt) {
    evt.preventDefault()
    console.log("event file ==>", file)
  }

  function handleChange(evt) {
    setFile(evt.target.files[0])
  }

  return (
    <form onSubmit={handleSubmit} >
      <input onChange={handleChange} name="file" type="file" />
      <button type="submit">SUBMIT</button>
    </form>
  )

}


// very important attr we will need on form // look for req.files 


export default SimpleForm;