import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useContext } from "react";
import UserContext from "./contexts/UserContext";
import MainPage from "./MainPage";
import SignUpPage from "./SignUpPage";
import TodayPage from "./TodayPage";
import HabitsPage from "./HabitsPage";
import RecordPage from "./RecordPage";

export default function App() {
  const [infoUser, setInfoUser] = useState({});

  return (

    <UserContext.Provider value={{ infoUser, setInfoUser}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/today" element={<TodayPage />}/>
          <Route path="/habits" element={<HabitsPage />} />
          <Route path="/record" element={<RecordPage />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
