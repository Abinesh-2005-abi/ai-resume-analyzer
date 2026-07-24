import React,{useState} from "react";
import {Link,useNavigate} from "react-router-dom";
import "../styles/Signup.css";


function Signup(){


const navigate = useNavigate();


const [name,setName] = useState("");

const [email,setEmail] = useState("");

const [mobile,setMobile] = useState("");

const [password,setPassword] = useState("");




function handleSignup(e){

e.preventDefault();


if(name && email && mobile && password){

navigate("/login");

}

}



return(

<div className="signup-page">


<div className="signup-box">



<div className="signup-logo">

CodeTech <span>AI</span>

</div>



<h1>

Create Account 🚀

</h1>



<p>

Start your AI resume improvement journey

</p>




<form onSubmit={handleSignup}>


<input

type="text"

placeholder="Full Name"

value={name}

onChange={(e)=>setName(e.target.value)}

/>



<input

type="email"

placeholder="Email Address"

value={email}

onChange={(e)=>setEmail(e.target.value)}

/>




<input

type="tel"

placeholder="Mobile Number"

value={mobile}

onChange={(e)=>setMobile(e.target.value)}

/>




<input

type="password"

placeholder="Create Password"

value={password}

onChange={(e)=>setPassword(e.target.value)}

/>




<button type="submit">

Create Account

</button>



</form>



<p className="login-text">

Already have an account?


<Link to="/login">

 Login

</Link>


</p>



</div>


</div>

)

}


export default Signup;