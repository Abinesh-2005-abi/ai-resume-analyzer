import React from "react";
import "../styles/Testimonial.css";


function Testimonial(){


const reviews=[

{
name:"Arun Kumar",
role:"Software Developer",
image:"👨‍💻",
review:
"CodeTech AI helped me improve my resume quality and increase my ATS score."
},


{
name:"Priya S",
role:"Final Year Student",
image:"👩‍🎓",
review:
"The AI suggestions helped me create a professional resume for placements."
},


{
name:"Rahul M",
role:"Frontend Developer",
image:"👨‍💻",
review:
"Easy to use platform with detailed resume analysis and useful recommendations."
},


];


return(

<section className="testimonial">


<h1>

What Our Users Say

</h1>



<p className="testimonial-subtitle">

Thousands of students and professionals improve their careers with CodeTech AI.

</p>




<div className="testimonial-container">


{

reviews.map((user,index)=>(


<div className="testimonial-card" key={index}>


<div className="user-image">

{user.image}

</div>



<h3>

{user.name}

</h3>



<span>

{user.role}

</span>



<p>

"{user.review}"

</p>



<div className="stars">

⭐⭐⭐⭐⭐

</div>



</div>


))

}



</div>



</section>

)

}


export default Testimonial;