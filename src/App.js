import { Route, Routes } from "react-router-dom";
import MainRouter from "./App/Routers/MainRouter";
import Footer from "./Components/Partials/Footer";
import Header from "./Components/Partials/Header";
import MainSlider from "./Components/Partials/Slider/MainSlider";
import { GlobalStyles } from "./Styles/Globals";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/" element={<MainSlider />} />
      </Routes>
      <MainRouter />
      <Footer />
    </>
  );
}

export default App;
