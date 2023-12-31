import { Routes, Route, useLocation } from "react-router-dom";
import Landing from "./views/Landing/Landing";
import HomePage from "./views/HomePage/HomePage";
import Detail from "./views/Detail/Detail";
import FormActivities from "./views/FormActivities/FormActivities";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/" && <NavBar />}
      <Routes>
        <Route path="/" Component={Landing} />
        <Route path="/home" Component={HomePage} />
        <Route path="/home/:id" Component={Detail} />
        <Route path="/activities" Component={FormActivities} />
      </Routes>
    </>
  );
}

export default App;
