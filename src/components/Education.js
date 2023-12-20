// Education.js
import { AcademicCapIcon } from "@heroicons/react/24/solid";
import React from "react";

function Education({ education }) {
  return (
    <section id="education" className="text-gray-300 body-font">
      <div className="container px-5 pt-24 mx-auto">
        <div className="text-center mb-20">
          <AcademicCapIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Education
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            I have mixed set of schooling backgrounds, proficient in both the business and coding side of projects.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {education.map((edu, index) => (
            <div key={index} className="p-4 md:w-1/2 w-full">
              <div className="bg-gray-800 bg-opacity-40 h-full p-8 rounded flex flex-col items-center">
                <img
                  src={edu.logo}  // Add a logo property to your education data with the path to the school logo
                  alt={`Logo for ${edu.school}`}
                  style={{ width: '300px', height: '75px' }} // Set the desired width and height
                />
                <br></br>
                <h2 className="text-xl font-medium title-font mb-4 text-white">{edu.degree}</h2>
                <p className="leading-relaxed mb-4">{edu.school}</p>
                <p className="text-gray-500 text-sm">{edu.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
