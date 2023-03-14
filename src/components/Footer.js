import React from "react";
import { FaFacebook, FaTwitter, FaGithub, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 row-span-1 col-span-4 w-full h-full text-white p-8 grid grid-cols-5">
      <div className="col-span-2 px-12">
        <h1 className="text-4xl font-bold text-gray-300">KN Infotech</h1>
        <p className="text-gray-400 text-sm py-2">DESIGN YOUR NEEDS</p>
        <div className="flex gap-3 text-xl py-2">
          <FaFacebook className="text-blue-400" />
          <FaTwitter className="text-blue-400" />
          <FaGithub />
          <FaYoutube className="text-red-400" />
        </div>
      </div>
      <div className="col-span-1 flex flex-col gap-1 ">
        <h3 className="text-xl font-semibold text-gray-300">Contact Info</h3>
        <p className="text-gray-400">Address: Samali, Kolkata, 700104</p>
        <p className="text-gray-400">Phone: 9732737112</p>
        <p className="text-gray-400">snahashiskanrar@gmail.com</p>
      </div>
      <div className="col-span-1 flex flex-col gap-1 ">
        <h3 className="text-xl font-semibold text-gray-300">Important Link</h3>
        <p className="text-gray-400">Search Domain</p>
        <p className="text-gray-400">Search a Job</p>
        <p className="text-gray-400">My Account </p>
      </div>
      <div className="col-span-1 flex flex-col gap-1 ">
        <h3 className="text-xl font-semibold text-gray-300">Newsletter</h3>
        <p className="text-gray-400 taxt-justify pr-5">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
