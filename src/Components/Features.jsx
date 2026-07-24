import React from "react";
import FeatureCard from "./FeatureCard";
import "../styles/Features.css";


function Features(){

const features=[

{
icon:"🤖",
title:"AI Resume Analysis",
description:
"Advanced AI analyzes your resume content, experience, projects and provides detailed feedback."
},


{
icon:"📊",
title:"ATS Score Checker",
description:
"Check your resume score based on Applicant Tracking System requirements used by recruiters."
},


{
icon:"🎯",
title:"Skill Gap Detection",
description:
"Identify missing skills and learn what technologies you need to improve your career."
},


{
icon:"✨",
title:"Smart Suggestions",
description:
"Get personalized recommendations to improve keywords, formatting and resume quality."
}

];


return(

<section className="features">


<h1>
Powerful AI Features
</h1>


<p className="feature-subtitle">

Everything you need to build a professional resume.

</p>



<div className="feature-container">


{

features.map((item,index)=>(

<FeatureCard

key={index}

icon={item.icon}

title={item.title}

description={item.description}

/>

))

}


</div>


</section>

)

}


export default Features;