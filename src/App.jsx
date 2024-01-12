import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { MainPage } from "./page/MainPage";
import { SubPageOne } from "./page/SubPageOne";
import { SubPageTwo } from "./page/SubPageTwo";
function App() {
  return (
    <>
      <Router>
        <header>
          
          <nav>
            <h1>Vigo</h1>
            <h1>Oppgave</h1>
            <div className="button"><Link to="/">Home</Link>
            <Link to="/subPageOne">Post</Link>
            <Link to="/subPageTwo">User</Link></div>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/subPageOne" element={<SubPageOne />} />
          <Route path="/subPageTwo" element={<SubPageTwo />} />
        </Routes>
        <footer>Sabine, sabine10.kodehode@gmail.com</footer>
      </Router>
    </>
  );
}

export default App;
