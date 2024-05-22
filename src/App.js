import { useState } from "react";
import "./App.css";
// import { BrowserRouter, Routes, Route } from "react-router-sdom";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/TextForm";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2500);
  };
  let darkClick = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#023020";
      showAlert("Dark mode has been enabled", "success");
    }
  };
  return (
    <>
      {/* //   <Router>
        
    //     
    //     <div className="container my-3"></div>
    //     <Routes>
    //       <Route
    //         exact
    //         path="/" */}
      <Navbar title="TexYze" mode={mode} darkClick={darkClick} />
      <Alert alert={alert} />
      <Textform mode={mode} showAlert={showAlert} />
      {/* //     />
      //     <Route exact path="/about" element={<About />} />
      //   </Routes>
      // </Router> */}
    </>
  );
}
export default App;
