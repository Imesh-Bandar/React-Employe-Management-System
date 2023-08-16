import React, { useState } from "react";
//adding Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Components/Login.css';

//import axios for get and Pass data to Backend
import axios from 'axios';
function Login() {
    //Catch the Email n Password
    const [values, setValue] = useState({
        Email: '',
        Password: ''
    });
    const HandleSumbit = (event) => {
        event.preventDefault();
        //Post the  Form Data to Backend Server Using Axios
        /*
        
            syntacx 
            axios.method('Backend url',Passing Values);
            axios.post('http://localhost:5001/api/auth', values);
        */
        axios.post('http://localhost:8082/login', values)
            .then(res => console.log(res))
            .catch(res => console.log(err))
    }
    return (
        <>
            <div className="Login">
                <div className="Form-Login">
                    <form onSubmit={HandleSumbit}>
                        <h3 className="Log-h">Login</h3>
                        <img src="https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg?w=2000" alt=""  /><br />
                        <label htmlFor="fname">Email</label>
                        {/*Bind the Input Email value with Values Array using event */}
                        <input type="email" onChange={e => setValue({ ...values, Email: e.target.value })} id="Email" placeholder="Enter Your Email.." />

                        <label htmlFor="lname">Password</label>
                        {/*Bind the Input Password value with Values Array using event */}
                        <input type="password" onChange={e => setValue({ ...values, Password: e.target.value })} id="Password" placeholder="Enter Your Password.." />



                        <button type="submit" >LOGIN</button>
                        <button type="submit" > <a href="#">CREATE NEW ACCOUNT</a></button>

                    </form>
                </div>
            </div>

        </>
    );



}
export default Login;