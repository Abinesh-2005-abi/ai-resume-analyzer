import React,{useState} from "react";
import {useNavigate} from "react-router-dom";

import UploadBox from "../components/UploadBox";
import Loader from "../components/Loader";

import "../styles/Analyzer.css";


function Analyzer(){


const [loading,setLoading] = useState(false);

const navigate = useNavigate();



function startAnalysis(){


setLoading(true);



setTimeout(()=>{


setLoading(false);


navigate("/dashboard");


},3000);



}



return(

<div className="analyzer-page">



<div className="analyzer-header">


<h1>

AI Resume Analyzer 🤖

</h1>



<p>

Upload your resume and get instant AI powered feedback,
ATS score and improvement suggestions.

</p>


</div>





{

loading ?


<Loader/>


:


<div onClick={startAnalysis}>


<UploadBox/>


</div>


}





<div className="analyzer-features">



<div>

<h3>
📊 ATS Score
</h3>

<p>
Check your resume compatibility.
</p>

</div>




<div>

<h3>
🎯 Skill Detection
</h3>

<p>
Find missing skills.
</p>

</div>




<div>

<h3>
✨ AI Suggestions
</h3>

<p>
Improve resume quality.
</p>

</div>



</div>





</div>

)

}


export default Analyzer;