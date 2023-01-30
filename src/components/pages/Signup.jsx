import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUserDetails } from "../../features/UserDetail/UserDetailSlice";
import "./Login.css";

const Signup = (props) => {
  const [userData, setUserData] = useState({
    name: "",
    password: "",
    email: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();
  props.setHideHeader(true);

  const naviToLogin = () => {
    navigate("/login");
  };

  const setUsername = (event) => {
    setUserData((prevState) => {
      return { ...prevState, name: event.target.value };
    });
  };

  const setEmail = (event) => {
    setUserData((prevState) => {
      return { ...prevState, email: event.target.value };
    });
  };

  const setPassword = (event) => {
    setUserData((prevState) => {
      return { ...prevState, password: event.target.value };
    });
  };

  const signup = (event) => {
    event.preventDefault();
    props.setHideHeader(false);
    dispatch(addUserDetails({ userData }));
    navigate("/login");
  };
  return (
    <>
      <section class="main">
        <div class="login-container">
          <p class="title">Welcome </p>
          <div class="separator"></div>
          <p class="welcome-message">
            Please, provide signup credential to proceed and have access to all
            our services
          </p>

          <form class="login-form" onSubmit={signup}>
            <div class="form-control">
              <input
                type="text"
                placeholder="Username"
                onChange={setUsername}
                required
              />
              <i class="fas fa-user"></i>
            </div>
            <div class="form-control">
              <input
                type="email"
                placeholder="Email"
                onChange={setEmail}
                required
              />
              <i class="fas fa-user"></i>
            </div>
            <div class="form-control">
              <input
                type="password"
                placeholder="Password"
                required
                onChange={setPassword}
              />
              <i class="fas fa-lock"></i>
            </div>

            <button class="submit" type="submit">
              Sign Up
            </button>
          </form>
          <span className="text-center text-cyan-500">
            Already have an account?{" "}
            <button
              className="text-black hover:bg-green-200 bg-cyan-500 px-2 py-1 transition-all"
              onClick={naviToLogin}
            >
              Login
            </button>
          </span>
        </div>
      </section>
    </>
  );
};

export default Signup;
