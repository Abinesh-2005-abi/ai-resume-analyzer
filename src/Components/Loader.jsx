import React from "react";
import "../styles/Loader.css";


function Loader(){


return(

<div className="loader-container">


<div className="loader-circle">

</div>



<h2>

AI is Analyzing Your Resume...

</h2>



<p>

Scanning skills, keywords, experience and ATS compatibility

</p>



<div className="analysis-list">


<div>
✔ Extracting Resume Data
</div>


<div>
✔ Checking Skills
</div>


<div>
✔ Calculating ATS Score
</div>


<div>
✔ Generating Suggestions
</div>


</div>



</div>

)

}


export default Loader;