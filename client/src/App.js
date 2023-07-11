import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contacts from "./pages/contacts/contacts";
import NewContact from "./pages/newContact/newContact"
import Header from "./components/header/header";



function App() {
  return(
    <div>
      <Header />
      <Router>
          <Routes>
              <Route exact path="/" element={<Contacts />}/>
              <Route exact path="/newContact" element={<NewContact />}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
