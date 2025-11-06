import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavigateBar from "./widgets/NavigateBar/ui/NavigateBar";
import Header from "./widgets/header/ui/Header";
import "./index.scss";
import Background from "./widgets/background/ui/Background";
import ProfilehPage from "./pages/ProfilePage";
import SearchPage from "./pages/SearchPage";
import ShiftsPage from "./pages/ShiftsPage";
import { SkeletonTheme } from "react-loading-skeleton";
import { ToastContainer } from "react-toastify";
import OperationPage from "./pages/OperationPage";

function App() {
  return (
    <>
      <SkeletonTheme baseColor="#2a2a2a" highlightColor="#525252">
        <div className="wrapper">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shifts" element={<ShiftsPage />} />
            <Route path="/shifts/:operation" element={<OperationPage />} />
            <Route path="/profile" element={<ProfilehPage />} />
            <Route path="/search" element={<SearchPage />} />
          </Routes>
        </div>
        <NavigateBar />
        <Background />
      </SkeletonTheme>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}

export default App;
