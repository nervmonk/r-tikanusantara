import { ActivityContent } from "../assets/content/AllContent";
import ArticleCards from "../components/ArticleCards";

const Activity = () => {
  return (
    <ArticleCards
      content={ActivityContent}
      headerTitle="Ragam Kegiatan"
      subHeaderTitle="Ragam Kegiatan"
      headerBreadCrumb="Kegiatan"
      from="activity"
    />
  );
};

export default Activity;
