import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import { UserStorage } from "./Contexts/UserContext";

function App() {
  return (
    <div className="App">
      <Router>
        <UserStorage>
          <Header />
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/login/*" component={Login} />
          </Route>
          <Footer />
        </UserStorage>
      </Router>
    </div>
  );
}

export default App;
