import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <h3>マイプロフィール</h3>
      </div>

      <nav>
        <ul>
          <li>
            <Link to="/">ホーム</Link>
          </li>
          <li>
            <Link to="/PortfolioPage">作品一覧</Link>
          </li>
          <li>
            <a href="https://github.com/pt1sp">Github</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
