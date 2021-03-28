import React, { useState } from "react";
import Link from 'next/link';
import { CgMenuRight as CloseMenu } from "react-icons/cg";
import { CgMenu as MenuIcon } from "react-icons/cg";
import { SiDiscord as DiscordIcon } from "react-icons/si";
import { SiGithub as GitHubIcon } from "react-icons/si";
function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <nav className="navbar">
      <div className="container nav-flex">
        <div className="nav-brand" href="#1">
          <img src={'/logo1.png'} alt="" />
          <Link href='/'>
            <a>MegaDev</a>
          </Link>
        </div>
        <div className="nav-content">
          <ul
            className={click ? "nav-items active" : "nav-items"}
            onClick={handleClick}
          >
            <Link href='/join-us' onClick={closeMobileMenu}>
              <li className="nav-item"><a className="nav-link">
                JoinUs
              </a></li>
            </Link>
            <Link href='/about' className="nav-item" onClick={closeMobileMenu}>
              <li className="nav-item"><a className="nav-link">
                about
              </a></li>
            </Link>
            <Link href='/contact' className="nav-item" onClick={closeMobileMenu}>
              <li className="nav-item"><a className="nav-link">
                contact
              </a></li>
            </Link>
            <Link href='/https://discord.gg/NRtaCtEQpe' className="nav-item" onClick={closeMobileMenu}>
              <li className="nav-item"><a className="nav-link">
                <DiscordIcon className="nav-icon" />
              </a></li>
            </Link>
            <Link href="https://github.com/saifmohamedo" className="nav-item" onClick={closeMobileMenu}>
              <li className="nav-item"><a>
                <GitHubIcon className="nav-icon" />
              </a></li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
    </nav>
  );
}

export default Navbar;
