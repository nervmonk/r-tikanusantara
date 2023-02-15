import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import PageTitle from "../components/PageTitle";
import { PhotoAlbum } from "../assets/content/PhotoAlbum";

const PhotoGallery = () => {
  const Content = PhotoAlbum.map((e) => {
    return (
      <Link
        to="/news-detail"
        className="col-lg-4 col-md-6 shadow-sm mb-2"
        data-wow-delay="0.1s"
        key={e.id}
      >
        <div className="service-item bg-light overflow-hidden h-100">
          <img
            className="card-img-top"
            src={e.image}
            alt="news"
            style={{
              height: "225px",
              width: "100%",
              display: "block",
              objectFit: "cover",
            }}
          />
          <div className="service-text position-relative text-start h-100 p-4">
            <p className="mb-3 text-muted">{e.caption}</p>
          </div>
        </div>
      </Link>
    );
  });
  return (
    <>
      <PageHeader title="Galeri Foto" />
      <PageTitle title="Rubrik" subtitle="Galeri Foto" />
      <div className="album mx-auto">
        <div className="container mb-5">
          <div className="row g-4 justify-content-center py-1">{Content}</div>
          <ul className="pagination justify-content-center mt-3">
            <li className="page-item">
              <a className="page-link" href="!#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="!#">
                1
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="!#">
                2
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="!#">
                3
              </a>
            </li>
            <li className="page-item">
              <a className="page-link" href="!#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default PhotoGallery;
