// import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Pages from "./components/pages/Pages";
import Polictics from "./components/pages/Politics";
import Business from "./components/pages/Business";
import Categories from "./components/pages/Categories";
// import Carausal from "./components/Carausal/Carausal";
// import Post from "./components/Post/Post";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "./components/pages/Home";
import LoginPage from "./components/pages/LoginPage";
import { useEffect, useState } from "react";
import Signup from "./components/pages/Signup";
function App() {
  const navigate = useNavigate();
  const signUp = useSelector((state) => state.loggedIn.signUp);
  const inputToggle = useSelector((state) => state.inputToggle.toggleInput);
  const [hideHeader, setHideHeader] = useState(false);
  const loggedIn = useSelector((state) => state.loggedIn.isLoggedIn);
  useEffect(() => {
    !loggedIn && navigate("/login");
  }, [loggedIn]);

  return (
    <>
      <div
        className={
          !hideHeader ? "mt-5 mx-20 px-10" : "section-login section-body"
        }
      >
        {!hideHeader && <Nav />}
        {!hideHeader && <Pages />}
        {/* <Carausal />
          <Post /> */}
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/politics" element={<Polictics />}></Route>
          <Route exact path="/categories" element={<Categories />}></Route>
          <Route exact path="/business" element={<Business />}></Route>
          <Route
            exact
            path="/login"
            element={<LoginPage setHideHeader={setHideHeader} />}
          ></Route>
          <Route
            exact
            path="/signup"
            element={<Signup setHideHeader={setHideHeader} />}
          ></Route>
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
