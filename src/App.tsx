import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavigateBar from "./widgets/NavigateBar/ui/NavigateBar";
import Header from "./widgets/header/ui/Header";
import "./index.scss";
import Background from "./widgets/background/ui/Background";
import ProfilehPage from "./pages/ProfilePage";
import SearchPage from "./pages/SearchPage";
import ShiftsPage from "./pages/ShiftsPage";

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shifts" element={<ShiftsPage />} />
          <Route path="/profile" element={<ProfilehPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </div>
      <NavigateBar />
      <Background />
    </>
  );
}

export default App;
