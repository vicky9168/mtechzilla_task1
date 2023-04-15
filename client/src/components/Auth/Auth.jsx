import React,{ useState,useRef} from 'react'
import "./Auth.css"
import { signup, login } from "../../actions/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Auth = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const [isSignup, setIsSignup] = useState(false);
    const [username, setuserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // const navigate = useNavigate();

    const handleSwitch = () => {
        setIsSignup(!isSignup);
      };

      const formRef = useRef(null);


      const handleSubmit = (e) => {
        e.preventDefault();
        if (!username && !password) {
          alert("Enter a name or password");
        }
        if (isSignup) {
          if (!username) {
            alert("Enter a name to continue");
          }
          dispatch(signup({ username, email, password },navigate));
        //  formRef.current.reset();
        // setIsSignup(!isSignup);

        } else {
          dispatch(login({ email, password },navigate));
        //  formRef.current.reset();

        }
      };
  return (
 
    <div className="auth-main">
        <div className="auth-main1">
        <section className="a-1">
<form ref={formRef} onSubmit={handleSubmit}>
{isSignup && (
            <label htmlFor="username">
              <h4>Username</h4>
              <input
                type="text"
                id="username"
                name="username"
                onChange={(e) => {
                  setuserName(e.target.value);
                }}
                required
              />
            </label>
)}
          {/* {isSignup && ( */}

            <label htmlFor="email">
            <h4>Email</h4>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }} 
            />
          </label>
          {/* // )} */}

          <label htmlFor="password">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h4>password</h4>
            </div>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
          
            {isSignup && (
              <p style={{ color: "#666767", fontSize: "11px" }}>
                Passwords must contain at least eight characters,
                <br /> including at least 1 letter and 1 number.
              </p>
            )}
          </label>
          <button type="submit" className="auth-btn">
            {isSignup ? "Sign up" : "Log in"}
          </button>
        </form>
        </section>
        <section className="a-2">
        <p>
          {isSignup ? "Already have an account?" : "Don't have an account?"}
          <button
            type="button"
            className="handle-switch-btn"
            onClick={handleSwitch}
          >
            {isSignup ? "Log in" : "Sign up"}
          </button>
        </p>
        </section>
        </div>
    </div>
  )
}

export default Auth