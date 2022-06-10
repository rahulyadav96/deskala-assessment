import formStyle from "./formStyle.module.css";
import signUpStyle from "./signUp.module.css";


export const SignUp = () => {
  return (
    <>
      <div id="signUp">
        <main className={signUpStyle.formContainer}>
          
            <h2 className={formStyle.formtitle}>Sign Up</h2>
            <form>
              <div className={formStyle.container}>
                <div className={formStyle.wrapper}>
                  <label for="email" className={formStyle.inputFieldName}>
                    Email
                  </label>
                  <input
                    type="text"
                    id="email"
                    placeholder="enter your email id"
                  />
                </div>

                <div className={formStyle.wrapper}>
                  <label for="phone" className={formStyle.inputFieldName}>
                    Phone Number
                  </label>
                  <input
                    type="number"
                    id="phone"
                    placeholder="enter your phone number"
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

              <input type="submit" className={formStyle.submit} value="Sign Up" />
            </form>
          
        </main>
      </div>
    </>
  );
};
