import React from "react";
import { 
    ArrowRightIcon, 
    ArrowDownOnSquareIcon,
 } from "@heroicons/react/24/outline";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const resumeFileName = 'spencerstandish-resume-2023.pdf';
const resumePath = process.env.PUBLIC_URL + '/' + resumeFileName;

function Navbar() {
  const handleDownloadResume = () => {
    // Create a link element
    const link = document.createElement('a');
    // Set the href attribute to the path of the resume
    link.href = resumePath;
    // Set the download attribute to specify the default file name
    link.download = resumeFileName;
    // Simulate a click on the link to trigger the download
    link.click();
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: Add smooth scrolling behavior
    });
  };

  return (
    <header className="bg-gray-800 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <button onClick={scrollToTop} className="title-font font-medium text-white mb-4 md:mb-0">
          Spencer Standish
        </button>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-5 hover:text-white">
            Past Work
          </a>
          <a href="#skills" className="mr-5 hover:text-white">
            Skills
          </a>
          <a href="#education" className="mr-5 hover:text-white">
            Education
          </a>
          <a href="#testimonials" className="mr-5 hover:text-white">
            Testimonials
          </a>
        </nav>
        <div className="flex items-center">
        <a
            href="https://www.linkedin.com/in/spencer-standish/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 mr-4">
            <FontAwesomeIcon icon={faLinkedin} className="text-white w-4 h-4 mr-2" />
            LinkedIn
        </a>
        <a
            href="https://github.com/spencer-standish"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 mr-4"
        >
            <FontAwesomeIcon icon={faGithub} className="text-white w-4 h-4 mr-2" />
            GitHub
          </a>
          <button
            onClick={handleDownloadResume}
            className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0 mr-4">
            Download Resume
            <ArrowDownOnSquareIcon className="w-5 h-5 ml-1" />
          </button>
          <a href="#contact" className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">
            Contact Me
            <ArrowRightIcon className="w-5 h-5 ml-1" />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
