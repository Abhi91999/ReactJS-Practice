import React, {useState, useSyncExternalStore} from "react";

export default function About(props) {
    // 
    let myStyle = {
      color: props.mode === 'light' ? 'white' : 'white',
      backgroundColor : props.mode === 'light' ? 'white' : 'white'
    }
    // const [buttonText, setButtontext] = useState("Enable Dark Mode")
    // const toggleStyle = () =>{
    //     if(myStyle.color == "black")
    //     {
    //         setMyStyle({
    //         color : "white",
    //     backgroundColor : "black",
    //         })
    //         setButtontext("Enable Light Mode");
    //     }
    //     else
    //     {
    //     setMyStyle({
    //         color : "black",
    //     backgroundColor : "white",
    //         })
    //         setButtontext("Enable Dark Mode");
    //     }
    // }
  return (
    <div className="Container" style={myStyle}>
        <h1 className="my-2">About Us</h1>
      <div className="accordion" id="accordionExample" style={myStyle}>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={myStyle}
            >
              <strong>Skills:</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">C, Azure Cloud, Logic Apps, Functions Apps, CI/CD, ETL, React JS, HTML/CSS, JavaScript, SQL.
Miscellaneous: PowerShell commands, Microsoft Office, Firebase, Git.
Soft Skills: Time Management, Teamwork, Problem-solving, Documentation, Engaging Presentation<code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={myStyle}
            >
              <strong>Interests:</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>University Projects:</strong> Attendance System, Orrisa, India
Trident Academy of Technology, Feb 2019 - Apr 2019

Captured the data of different levels of managements with their leave, present, absent status.
Created a website for easy access with geo-location which was further approved by faculties.
Technical Skills: Java, JavaScript, SQL, Apache Tomcat, HTML, CSS.
Soft Skills: Time Management, Teamwork, Presentation skills.<code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={myStyle}
            >
              <strong>Work Experience:</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              <strong>Tata Consultancy Services</strong> Collaborated with a four-person team to develop a Retail Project that utilized Azure Cloud as a foundation to improve the costing and processing speed of data from source to target.
Automated and optimized the data handling process for traffic signs, c, Logic Apps, Functions Apps, Service Bus, Cosmo DB, SQL, K-Query, Alerts, Dashboard, CI/CD pipelines for different environments, RBAC for security protocols and Managed Identity.
Reviewed project specifications and designed technology solutions that met or exceeded performance expectations.
Worked with software development and testing team members to design and develop robust solutions to meet client requirements for functionality, scalability, and performance.
Coordinated with other engineers to evaluate and improve software and hardware interfaces.
Provided direction and guidance for process improvements and established policies.
Integrated third-party tools and components into applications. <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
      {/* <div className = "Container my-3">
      <button onClick={toggleStyle} type="button" className="btn btn-primary">{buttonText}</button>
      </div> */}
    </div>
  );
}
