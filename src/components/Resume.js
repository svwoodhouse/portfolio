import React from "react";
import { resume } from "../data";
import {ClipboardCheckIcon } from "@heroicons/react/solid";

export default function Resume() {
  return (
    <section id="resume">
      <div className="container px-5 py-10 mx-auto text-center">
      <div className="flex flex-col w-full mb-20">
      <ClipboardCheckIcon className="mx-auto inline-block w-10 mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
          Resume
        </h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Here is a quick glance summary of my professional experience. My full resume is available for download by clicking the <b className="bold text-white">Download Resume</b> button.
         </p>
         </div>
        <div className="flex flex-wrap m-4">
          {resume.map((job) => (
            <div className="p-4 w-full">
              <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                <div className="flex flex-row"> 
              <img
                    alt="Company Logo"
                    src={job.logo}
                    className="object-contain rounded-full w-1/6"
                  />
                <div className="inline-flex items-center text-left w-5/6">
                  <span className="flex-grow flex flex-col pl-4">
                  <p className="leading-relaxed">{job.title}</p>
                    <span className="title-font font-medium text-white">
                      {job.company} ~ {job.type}
                    </span>
                    <span className="text-gray-500 text-sm uppercase mb-2">
                      {job.years}
                    </span>
                    {job.experiences.map((exp)=> (
                    <li>{exp}</li>
                  ))}
                  </span>
                </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}