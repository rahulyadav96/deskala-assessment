import formStyle from "./formStyle.module.css";
import containerStyle from "./container.module.css";
import { Link } from "react-router-dom";


export const Login = () => {
  return (
    <>
      <div id="login">
        <main className={containerStyle.formContainer}>
          
            <h2 className={formStyle.formtitle}>Login</h2>
            <form>
              <div className={formStyle.container}>
                <div className={formStyle.wrapper}>
                  <label for="email" className={formStyle.inputFieldName}>
                    Email id
                  </label>
                  <input
                    type="text"
                    id="email"
                    placeholder="enter your email id"
                  />
                </div>

                <div className={formStyle.wrapper}>
                  <label for="password" className={formStyle.inputFieldName}>
                    Password
                  </label>
                  <input
                    type="text"
                    id="password"
                    placeholder="enter your password"
                  />
                  <p className={formStyle.notice}>Minium 8 Alpha numeric</p>
                </div>
              </div>

              <input type="submit" className={formStyle.submit} value="Login" />
            </form>
          
            <p style={{textAlign:"center", fontSize:"15px"}}>Doesn't have account, please <Link to="/sign_up">signUp</Link> </p>
        </main>
      </div>
    </>
  );
};
