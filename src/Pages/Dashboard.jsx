import React, { useEffect, useState } from "react";
import "../styles/Dashboard.css";


function Dashboard(){


    const [resume,setResume] = useState(null);



    useEffect(()=>{


        const data = localStorage.getItem(
            "resumeAnalysis"
        );


        if(data){

            setResume(JSON.parse(data));

        }


    },[]);




    return(


        <div className="dashboard">


            <h1>
                Resume Dashboard 📊
            </h1>




            {

                resume ?


                (

                    <div className="dashboard-content">



                        <div className="resume-card">


                            <h2>
                                Uploaded Resume
                            </h2>


                            <p>
                                {resume.fileName}
                            </p>


                        </div>





                        <div className="score-card">


                            <h2>
                                ATS Score
                            </h2>


                            <h1>
                                {resume.score}
                            </h1>


                        </div>







                        <div className="result-card">


                            <h2>
                                Skills Found
                            </h2>


                            {

                                resume.skills.map(

                                    (skill,index)=>(

                                        <p key={index}>
                                            ✅ {skill}
                                        </p>

                                    )

                                )

                            }


                        </div>







                        <div className="result-card">


                            <h2>
                                Missing Skills
                            </h2>



                            {

                                resume.missingSkills.map(

                                    (skill,index)=>(

                                        <p key={index}>
                                            ❌ {skill}
                                        </p>

                                    )

                                )

                            }



                        </div>







                        <div className="suggestion-card">


                            <h2>
                                AI Suggestions
                            </h2>


                            <p>
                                💡 {resume.suggestion}
                            </p>


                        </div>



                    </div>


                )


                :


                (

                    <h2>
                        No Resume Uploaded
                    </h2>

                )

            }



        </div>


    );


}


export default Dashboard;