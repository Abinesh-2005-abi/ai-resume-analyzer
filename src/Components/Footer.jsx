import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";


function Footer(){

return(

<footer className="footer">


<div className="footer-container">



<div className="footer-brand">


<h2>

CodeTech <span>AI</span>

</h2>


<p>

AI powered resume analyzer platform that helps students and professionals build better resumes and improve career opportunities.

</p>


<div className="social-links">

<a href="#">
LinkedIn
</a>

<a href="#">
GitHub
</a>

<a href="#">
Twitter
</a>

</div>


</div>





<div className="footer-column">


<h3>
Quick Links
</h3>


<Link to="/">
Home
</Link>


<Link to="/analyzer">
Analyzer
</Link>


<Link to="/dashboard">
Dashboard
</Link>


<Link to="/login">
Login
</Link>


<Link to="/signup">
Signup
</Link>


</div>





<div className="footer-column">


<h3>
Services
</h3>


<p>
AI Resume Analysis
</p>


<p>
ATS Score Checking
</p>


<p>
Skill Detection
</p>


<p>
Career Suggestions
</p>


</div>





<div className="footer-column">


<h3>
Contact
</h3>


<p>
📧 support@codetechai.com
</p>


<p>
📞 +91 98765 43210
</p>


<p>
📍 India
</p>


</div>



</div>





<div className="footer-bottom">


<p>

© 2026 CodeTech AI. All Rights Reserved.

</p>


</div>



</footer>

)

}


export default Footer;