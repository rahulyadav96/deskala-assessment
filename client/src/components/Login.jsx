import formStyle from "./formStyle.module.css";
import containerStyle from "./container.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Login = () => {
     //form inputs
     const [formData,setFormData] = useState({
        email:"",
        password:"",
    })

    // funtion to handle input fields
    const handleChange = (e) =>{
        const {name,value} = e.target;

        setFormData({...formData,[name]:value});
    }

    // function to handle form submission
    const handleSubmit = (e)=>{

        e.preventDefault();
        console.log(formData);
    }
  return (
    <>
      <div id="login">
        <main className={containerStyle.formContainer}>
          
            <h2 className={formStyle.formtitle}>Login</h2>
            <form onSubmit={handleSubmit} method="post">
              <div className={formStyle.container}>
                <div className={formStyle.wrapper}>
                  <label htmlFor="email" className={formStyle.inputFieldName}>
                    Email id
                  </label>
                  <input
                    type="text"
                    id="email"
                    placeholder="enter your email id"
                    name="email"
                    value={formData.email}
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

              <input type="submit" className={formStyle.submit} value="Login" />
            </form>
          
            <p style={{textAlign:"center", fontSize:"15px"}}>Doesn't have account, please <Link to="/sign_up">signUp</Link> </p>
        </main>
      </div>
    </>
  );
};
