import React, {useState} from "react"

function SimpleForm() {
  const [file, setFile] = useState(null)
  console.log("SimpleFile mounted")

  function handleSubmit(evt){
    console.log("event file ==>", evt.target.file[0])
    setFile(evt.target.file[0])
  }
  
  return (
    <form>
      <input name="file" type="file" />
      <button type="submit" onSubmit={handleSubmit}>SUBMIT</button>
    </form>
    )

}

export default SimpleForm;