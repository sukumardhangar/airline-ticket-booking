import React from 'react';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function DropdownButtonExample() {
  return (
    <div>
        <title>Bootstrap Example</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/css/bootstrap.min.css" rel="stylesheet" />
        <div className="dropdown">
          <button className="btn btn-success dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" style={{ margin: 15 }}>
            Login
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a className="dropdown-item" href="#">Customer</a></li>
            <li><a className="dropdown-item" href="#">Admin</a></li>
            <li><a className="dropdown-item" href="#">Operator</a></li>
          </ul>
        </div>
      </div>
  );
}

export default DropdownButtonExample;
