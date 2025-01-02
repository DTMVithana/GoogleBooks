import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          © {new Date().getFullYear()} Book Search App. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          Built with ❤️ using React and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
