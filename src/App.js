import NavigationBar from "./NavigationBar";
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavigationBar />
      <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
// very important attr we will need on form // look for req.files 