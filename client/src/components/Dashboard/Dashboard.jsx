import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./dashboard.css";
import { Popup } from "../popup/Popup";
export const Dashboard = () => {
  const [candidates, setCandidates] = useState([]);

  //popup status
  const [popup, setPopup] = useState(false);

  const { auth, handleLogOut } = useContext(AuthContext);

  const navigate = useNavigate();

  //get all candidates
  useEffect(() => {
    if (auth) {
      try {
        axios.get("/candidates").then((res) => {
          setCandidates(res.data.candidates);
        });
      } catch (err) {
        console.error(err);
      }
    }
  });

  //function to handle logout
  const handleClick = () => {
    handleLogOut();
    navigate("/login");
  };

  //function to handle popup
const handlePopup = () =>{
    setPopup(!popup)
}
  return (
    <>
      <div className="dashboard">
        <button onClick={handleClick}>Logout</button>
        <div className="candidates_container">
          <p>Candidates List : {candidates.length}</p>

          <table className="table">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Date of Birth</th>
                <th>Age</th>

                <th>State</th>
                <th>Pincode</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {candidates?.map((candidate, i) => (
                <tr
                  key={candidate.id}
                  className={i % 2 == 0 ? "skyBg" : "whiteBg"}
                >
                  <td>{i + 1}</td>
                  <td>{candidate.name}</td>
                  <td>{candidate.dob}</td>
                  <td>{candidate.age}</td>

                  <td>{candidate.state}</td>
                  <td>{candidate.pincode}</td>
                  <td>
                    <button>edit</button>
                  </td>
                  <td>
                    <button >delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button onClick={handlePopup} className="addCandidate-btn">Add New Candidate</button>
        </div>
        <div className={popup?"show popup":"hide"}>
            <Popup handlePopup = {handlePopup}/>
        </div>
      </div>
    </>
  );
};
