import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

export const Contact = () => {
  return (
    <section id="contact">
      <footer className="bg-base-200 text-base-content rounded-lg p-10">
        <div className="flex flex-col items-center">
          {/* Contact Heading */}
          <h3 className="text-2xl font-semibold mb-4 text-center">Contact</h3>

          {/* Contact Info */}
          <ul className="space-y-4 text-center">
            <li className="">
              Email:{" "}
              <a
                href="mailto:amosmurmu002@gmail.com"
                className="link link-primary"
              >
                amosmurmu002@gmail.com
              </a>
            </li>
            <li className="">
              LinkedIn:{" "}
              <a
                href="https://linkedin.com/in/amosmurmu002"
                className="link link-primary"
              >
                linkedin.com/in/amosmurmu002
              </a>
            </li>
          </ul>

          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6 mt-6">
            <a
              href="https://github.com/amosmurmu"
              target="_blank"
              rel="noreferrer"
              className="text-2xl text-gray-600 hover:text-primary"
            >
              <FaGithub />
            </a>
            <a
              href="https://twitter.com/amosmurmu"
              target="_blank"
              rel="noreferrer"
              className="text-2xl text-blue-500 hover:text-primary"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com/in/amosmurmu002"
              target="_blank"
              rel="noreferrer"
              className="text-2xl text-blue-700 hover:text-primary"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </footer>
    </section>
  );
};
