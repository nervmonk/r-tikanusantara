import { useLocation } from "react-router-dom";
import { NewsContent } from "../assets/content/AllContent";
import ArticleCards from "../components/ArticleCards";

const NewsArticle = () => {
  const location = useLocation();
  console.log(location);

  return (
    <ArticleCards
      content={NewsContent}
      headerTitle="Berita"
      subHeaderTitle="Artikel Berita"
      headerBreadCrumb="Berita"
      from="news"
    />
  );
};

export default NewsArticle;
