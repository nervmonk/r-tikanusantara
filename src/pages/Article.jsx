import PageHeader from "../components/PageHeader";
import { useParams, useLocation } from "react-router-dom";
import {
  NewsContent,
  JournalContent,
  LawContent,
  ActivityContent,
} from "../assets/content/AllContent";

const Article = () => {
  const params = useParams();
  const location = useLocation();
  const { from } = location.state;

  console.log(from);

  const content =
    from === "news"
      ? NewsContent
      : from === "journal"
      ? JournalContent
      : from === "law"
      ? LawContent
      : ActivityContent;

  const item = content.find((data) => data.title === params.title);
  const paragraph = item.content.split("\n");
  return (
    <>
      <PageHeader title={params.title} />
      <div className="container">
        <div className="position-relative mb-3">
          <div className="ms-1 mb-3">
            <h1 className="text-uppercase font-weight-bold">{item.title}</h1>
            <p className="blog-post-meta">
              {item.date}
              <span> oleh </span>
              <a href={item.link} target="_blank" rel="noreferrer">
                {item.writer}
              </a>
            </p>
            <span className="d-flex justify-content-start">
              <a
                className="btn btn-square me-1"
                href="https://www.instagram.com/r_tika_nusantara/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
              <a
                className="btn btn-square me-1"
                href="https://www.facebook.com/Brigade411"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-telegram"></i>
              </a>
              <a
                className="btn btn-square me-1"
                href="https://www.youtube.com/R-Tika-Nusantara"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                className="btn btn-square me-0"
                href="https://www.tiktok.com/@r_tika_nusantara"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </span>
          </div>
          {item.headImg ? (
            <img
              className="img-fluid d-block w-75 mx-auto"
              src={item.headImg}
              style={{ objectFit: "cover", maxHeight: "1000px" }}
              alt="sub"
            />
          ) : null}
          <div className="bg-white p-4">
            <p>
              <span className="fw-bold">{item.location} - </span>
              {paragraph[0]}
            </p>
            <p>{paragraph[1]}</p>
            {item.subImg1 ? (
              <img
                className="img-fluid d-block w-75 mx-auto"
                src={item.subImg1}
                alt="sub"
              />
            ) : null}
            <p>{paragraph[2]}</p>
            <p>{paragraph[3]}</p>
            {item.subImg2 ? (
              <img
                className="img-fluid d-block w-75 mx-auto"
                src={item.subImg2}
                alt="sub"
              />
            ) : null}
            <p>{paragraph[4]}</p>
            <p>{paragraph[5]}</p>
            <p>{paragraph[6]}</p>
            <p>{paragraph[7]}</p>
            <p>{paragraph[8]}</p>
            <p>{paragraph[9]}</p>
            <p>{paragraph[10]}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Article;
