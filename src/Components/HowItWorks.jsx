import React from "react";
import "../styles/HowItWorks.css";


function HowItWorks(){


const steps=[

{
number:"01",
icon:"📄",
title:"Upload Resume",
description:
"Upload your resume in PDF or DOC format and start the analysis process."
},


{
number:"02",
icon:"🤖",
title:"AI Analysis",
description:
"Our AI engine checks skills, keywords, experience and ATS compatibility."
},


{
number:"03",
icon:"📊",
title:"Get Report",
description:
"Receive your resume score with improvement suggestions and skill insights."
}


];



return(

<section className="how-section">


<h1>
How It Works
</h1>


<p className="how-subtitle">

Analyze your resume with AI in three simple steps.

</p>



<div className="steps-container">


{

steps.map((step,index)=>(


<div className="step-card" key={index}>


<div className="step-icon">

{step.icon}

</div>



<div className="step-number">

{step.number}

</div>



<h3>

{step.title}

</h3>



<p>

{step.description}

</p>


</div>


))

}



</div>


</section>

)

}


export default HowItWorks;