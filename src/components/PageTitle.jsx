const PageTitle = (props) => {
  return (
    <div
      className="text-center mx-auto mb-5 wow fadeInUp"
      data-wow-delay="0.1s"
      style={{ maxWidth: "500px" }}
    >
      <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">
        {props.title}
      </div>
      <h1 className="display-6 mb-1">{props.subtitle}</h1>
    </div>
  );
};

export default PageTitle;
