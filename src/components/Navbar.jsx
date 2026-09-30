import { useState } from "react";

const Navbar = () => {
const [menuOpen, setMenuOpen] = useState(false);

const handleScroll = (id) => {
document.getElementById(id)?.scrollIntoView({
behavior: "smooth",
});
setMenuOpen(false);
};

return ( <nav className="navbar"> <div className="nav-container">
<button
className="logo"
onClick={() => handleScroll("home")}
>
Diksha<span>.</span> </button>

```
    <button
      className="menu-toggle"
      onClick={() => setMenuOpen(!menuOpen)}
      aria-label="Toggle menu"
    >
      ☰
    </button>

    <div className={`nav-links ${menuOpen ? "active" : ""}`}>
      <button onClick={() => handleScroll("home")}>
        Home
      </button>

      <button onClick={() => handleScroll("about")}>
        About
      </button>

      <button onClick={() => handleScroll("skills")}>
        Skills
      </button>

      <button onClick={() => handleScroll("projects")}>
        Projects
      </button>

      <button onClick={() => handleScroll("education")}>
        Education
      </button>

      <button onClick={() => handleScroll("contact")}>
        Contact
      </button>
    </div>
  </div>
</nav>


);
};

export default Navbar;
