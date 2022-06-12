import popupStyle from "./popup.module.css";
import {useState} from "react";
import formStyle from "../formStyle.module.css";
import axios from  "axios"
export const Popup = ({handlePopup}) => {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    age:"",
    address: "",
    state: "",
    pincode: "",
    
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)

    axios.post('/candidates',formData)
    .then((res)=>{
        alert("Data added");
        handlePopup();
    })
    .catch(err=>{
        alert(err.response.data.message)
    })
  };

  //handle form inputs
  const handleChange = (e)=>{
      const {name,value} = e.target;

      setFormData({...formData,[name]:value});
  }
  return (
    <>
      <div className={popupStyle.popup}>
        <div className={popupStyle.container}>
          <form onSubmit={handleSubmit} className={popupStyle.form}>
            <div className={popupStyle.leftForm}>
            <div className={formStyle.wrapper}>
                <label htmlFor="name" className={formStyle.inputFieldName}>
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
            <div className={formStyle.wrapper}>
                <label htmlFor="dob" className={formStyle.inputFieldName}>
                  Date of Birth
                </label>
                <input
                  type="text"
                  id="dob"
                  placeholder="enter your dob"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                />
              </div>
             
              <div className={formStyle.wrapper}>
                <label htmlFor="age" className={formStyle.inputFieldName}>
                  Age
                </label>
                <input
                  type="number"
                  id="age"
                  placeholder="enter your age"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className={popupStyle.rightForm}>
            <div className={formStyle.wrapper}>
                <label htmlFor="address" className={formStyle.inputFieldName}>
                  Address
                </label>
                <input
                  type="text"
                  id="address"
                  placeholder="enter your address"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={formStyle.wrapper}>
                <label htmlFor="state" className={formStyle.inputFieldName}>
                  State
                </label>
                <input
                  type="text"
                  id="state"
                  placeholder="enter your state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={formStyle.wrapper}>
                <label htmlFor="pin" className={formStyle.inputFieldName}>
                  Pincode
                </label>
                <input
                  type="number"
                  id="pin"
                  placeholder="enter your pincode"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
          </form>
            <div className={popupStyle.btnContainer}>

          <button className={popupStyle.outlineBtn} onClick={()=>handlePopup()} >Cancel</button>
          <button onClick={handleSubmit} className={popupStyle.containedBtn} >Create</button>
            </div>
        </div>
      </div>
    </>
  );
};
