import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [offset, setOffset] = useState("top");
  const [isOpen, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", (e) => {
      let scrolled = document.scrollingElement.scrollTop;
      if (scrolled > 0) {
        setOffset("moved");
      } else {
        setOffset("top");
      }
    });
  }, []);

  return (
    <div
      className={
        offset === "top"
          ? "container-fluid fixed-top px-0 wow fadeIn"
          : "container-fluid fixed-top px-0 wow fadeIn bg-dark shadow"
      }
      data-wow-delay="0.1s"
      style={{
        top: offset === "top" ? "0px" : "-45px",
      }}
    >
      <div className="top-bar text-white-50 row gx-0 align-items-center d-xxlnone d-lg-flex">
        <div className="col-lg-6 px-5 text-start d-none">
          <small>
            <i className="fa fa-map-marker-alt me-2"></i>Tangerang Selatan
          </small>
          <small className="ms-4">
            <i className="fa fa-envelope me-2"></i>info@r-tika.com
          </small>
        </div>
        <div className="col-lg-6 px-5 text-end d-none">
          <small>Sosial Media:</small>
          <a
            className="text-white-50 ms-3"
            href="https://www.facebook.com/Brigade411"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            className="text-white-50 ms-3"
            href="https://www.youtube.com/R-Tika-Nusantara"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-youtube"></i>
          </a>
          <a
            className="text-white-50 ms-3"
            href="https://www.tiktok.com/@r_tika_nusantara"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-tiktok"></i>
          </a>
          <a
            className="text-white-50 ms-3"
            href="https://www.instagram.com/r_tika_nusantara/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>

      <nav
        className="navbar navbar-expand-lg navbar-dark py-lg-0 px-lg-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <Link to="/" className="navbar-brand ms-4 ms-lg-0">
          <h1 className="fw-bold text-primary m-0">
            R-Tika<span className="text-white"> Nusantara</span>
          </h1>
        </Link>
        <button
          type="button"
          className="navbar-toggler me-4"
          onClick={() => setOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={isOpen ? "navbar-collapse" : "collapse navbar-collapse"}
        >
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <NavLink
              onClick={() => setOpen(false)}
              to="/"
              className="nav-item nav-link"
            >
              Home
            </NavLink>
            <NavLink
              onClick={() => setOpen(false)}
              to="/advocacy"
              className="nav-item nav-link"
            >
              Bantuan Hukum
            </NavLink>
            <NavLink
              onClick={() => setOpen(false)}
              to="/about"
              className="nav-item nav-link"
            >
              Tentang Kami
            </NavLink>
            <div className="nav-item dropdown">
              <div
                className="nav-link dropdown-toggle"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                data-bs-toggle="dropdown"
              >
                Rubrik
              </div>
              <div
                className={`dropdown-menu m-0 ${dropdownOpen ? "show" : ""}`}
              >
                <Link
                  onClick={() => {
                    setOpen(false);
                    setDropdownOpen(!dropdownOpen);
                  }}
                  to="/news"
                  className="dropdown-item"
                >
                  Artikel Berita
                </Link>
                <Link
                  onClick={() => setOpen(false)}
                  to="/journal"
                  className="dropdown-item"
                >
                  Jurnal
                </Link>
                <Link
                  onClick={() => setOpen(false)}
                  to="/team-activity"
                  className="dropdown-item"
                >
                  Ragam Kegiatan
                </Link>
                <Link
                  onClick={() => setOpen(false)}
                  to="/photo-gallery"
                  className="dropdown-item"
                >
                  Galeri Foto
                </Link>
              </div>
            </div>
          </div>
          <div className="d-none d-lg-flex ms-2">
            <NavLink
              onClick={() => setOpen(false)}
              className="btn btn-outline-primary py-2 px-3"
              to="call-us"
            >
              Hubungi Kami
              <div className="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                <i className="fa fa-arrow-right"></i>
              </div>
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
