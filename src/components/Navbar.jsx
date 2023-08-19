import React from "react";

const Navbar = () => {
  return (
    /* Navigation bar with blue background, height 16, centered flex layout, and shadow */
    <nav className="bg-blue-600 h-16 flex justify-center items-center shadow-md">
      <div className="max-w-screen-lg w-full px-4">
        {/* Title with white text, extra large font size, bold, wide letter spacing, and centered text */}
        <h1 className="text-white text-xl font-bold tracking-wide text-center">
          Student Enrollment Form
        </h1>
      </div>
    </nav>
  );
};

export default Navbar;
