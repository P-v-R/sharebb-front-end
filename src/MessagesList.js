import "./MessagesList.css";
import { Link } from "react-router-dom";



/**MessagesList Component
 * 
 * Props:
 * - currUser {}
 * - messages {} [] ????? TODO
 * - currMessageId ""
 * - filteredBy ""
 * 
 * MessagesPage => MessagesList
 */
function MessagesList({ currUser, messages, currMessageId, filteredBy }) {
 //TODO show different messages needs work....
  
  
return (
  <div className={`MessagesList ${filteredBy}`}>
    <div className="row">
      <div className="col-4">
        <ul>
        {messages.map(msg => {
        if (msg.listingId === +currMessageId) {
        return (<Link to={`/my-messages/bookings/${msg.listingId}`}>
      <li className="MessagesList-li current">Booking: {msg.listingId}</li>

        </Link>

        ) 
        }
        else {
          return (<Link to={`/my-messages/bookings/${msg.listingId}`}>
          <li className="MessagesList-li">Booking: {msg.listingId}</li>
    
            </Link>
        )}})}
        </ul>
      </div>
      <div className="col-8">
        <div className="Message">
        <ul>
        {messages.map(msg => {
        if (msg.fromUserId === currUser.id) {
          return (
          <div className="row">
            <li className="MessagesList-msg">
              {msg.sentAt}
              <br />
              {msg.fromUserId}: {msg.message}
              </li>
          </div>)
        }
        else {
          return <li className="MessagesList-msg">{msg.message}</li>
        }})
      }
      </ul>
      </div>
      </div>
    </div>
  </div>
)
}

export default MessagesList;