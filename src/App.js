import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Schedules from "./Schedules";
import RSVP from "./RSVP";
import Gallery from "./Gallery";
import GiftRegistery from "./GiftRegistery";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/FunZippy-Assignment" Component={Home} />
          <Route path="/FunZippy-Assignment/home" Component={Home} />
          <Route
            exact
            path="/FunZippy-Assignment/schedules"
            Component={Schedules}
          />
          <Route exact path="/FunZippy-Assignment/rsvp" Component={RSVP} />
          <Route
            exact
            path="/FunZippy-Assignment/gallery"
            Component={Gallery}
          />
          <Route
            exact
            path="/FunZippy-Assignment/gift-registery"
            Component={GiftRegistery}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
