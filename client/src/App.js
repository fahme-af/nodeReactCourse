import './App.css';
import { BrowserRouter as Router, Route, Routes as Switch, Link } from "react-router-dom"
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";

function App() {
  return <div className="App">
    <Router>
      <Link to="/">Home</Link>
      <Link to="/create-post">Create A Post</Link>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Switch>
    </Router>
  </div>;
}

export default App;
