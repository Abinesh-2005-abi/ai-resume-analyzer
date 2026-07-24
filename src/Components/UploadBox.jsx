import React, { useState } from "react";
import "../styles/UploadBox.css";


function UploadBox(){


const [file,setFile] = useState(null);



function handleUpload(e){

setFile(e.target.files[0]);

}



return(

<div className="upload-box">


<div className="upload-icon">

📄

</div>



<h2>

Upload Your Resume

</h2>



<p>

Upload PDF, DOC or DOCX file to analyze your resume with AI.

</p>




<label className="file-label">


Choose Resume


<input

type="file"

accept=".pdf,.doc,.docx"

onChange={handleUpload}

/>


</label>





{

file &&

<div className="selected-file">


<p>
Selected File:
</p>


<span>

{file.name}

</span>


</div>


}




<button className="analyze-btn">

Analyze Resume

</button>



<div className="upload-info">


<div>

✔ ATS Score

</div>


<div>

✔ Skill Analysis

</div>


<div>

✔ AI Suggestions

</div>


</div>




</div>

)

}


export default UploadBox;