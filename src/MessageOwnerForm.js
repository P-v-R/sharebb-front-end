import { useState } from "react";
import ShareBnBApi from "./api";
import Error from "./Error";
import "./MessageOwnerForm.css";

/**MessageOwnerForm component
 * 
 * Props:
 * - owner {}
 * - currUser {}
 * - listing {}
 * 
 * State:
 * - message = ""
 * - errors []
 * - msgSuccess ""
 * 
 * ListingPage -> MessageOwnerForm
 */
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
  <form className="MessageOwnerForm" onSubmit={handleSubmit}>
            <h2 className="MessageOwnerForm-title">Send a Message to {owner.firstName}</h2>
            <textarea className="MessageOwnerForm-input"onChange={handleChange} type="text" value={message}/>
            <br/>
            <button className="MessageOwnerForm-button">Send</button>
            {msgSuccess && <div className="alert alert-success">{msgSuccess}</div>}
            {errors && <Error errors={errors}/>}
          </form>  
  )
  
}

export default MessageOwnerForm;