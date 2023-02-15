import { Link, useLocation } from "react-router-dom";
import PageHeader from "./PageHeader";

const ArticleCards = (props) => {
  const location = useLocation();
  const item = props.content.map((data) => {
    return (
      <Link
        key={data.id}
        to={data.title}
        state={{ from: props.from }}
        className="col-lg-4 col-md-6 shadow-sm mb-2"
        data-wow-delay="0.1s"
      >
        <div className="service-item bg-light overflow-hidden h-100">
          <img
            className="card-img-top"
            src={data.headImg}
            alt="news"
            style={{
              height: "225px",
              width: "100%",
              display: "block",
              objectFit: "cover",
            }}
          />
          <div className="service-text position-relative text-center h-100 p-4">
            <h5 className="mb-3">{data.title}</h5>
            <div className="d-flex justify-content-between align-items-center">
              <small className="text-muted">{data.date}</small>
              <small className="text-muted">{data.writer}</small>
            </div>
          </div>
        </div>
      </Link>
    );
  });
  return (
    <>
      <PageHeader
        title={props.headerTitle}
        detail={props.headerBreadCrumb}
        detailLink={location.pathname}
      />
      <div
        className="text-center mx-auto mb-5 wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ maxWidth: "500px" }}
      >
        <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">
          Rubrik
        </div>
        <h1 className="display-6 mb-1">{props.subHeaderTitle}</h1>
      </div>
      <div className="album mx-auto">
        <div className="container mb-5">
          <div className="row g-4 justify-content-center py-1">{item}</div>
          <ul className="pagination justify-content-center mt-3">
            <li className="page-item">
              <Link className="page-link" to="/" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to="/">
                1
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to="/">
                2
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to="/">
                3
              </Link>
            </li>
            <li className="page-item">
              <Link className="page-link" to="/" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ArticleCards;
