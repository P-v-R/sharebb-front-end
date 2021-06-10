import NavigationBar from "./NavigationBar";
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";
import './App.css';

/** App Component
 * 
 * App -> NavigationBar
 *     -> Routes
 */
const currUser = {
    "id": 1,
    "firstName": "mo",
    "lastName": "enokida",
    "email": "mo@mo.com",
    "bio": "bio test",
    "isAdmin": false,
    "listings": [
      {
        "id": 1,
        "address": "123 test st",
        "unit": "A",
        "city": "Los Angeles",
        "state": "CA",
        "zip": "90064",
        "country": "USA",
        "ownerId": 1,
        "title": "mo test listing",
        "description": "this is my listing description",
        "photoUrl": "1.jpg",
        "pricePerHour": "50.50",
        "minHours": 2
      }
    ],
    "bookings": [
      {
        "id": 1,
        "listingId": 2,
        "renterId": 1,
        "startDate": "2021-07-20T07:00:00.000Z",
        "numHours": 4,
        "totalPrice": "400"
      },
      {
        "id": 2,
        "listingId": 2,
        "renterId": 1,
        "startDate": "2021-07-21T07:00:00.000Z",
        "numHours": 2,
        "totalPrice": "200"
      }
    ]
};

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavigationBar currUser={currUser} />
            <Routes currUser={currUser} />
      </BrowserRouter>
    </div>
  );
}

export default App;
// very important attr we will need on form // look for req.files