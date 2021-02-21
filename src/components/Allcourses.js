import React, { useState } from "react";
import Course from "./Course";
    
const Allcourses = () => {

    const[courses, setCourses] = useState([
        { title: "Java Course", description:"this is a demo course" },
        { title: "Css Course", description:"this is a demo course" },
        { title: "Html Course", description:"this is a demo course" },
        { title: "Python Course", description:"this is a demo course" },
        


    ]);
    return(
        <div>
            <h1>All Course</h1>
            <p>List of all courses are as follow</p>
            

            {courses.length > 0
                ? courses.map((item) => <Course course={item}/> )
                : "No courses" }

        </div>
    );
};
export default Allcourses;