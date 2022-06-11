import formStyle from "./formStyle.module.css";
import containerStyle from "./container.module.css";
import { useState } from "react";


export const SignUp = () => {

    //form inputs
    const [formData,setFormData] = useState({

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
      <div id="signUp">
        <main className={containerStyle.formContainer}>
          
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
                    name="email"
                    value={formData.email}
                    onChange={handleChange} 

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
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
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
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <p className={formStyle.notice}>Minium 8 Alpha numeric</p>
                </div>
              </div>

              <input type="submit" onSubmit={handleSubmit} className={formStyle.submit} value="Sign Up" />
            </form>
          
        </main>
      </div>
    </>
  );
};
