import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/UploadBox.css";


function UploadBox(){

    const [file, setFile] = useState(null);

    const navigate = useNavigate();



    const handleFileChange = (e)=>{

        const selectedFile = e.target.files[0];

        if(selectedFile){

            setFile(selectedFile);

        }

    };



    const analyzeResume = ()=>{


        if(!file){

            alert("Please upload your resume first");

            return;

        }



        const analysisData = {


            fileName: file.name,


            score:"87%",


            skills:[

                "Java",
                "React",
                "JavaScript",
                "SQL"

            ],



            missingSkills:[

                "AWS",
                "Docker",
                "System Design"

            ],



            suggestion:

            "Add more project details and measurable achievements."



        };



        localStorage.setItem(

            "resumeAnalysis",

            JSON.stringify(analysisData)

        );



        navigate("/dashboard");


    };





    return(


        <div className="upload-box">


            <h2>
                Upload Your Resume
            </h2>



            <p>
                Upload your resume and get AI analysis
            </p>




            <input

                type="file"

                accept=".pdf,.doc,.docx"

                onChange={handleFileChange}

            />





            {

                file &&

                <p className="file-name">

                    Selected File :
                    <b> {file.name}</b>

                </p>

            }




            <button

                onClick={analyzeResume}

            >

                Analyze Resume

            </button>




        </div>


    );


}


export default UploadBox;