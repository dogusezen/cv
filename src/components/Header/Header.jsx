import React from "react";
import cvPDF from "src/files/Doğu-Kemal-Sezen.pdf"

const Header = () => {
  return (
    <header className="header">
      <a download href={cvPDF}>Download Dogu`s CV</a>
    </header>
  );
};

export default Header;
