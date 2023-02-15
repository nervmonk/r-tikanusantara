import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="container-fluid bg-dark text-white-50 footer mt-auto pt-5 wow fadeIn copyright">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4 text-center text-md-start mb-3 mb-md-0">
            &copy;2023 <Link to="/">r-tika.com</Link>, All Right Reserved.
          </div>
          <div className="d-flex text-center col-md-4 justify-content-center mb-3">
            <a
              className="btn btn-square me-1"
              href="https://www.instagram.com/r_tika_nusantara/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              className="btn btn-square me-1"
              href="https://www.facebook.com/Brigade411"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              className="btn btn-square me-1"
              href="https://www.youtube.com/R-Tika-Nusantara"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-youtube"></i>
            </a>
            <a
              className="btn btn-square me-0"
              href="https://www.tiktok.com/@r_tika_nusantara"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-tiktok"></i>
            </a>
          </div>
          <div className="col-md-4 text-center text-md-end">
            Designed By{" "}
            <a
              href="https://dwiky-cv.web.app/"
              target="_blank"
              rel="noreferrer"
            >
              @dwikyryan
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
