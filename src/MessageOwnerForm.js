import { useState } from "react";

function MessageOwnerForm({ owner, currUser, listing, submit}) {
  const [message, setMessage] = useState("");
  function handleSubmit(evt) {
    evt.preventDefault();
  }

  function handleChange(evt) {
    setMessage(evt.target.value);
  }

  return (
  <form onSubmit={handleSubmit}>
            <h2>Send a Message to {owner.firstName}</h2>
            <input onChange={handleChange} type="text"/>
          </form>  
  )
  
}

export default MessageOwnerForm;