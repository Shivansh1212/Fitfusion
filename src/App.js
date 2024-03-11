import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Login from "./components/login";
import Registration from "./components/registration";
import Home from "./components/home";
import Workoutdays from "./components/workout_days";
import Workoutmuscles from "./components/workout_muscles";
import Diet from "./components/diet";
import Yoga from "./components/yoga";
import Analytics from "./components/analytics";

function App() {
  return (
    <div className="App ">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/workout/item1" element={<Workoutdays />} />
        <Route path="/workout/item2" element={<Workoutmuscles />} />
        <Route path="/diet" element={<Diet />} />
        <Route path="/yoga" element={<Yoga />} />
        <Route path="/analytics" element={<Analytics />} />
      </Routes>
    </div>
  );
}

export default App;
