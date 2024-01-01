import Nav1 from "./components/Nav1/Nav1";
import Nav2 from "./components/Nav2/Nav2";
import SideMenu from "./components/SideBarComponent/SideMenu";
import SignUp from "./components/Signup/SignUp";
import { Routes, Route, Navigate } from "react-router-dom";
// import SideMenu from "./components/SideBarComponent/SideMenu"
import LoginForm from "./components/logincomponent/LoginForm";
import MainTableContent from "./components/MainTable/MainTableContent"
import "./index.css";
import ContentWrapper from "./components/ContentWrapper/ContentWrapper";
// import LoginForm from "./components/logincomponent/LoginFormorm"
function App() {
  return (
    <div>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<LoginForm />} />
        <Route path="/body" element={<ContentWrapper />} />
      </Routes>
      {/* <LoginForm /> */}
      {/* <SideMenu /> */}
      {/* <Nav1 />
      <Nav2 />
      <MainTableContent /> */}
      {/* // <ContentWrapper /> */}
    </div>
  );
}

export default App;
