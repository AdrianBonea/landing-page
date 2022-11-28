import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Logo from "../../assets/Aqmeter_Logo_Small_White.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 h-0 z-20 w-full text-[#777]">
      <section className="lg:flex hidden justify-between items-center h-20 px-10">
        <img src={Logo} alt="Logo" className="w-32" />
        <ul className="flex flex-row text-3xl ">
          <li className="ml-6 py-1 px-2">
            <a href="#header">Home</a>
          </li>
          <li className="ml-6 py-1 px-2">
            <a href="#tutorials">Tutorials</a>
          </li>
          <li className="ml-6 py-1 px-2">
            <a href="#help">Help</a>
          </li>
          <li className="ml-6 py-1 px-2">
            <a href="#faq">FAQ</a>
          </li>
          <li className="ml-6 py-1 px-2">
            <a href="#contact">Contact</a>
          </li>
          <li className="ml-6 py-1 px-2 border rounded border-[#777]">
            <a href="#login">Login</a>
          </li>
        </ul>
      </section>

      {!isOpen && (
        <section
          role="button"
          tabIndex={0}
          className="lg:hidden flex text-xl h-20 p-2"
          onClick={toggle}
          onKeyDown={toggle}
        >
          <GiHamburgerMenu />
        </section>
      )}
      {isOpen && (
        <section className="flex flex-row">
          <ul className="lg:hidden flex flex-col text-xl font-light fixed top-0 left-0 h-full w-3/4 bg-[#3d3d3d] text-white">
            <li className="p-2 ">
              <a href="#header" onClick={toggle} onKeyDown={toggle}>
                <GiHamburgerMenu />
              </a>
            </li>
            <li className="p-2 border-b border-[#777]">
              <a href="#header">Home</a>
            </li>
            <li className="p-2 border-b border-[#777]">
              <a href="#tutorials">Tutorials</a>
            </li>
            <li className="p-2 border-b border-[#777]">
              <a href="#help">Help</a>
            </li>
            <li className="p-2 border-b border-[#777]">
              <a href="#faq">FAQ</a>
            </li>
            <li className="p-2 border-b border-[#777]">
              <a href="#contact">Contact</a>
            </li>
            <li className="p-2 border-b border-[#777]">
              <a href="#login">Login</a>
            </li>
          </ul>
        </section>
      )}
    </nav>
  );
}

export default Navbar;
