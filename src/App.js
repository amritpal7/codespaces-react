import VendingMachine from "./Components/VendingMachine";
import Soda from "./Components/Soda";
import FreshSardines from "./Components/FreshSardines";
import Chips from "./Components/Chips";
import {BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";

import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <nav>
      <NavLink exact activeClassName="active" to="/">Machine</NavLink>
      <NavLink exact activeClassName="active" to="/chips">Chips</NavLink>
      <NavLink exact activeClassName="active" to="/soda">Soda</NavLink>
      <NavLink exact activeClassName="active" to="/fresh-sardines">Fresh Sardines</NavLink>
      </nav>
      <Routes>
        <Route exact path="/" element={<VendingMachine />} />
        <Route exact path="/soda" element={<Soda />} />
        <Route exact path="/chips" element={<Chips />} />
        <Route exact path="/fresh-sardines" element={<FreshSardines />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
