import React from "react";
import SkillCard from "../components/SkillCard";
import "../styles/Dashboard.css";


function Dashboard(){


const skills=[

{
skill:"Java",
percentage:90,
level:"Advanced"
},

{
skill:"React",
percentage:85,
level:"Advanced"
},

{
skill:"Spring Boot",
percentage:75,
level:"Intermediate"
},

{
skill:"SQL",
percentage:80,
level:"Good"
}

];



return(

<div className="dashboard">


<div className="dashboard-header">


<h1>

Resume Analysis Dashboard 📊

</h1>


<p>

AI generated insights from your resume

</p>


</div>





<div className="dashboard-grid">



<div className="score-card">


<h2>

ATS Score

</h2>



<div className="score-circle">

85%

</div>



<h3>

Excellent Resume

</h3>



<p>

Your resume has a strong chance of passing ATS systems.

</p>


</div>





<div className="summary-card">


<h2>

Resume Summary

</h2>


<p>

Your resume shows strong programming skills with good project experience.
Improve cloud knowledge and add more measurable achievements.

</p>


</div>




</div>





<section className="skills-section">


<h2>

Detected Skills

</h2>



<div className="skills-container">


{

skills.map((item,index)=>(


<SkillCard

key={index}

skill={item.skill}

percentage={item.percentage}

level={item.level}

/>


))

}


</div>


</section>





<div className="suggestion-card">


<h2>

AI Suggestions ✨

</h2>



<ul>

<li>
Add more project descriptions with numbers and results.
</li>


<li>
Include industry keywords for better ATS ranking.
</li>


<li>
Add GitHub and LinkedIn profile links.
</li>


<li>
Improve your professional summary section.
</li>


</ul>


</div>





<div className="missing-card">


<h2>

Recommended Skills

</h2>


<div className="missing-skills">


<span>
Docker
</span>


<span>
AWS
</span>


<span>
System Design
</span>


<span>
Microservices
</span>


</div>


</div>




</div>

)

}


export default Dashboard;