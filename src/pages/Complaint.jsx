import CallMe from "../components/Homepage/CallMe";
import ArticleCards from "../components/ArticleCards";
import { LawContent } from "../assets/content/AllContent";

const Complaint = () => {
  return (
    <>
      <ArticleCards
        content={LawContent}
        headerTitle="Bantuan Hukum"
        subHeaderTitle="Artikel Hukum"
        headerBreadCrumb="Bantuan Hukum"
        from="law"
      />
      <CallMe />
    </>
  );
};

export default Complaint;
