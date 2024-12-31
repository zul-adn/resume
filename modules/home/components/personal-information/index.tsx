/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import usePersonal from "./hooks/usePersonal";
import Profile from "./components/profile";
import Image from "next/image";
import Link from "next/link";
import Portofolio from "../portofolio";

function PersonalInformation() {
  const { personal, activeTab, setActiveTab } = usePersonal();
  return (
    <div style={{ height: "calc(100vh - 45px)" }}>
      <div className="mx-auto bg-white shadow-lg rounded-lg h-full">
        <div>
          <div className="relative">
            <img
              className="w-full h-40 object-cover"
              src="assets/img/bg.jpg"
              alt="Background"
            />
            <div className="absolute inset-x-0 top-1/2 transform -translate-y-1/2 flex justify-center">
              <img
                className="w-24 h-24 object-cover rounded-full border-4 border-white"
                src="assets/img/profile.jpeg"
                alt="Profile"
              />
            </div>
          </div>
          <div>
            <div className="text-center m-2">
              <h2 className="text-lg font-semibold text-gray-800">
                {personal?.name}
                <span className="text-sm text-gray-500">
                  ({personal?.pronounce})
                </span>
              </h2>
              <p className="text-sm text-gray-500">{personal?.role}</p>
            </div>

            <div className="mt-4 flex gap-6 justify-center p-6">
              <button className="text-blue-600 text-sm font-medium">
                <Image
                  priority
                  src={"./assets/svg/linkedin.svg"}
                  alt="linkedin"
                  width={25}
                  height={25}
                />
              </button>
              <Link href={"#"} className="text-blue-600 text-sm font-medium">
                <Image
                  priority
                  src={"./assets/svg/github.svg"}
                  alt="linkedin"
                  width={25}
                  height={25}
                />
              </Link>
              <button className="text-blue-600 text-sm font-medium">
                <Image
                  priority
                  src={"./assets/svg/medium.svg"}
                  alt="linkedin"
                  width={25}
                  height={25}
                />
              </button>
              <button className="text-blue-600 text-sm font-medium">
                <Image
                  priority
                  src={"./assets/svg/linkedin.svg"}
                  alt="linkedin"
                  width={25}
                  height={25}
                />
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-between bordered border-y border-indigo-600 ">
          <div
            onClick={() => setActiveTab(0)}
            className={`grow text-center p-2 hover:cursor-pointer hover:bg-indigo-500 hover:text-white ${
              activeTab === 0 ? "bg-indigo-500 text-white" : ""
            }`}>
            About Me
          </div>
          <div
            onClick={() => setActiveTab(1)}
            className={`grow text-center p-2 hover:cursor-pointer hover:bg-indigo-500 hover:text-white ${
              activeTab === 1 ? "bg-indigo-500 text-white" : ""
            }`}>
            Certification
          </div>
          <div
            onClick={() => setActiveTab(2)}
            className={`grow text-center p-2 hover:cursor-pointer hover:bg-indigo-500 hover:text-white ${
              activeTab === 2 ? "bg-indigo-500 text-white" : ""
            }`}>
            Tech Stack
          </div>
          <div
            onClick={() => setActiveTab(3)}
            className={`grow text-center p-2 hover:cursor-pointer hover:bg-indigo-500 hover:text-white ${
              activeTab === 3 ? "bg-indigo-500 text-white" : ""
            }`}>
            Portofolio
          </div>
        </div>

        <div
          className="mt-2 p-5 overflow-y-auto"
          style={{ height: "calc(100vh - 400px)" }}>
          {activeTab === 0 && <Profile />}
          {activeTab === 1 && "Coming soon"}
          {activeTab === 2 && "Coming soon"}
          {activeTab === 3 && <Portofolio />}
        </div>
      </div>
    </div>
  );
}

export default PersonalInformation;
