import formStyle from "./formStyle.module.css";
import containerStyle from "./container.module.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  //form inputs
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    password: "",
  });


    const navigate = useNavigate();

  // funtion to handle input fields
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  //function to handle sigup

  const handleSignUp = (e) => {
    e.preventDefault();

    try {
      axios
        .post("/signup", formData)
        .then((res) => {
          console.log(res.data);
          alert('SignUp Success')
          navigate("/login");
        })
        .catch((err) => {
          console.error(err);
          alert(err.response.data.message)
        });
    } catch (err) {
      console.error(err);
    }
  };


  return (
    <>
      <div id="signUp">
        <main className={containerStyle.formContainer}>
          <h2 className={formStyle.formtitle}>Sign Up</h2>
          <form onSubmit={handleSignUp} method="post">
            <div className={formStyle.container}>
              <div className={formStyle.wrapper}>
                <label htmlFor="email" className={formStyle.inputFieldName}>
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="enter your email id"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={formStyle.wrapper}>
                <label htmlFor="phone" className={formStyle.inputFieldName}>
                  Phone Number
                </label>
                <input
                  type="number"
                  id="phone"
                  placeholder="enter your phone number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className={formStyle.wrapper}>
                <label htmlFor="password" className={formStyle.inputFieldName}>
                  Password
                </label>
                <input
                  type="text"
                  id="password"
                  placeholder="enter your password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
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
