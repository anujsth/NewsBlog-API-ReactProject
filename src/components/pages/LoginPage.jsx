import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logIn, loggedInActive } from "../../features/LoggedIn/loggedInSlice";
import "./Login.css";

const LoginPage = (props) => {
  const details = useSelector((state) => {
    return state.userDetails.userDetail;
  });
  const [userData, setUserData] = useState({
    name: "",
    password: "",
  });
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("userDetail"));
    setData(data);
  }, [details]);

  props.setHideHeader(true);

  const setUsername = (event) => {
    setUserData((prevState) => {
      return { ...prevState, name: event.target.value };
    });
  };

  const setPassword = (event) => {
    setUserData((prevState) => {
      return { ...prevState, password: event.target.value };
    });
  };
  const navigateToSignup = () => {
    navigate("/signup");
  };

  const loginValid = () => {
    dispatch(loggedInActive({ userData }));
    dispatch(logIn());
    props.setHideHeader(false);
    navigate("/");
  };

  const loginInValid = () => {
    setUserData({
      name: "",
      password: "",
    });

    navigate("/login");
  };
  const Login = (event) => {
    event.preventDefault();

    data.filter(
      (item) =>
        userData.name === item.name && userData.password === item.password
    ).length === 0
      ? loginInValid()
      : loginValid();
  };
  return (
    <>
      <section class="main">
        <div class="login-container">
          <p class="title">Welcome back</p>
          <div class="separator"></div>
          <p class="welcome-message">
            Please, provide login credential to proceed and have access to all
            our services
          </p>

          <form class="login-form" onSubmit={Login}>
            <div class="form-control">
              <input
                type="text"
                placeholder="Username"
                onChange={setUsername}
                value={userData.name}
                required
              />
              <i class="fas fa-user"></i>
            </div>
            <div class="form-control">
              <input
                type="password"
                placeholder="Password"
                value={userData.password}
                required
                onChange={setPassword}
              />
              <i class="fas fa-lock"></i>
            </div>

            <button class="submit" type="submit">
              Login
            </button>
            <span className="text-center text-cyan-500">
              Don't have an account?{" "}
              <button
                className="text-black hover:bg-green-200 bg-cyan-500 px-2 py-1 transition-all"
                onClick={navigateToSignup}
              >
                SIGN UP
              </button>
            </span>
          </form>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
