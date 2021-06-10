import { useState } from "react";
import ShareBnBApi from "./api";
import Error from "./Error";

function MessageOwnerForm({ owner, currUser, listing}) {
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState(null);
  const [msgSuccess, setMsgSuccess] = useState(null);

  async function handleSubmit(evt) {
    evt.preventDefault();
    console.log("submitting msg")
    console.log({
      "listingId": listing.id,
      "fromUserId": currUser.id,
      "toUserId": owner.id,
      "message": message
    })
    try {
      let msgData = {
        "listingId": listing.id,
        "fromUserId": currUser.id,
        "toUserId": owner.id,
        "message": message
      };
      console.log({
        "listingId": listing.id,
        "fromUserId": currUser.id,
        "toUserId": owner.id,
        "message": message
      })
     let msg = await ShareBnBApi.sendMessage(msgData)
      setMsgSuccess('Message Sent!')
      setMessage("");
      console.log(msg);
    } catch (err) {
      console.log("error")
      setErrors(err);
    }
  }

  function handleChange(evt) {
    setMessage(evt.target.value);
  }

  return (
  <form onSubmit={handleSubmit}>
            <h2>Send a Message to {owner.firstName}</h2>
            <input onChange={handleChange} type="text" value={message}/>
            <button>Send</button>
            {msgSuccess && <div className="alert alert-success">{msgSuccess}</div>}
            {errors && <Error errors={errors}/>}
          </form>  
  )
  
}

export default MessageOwnerForm;