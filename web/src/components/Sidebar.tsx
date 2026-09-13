import { useState } from "react";
import { Link } from "react-router-dom";
import { navCategories, resumeUrl } from "../data/nav";
import "./Sidebar.css";

export default function Sidebar() {
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleCategory = (name: string) => {
    setOpenCategory((current) => (current === name ? null : name));
  };

  return (
    <nav className="sidebar-nav">
      <div className="sidebar-header">
        <Link to="/" className="sidebar-title" onClick={() => setMobileOpen(false)}>
          Alicia Iott
        </Link>
        <button
          type="button"
          className="sidebar-toggle"
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation"
          onClick={() => setMobileOpen((open) => !open)}
        >
          {mobileOpen ? "Close" : "Menu"}
        </button>
      </div>

      <ul className={`sidebar-list ${mobileOpen ? "sidebar-list--open" : ""}`}>
        {navCategories.map((category) => (
          <li key={category.name} className="sidebar-category">
            <button
              type="button"
              className="sidebar-category-toggle"
              aria-expanded={openCategory === category.name}
              onClick={() => toggleCategory(category.name)}
            >
              {category.name}
            </button>
            {openCategory === category.name && (
              <ul className="sidebar-sublist">
                {category.items.map((item) => (
                  <li key={`${category.name}-${item.slug}`}>
                    <Link to={`/project/${item.slug}`} onClick={() => setMobileOpen(false)}>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
        <li className="sidebar-category">
          <a href={resumeUrl} target="_blank" rel="noreferrer">
            Resum&eacute;
          </a>
        </li>
      </ul>
    </nav>
  );
}
