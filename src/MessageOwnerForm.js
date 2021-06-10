import { useState } from "react";

function MessageOwnerForm({ owner, currUser, listing, submit, msgSuccess}) {
  const [message, setMessage] = useState("");
  function handleSubmit(evt) {
    evt.preventDefault();
    console.log("submitting message==>", message)
    submit(message);
  }

  function handleChange(evt) {
    setMessage(evt.target.value);
  }

  return (
  <form onSubmit={handleSubmit}>
            <h2>Send a Message to {owner.firstName}</h2>
            <input onChange={handleChange} type="text"/>
            <button>Send</button>
            {msgSuccess && <div className="alert alert-success">{msgSuccess}</div>}
          </form>  
  )
  
}

export default MessageOwnerForm;