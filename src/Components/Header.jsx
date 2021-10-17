import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/account">Account</Link>
          </li>
          <li>
            <Link to="/transfers">Transfers</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
