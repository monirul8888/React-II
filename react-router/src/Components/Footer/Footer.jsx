import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white mt-10">
      <div className="max-w-6xl mx-auto px-6 py-8 text-center">
        <h2 className="text-xl font-semibold mb-2">My React Website</h2>

        <p className="text-gray-400 mb-4">Built with React and Tailwind CSS</p>

        <p className="text-sm text-gray-500">© {year} All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
