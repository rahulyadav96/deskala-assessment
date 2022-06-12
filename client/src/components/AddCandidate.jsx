import { useState } from "react";
import formStyle from "./formStyle.module.css";
export const AddCandidate = ()=>{

    const [formData,setFormData] = useState({
        name:"",
        dob:"",
        age:"",
        address:"",
        email:"",
        result:"",
    })

       // funtion to handle input fields
       const handleChange = (e) =>{
        const {name,value} = e.target;

        setFormData({...formData,[name]:value});
    }

    return <>
            <div className="form-container">
                <h3>Create Candidate</h3>
                <form >
                <div className={formStyle.wrapper}>
                  <label htmlFor="name" className={formStyle.inputFieldName}>
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="enter your password"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                 
                </div>
                </form>
            </div>
    </>
}