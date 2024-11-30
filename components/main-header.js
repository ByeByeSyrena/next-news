import NavLink from "./nav-link";
import Link from 'next/link';

export default function MainHeader() {
  return (
    <header id="main-header">
      <div id="logo">
        <Link href="/">NextNews</Link>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink href="/news" children="News" />
          </li>
          <li>
            <NavLink href="/archive" children="Archive" />
          </li>
        </ul>
      </nav>
    </header>
  );
}