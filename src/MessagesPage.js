import { useEffect, useState } from "react";
import { useParams } from "react-router";
import ShareBnBApi from "./api";
import MessagesList from "./MessagesList";
import "./MessagesPage.css";


/**MessagesPage Component
 * 
 * Props
 * - currUser {}
 * 
 * State:
 * - messages {} [] ???
 * - isLoading boolean
 * - currMessageId integer
 * - errors []
 * - filteredBy ""
 * 
 * Routes -> MessagesPage -> MessagesList
 */
function MessagesPage({currUser}) {
  let { id } = useParams();
  const [messages, setMessages] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [currMessageId, setCurrMessageId] = useState(+id);
  const [errors, setErrors] = useState();
  const [filteredBy, setFilteredBy] = useState("bookings");

  useEffect(function fetchMessagesOnMount() {
    async function fetchMessages() {
      try {
        let messages = await ShareBnBApi.getMessages(currUser.id);
        setMessages(messages);
        setIsLoading(false);
      } catch (err) {
        setErrors(errors);
      }
    }
    fetchMessages();
  },[])

if (isLoading) {
  return (<p>Loading...</p>)
}


console.log(messages);
return (
  <div className="row">
    <div className="col-10 offset-1">
    <h1>My Messages</h1>
    <div className="row">
        <button className="message-button-bookings col-6"><h2>re: my bookings</h2></button>
        <button className="message-button-listings col-6"><h2>re: my listings</h2></button>
    </div>
    <div className="row">
    <MessagesList currUser={currUser} messages={messages.sent} currMessageId={currMessageId} filteredBy={filteredBy}/>
    </div>
    </div>
    </div>
)
}

export default MessagesPage;