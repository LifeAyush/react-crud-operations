import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Add, Edit, Dashboard } from "./components"

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard/>} />
          <Route exact path="/edit" element={<Edit />} />
          <Route path="/add" element={<Add/>} />
        </Routes>
    </Router>
  );
}

export default App;
