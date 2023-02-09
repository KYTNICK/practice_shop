import React from "react";

export default function Header() {
  return (
    <header>
      <div>
        <span className="logo">Company Name</span>
        <ul className="nav">
          <li>Про нас</li>
          <li>Contacts</li>
          <li>Profile</li>
        </ul>
      </div>
      <div className="presentation"></div>
    </header>
  );
}
