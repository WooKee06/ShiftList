import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavigateBar from "./widgets/NavigateBar/ui/NavigateBar";
import Header from "./widgets/header/ui/Header";
import "./index.scss";
import Background from "./widgets/background/ui/Background";

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
      <NavigateBar />
      <Background />
    </>
  );
}

export default App;
