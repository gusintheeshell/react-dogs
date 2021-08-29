import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route>
          <Route path="/" element={<Home />} />
          <Route path="/login/*" component={Login} />
        </Route>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
