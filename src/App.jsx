import { useState, useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import "./App.css";

function App() {
  const [user, setUser] = useState({});
  return (
    <div className="wrapper">
      <Navbar />
    </div>
  );
}

export default App;
