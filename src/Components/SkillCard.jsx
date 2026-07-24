import React from "react";
import "../styles/SkillCard.css";


function SkillCard({skill, percentage, level}){


return(

<div className="skill-card">


<div className="skill-header">


<h3>

{skill}

</h3>



<span>

{percentage}%

</span>


</div>




<div className="progress-container">


<div

className="progress-bar"

style={{
width:`${percentage}%`
}}

>

</div>


</div>



<p>

Skill Level : {level}

</p>



</div>

)

}


export default SkillCard;