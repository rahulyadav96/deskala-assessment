import formStyle from "./formStyle.module.css";
import containerStyle from "./container.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import {AuthContext} from "../context/AuthContext";



export const Login = () => {
     //form inputs
     const [formData,setFormData] = useState({
        email:"",
        password:"",
    })

    const {handleAuth} = useContext(AuthContext);

    const navigate = useNavigate();

    //handleLogin 

    const handleLogin = (e)=>{
      e.preventDefault();
      try{

        axios.post('/login',formData)
        .then((res)=>{
          console.log(res.data);
          alert("login success");
          handleAuth(res.data);
          navigate("/dashboard")

        })
        .catch((err)=>{
    
          console.error(err);
        })

      }catch(err){
        console.error(err)
      }
    }

    // funtion to handle input fields
    const handleChange = (e) =>{
        const {name,value} = e.target;

        setFormData({...formData,[name]:value});
    }

  return (
    <>
      <div id="login">
        <main className={containerStyle.formContainer}>
          
            <h2 className={formStyle.formtitle}>Login</h2>
            <form onSubmit={handleLogin} method="post" >
              <div className={formStyle.container}>
                <div className={formStyle.wrapper}>
                  <label htmlFor="email" className={formStyle.inputFieldName}>
                    Email id
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
                  <label htmlFor="password" className={formStyle.inputFieldName}>
                    Password
                  </label>
                  <input
                    type="password"
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
