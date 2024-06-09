import { useState, useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import Menu from "./components/menu/Menu";

import "./App.css";

function App() {
  const [user, setUser] = useState({});

  return (
    <div className="wrapper">
      <Navbar />
      <Menu />
    </div>
  );
}

export default App;
