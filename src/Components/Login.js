import { useNavigate } from "react-router-dom";
import "../CSS/Login.css";
import { useContext, useState } from "react";
import { MyContext } from "../Store/store";
import MyThreeComponent from "./MyThreeComponent";

const backgroundUrl =
  "https://images.unsplash.com/photo-1633886036602-d05f76097e67?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
export default function LoginPage() {
  const { setUserProfile } = useContext(MyContext);
  const [loginData, setLoginData] = useState({
    username: "emilys",
    password: "emilyspass",
  });
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();
  async function login(e) {
    e.preventDefault();
    try {
      const res = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: loginData.username,
          password: loginData.password,
        }),
      });
      if (res.ok) {
        const data = await res.json();
        setUserProfile(data);
        localStorage.setItem("token", data.token);
        navigate("/home");
      } else {
        setErrMsg("Invalid Credentials");
      }
    } catch (e) {
      console.log(e);
    }
  }

  const handleChange = (e) => {
    setLoginData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return (
    <div className="login-main-page">
      <div className="login-main-page-background">
        {/* <img
                    src={backgroundUrl} alt="ii"></img> */}
        {window.innerWidth > 600 ? (
          <MyThreeComponent
            width={500}
            height={window.innerHeight}
            intensity={0.02}
          />
        ) : (
          <MyThreeComponent width={150} height={150} intensity={1} />
        )}
      </div>
      <div className="login-main-page-content">
        <div className="login-main-page-content-title">Log In</div>
        <div className="login-main-page-content-sub-title">
          Login to your account
        </div>
        <div className="external-link">
          You can use any user's credentials from{" "}
          <a
            href="https://dummyjson.com/users"
            target="_blank"
            rel="noreferrer"
          >
            dummyjson.com/users
          </a>
        </div>
        <div className="login-main-page-content-box">
          <form onSubmit={login}>
            <label className="login-label">Username</label>
            <input
              className="login-input"
              name="username"
              value={loginData.username}
              type="text"
              onChange={handleChange}
              required
            ></input>
            <br />
            <label className="login-label">Password</label>
            <input
              className="login-input"
              name="password"
              value={loginData.password}
              type="password"
              onChange={handleChange}
              required
            ></input>
            <button className="login-btn" type="submit">
              Log In
            </button>
          </form>
        </div>
        <div
          className="err-msg"
          style={{ visibility: errMsg ? "visible" : "hidden" }}
        >
          {errMsg}
        </div>
      </div>
    </div>
  );
}
