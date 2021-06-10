import NavigationBar from "./NavigationBar";
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";
import './App.css';

function App() {
  const currUser = {
    "id": 1,
    "firstName": "mo",
    "lastName": "enokida",
    "email": "mo@mo.com",
    "bio": "bio test",
    "isAdmin": false
  };

  return (
    <div className="App">
      <BrowserRouter>
      <NavigationBar />
      <Routes currUser={currUser}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
// very important attr we will need on form // look for req.files 