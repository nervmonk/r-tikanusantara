import { Link } from "react-router-dom";

const PageHeader = (props) => {
  return (
    <div
      className="container-fluid page-header mb-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container text-center">
        <h1 className="display-4 text-white animated slideInDown mb-4">
          {props.title}
        </h1>
        <nav aria-label="breadcrumb animated slideInDown">
          <ol className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item">
              <Link className="text-white" to="/">
                Home
              </Link>
            </li>
            {props.detail ? (
              <li className="breadcrumb-item">
                <Link
                  className="text-white"
                  to={props.detailLink ? props.detailLink : null}
                >
                  {props.detail}
                </Link>
              </li>
            ) : null}

            {props.subDetail ? (
              <li
                className="breadcrumb-item text-secondary active"
                aria-current="page"
              >
                {props.subDetail}
              </li>
            ) : null}
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default PageHeader;
