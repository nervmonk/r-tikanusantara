import { JournalContent } from "../assets/content/AllContent";
import ArticleCards from "../components/ArticleCards";

const Journal = () => {
  return (
    <ArticleCards
      content={JournalContent}
      headerTitle="Jurnal"
      subHeaderTitle="Jurnal R-Tika Nusantara"
      headerBreadCrumb="Bantuan Hukum"
      from="journal"
    />
  );
};

export default Journal;
