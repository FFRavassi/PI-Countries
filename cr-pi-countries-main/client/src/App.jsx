import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./views/Landing/Landing";
import HomePage from "./views/HomePage/HomePage";
import Detail from "./views/Detail/Detail";
import FormActivities from "./views/FormActivities/FormActivities";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" Component={Landing} />
          <Route path="/home" Component={HomePage} />
          <Route path="/detail:id" Component={Detail} />
          <Route path="/newactivity" Component={FormActivities} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
