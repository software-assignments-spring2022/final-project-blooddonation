/**
 * A React component that represents the Home page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
 import { useForm } from "react-hook-form";
 import { TextField, Input } from "@mui/material";
 import { useState, useEffect } from "react";
 import axios from "axios";
 import { useParams } from 'react-router-dom';

 const inital_data = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    age: 0
}  

 const EditProfileForm = (props) => {
   const [user, setUser] = useState(inital_data);
   const jwtToken = localStorage.getItem("token"); // the JWT token, if we have already received one and stored it in localStorage

   useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_SERVER_HOSTNAME}/profile`, {
        headers: { Authorization: `JWT ${jwtToken}` }, // pass the token, if any, to the server
      })
      .then((res) => {
        setUser({...res.data.user});
        console.log(res.data.user);
      })
      .catch((err) => {
        console.log(
          "The server rejected the request for this protected resource... we probably do not have a valid JWT token."
        );
      });
  }, []); 
  
  const handleInput = (e) => {
    console.log(e.target.name, " : ", e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Data for update : ", user);
      const response = await axios.put(`https://yourendpoint/${user.id}`, user);
    } catch (error) {
      console.log(error);
    }
  };

  const { id } = useParams();

   return (
     <>
       <form onSubmit={handleSubmit}>
         <TextField
           required
           value={user.firstName}
           name="firstName"
           onChange = {handleInput}
         />
 
         <TextField
           required
           value={user.lastName}
           name="lastName"
           onChange = {handleInput}
         />
         <TextField
           required
           value={user.email}
           name="email"
           onChange = {handleInput}
         />
         <TextField
           required
           value={user.password}
           name="password"
           onChange = {handleInput}
         />
 
         <Input type="submit" value="Submit">
           Confirm
         </Input>
       </form>
     </>
   );
 };
 
 // make this component available to be imported into any other file
 export default EditProfileForm;
 