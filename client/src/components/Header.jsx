// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line react/prop-types
function Header({ toggleSidebar }) {
  return (
    <header className="bg-primary text-white p-3 d-flex justify-content-center align-items-center position-relative">
      <button className="btn btn-secondary position-absolute start-0 ms-3" onClick={toggleSidebar}>
        &#9664; {/* Left-pointing arrow character */}
      </button>
      <h1 className="m-0">Smart Garden</h1>
    </header>
  );
}

export default Header;
