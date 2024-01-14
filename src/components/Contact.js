import React from "react";
import { PhoneIcon } from "@heroicons/react/solid";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import {linkedinLink} from '../data'
import {githubLink} from '../data'

const Contact = () => {
  return (
    <section id="contact">
      <div className="container px-5 py-10 mx-auto text-center">
      <div className="flex flex-col w-full">
      <PhoneIcon className="mx-auto inline-block w-10 mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white">
          Contact
        </h1>
         </div>
        <div className="flex flex-wrap m-4">
            <div className="p-4 w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                <div className="flex flex-col"> 
                  Feel free to contact me via email: <a className=" hover:bg-gray-700 hover:text-white" href="mailto:svwoodhouse@gmail.com">svwoodhouse@gmail.com</a>
                </div>
              </div>
            </div>
        </div>
        <div className="flex justify-center space-x-4">
              <FaLinkedin className="size-12" onClick={()=>{window.open(linkedinLink)}}/>
              <FaGithub className="size-12" onClick={()=>{window.open(githubLink)}}/>
          </div>
      </div>
    </section>
  );
}

export default Contact