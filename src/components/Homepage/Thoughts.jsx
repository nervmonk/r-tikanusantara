import { Link } from "react-router-dom";

const Thoughts = () => {
  return (
    <div className="container-xxl bg-light my-5 py-2">
      <div className="container py-5">
        <div
          className="text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "500px" }}
        >
          <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">
            Rubrik
          </div>
          <h1 className="display-6 mb-5">
            Artikel Berita, Jurnal, dan Kegiatan R-Tika Nusantara
          </h1>
        </div>
        <div className="row g-4 justify-content-center">
          <Link
            to="news"
            className="col-lg-4 col-md-6 wow fadeInUp"
            data-wow-delay="0.1s"
          >
            <div className="causes-item d-flex flex-column bg-white border-top border-5 border-primary rounded-top overflow-hidden h-100">
              <div className="text-center p-4 pt-0">
                <div className="d-inline-block bg-primary text-white rounded-bottom fs-5 pb-1 px-3 mb-4">
                  <small>Berita</small>
                </div>
                <h5 className="mb-3">
                  Kumpulan Berita Seputar R-Tika Nusantara
                </h5>
                <p className="text-muted">
                  Berita-berita tentang R-tika nusantara dari liputan media
                </p>
                <div className="d-flex justify-content-end">
                  <p className="text-muted">Learn More</p>
                </div>
              </div>
            </div>
          </Link>
          <Link
            to="journal"
            className="col-lg-4 col-md-6 wow fadeInUp"
            data-wow-delay="0.3s"
          >
            <div className="causes-item d-flex flex-column bg-white border-top border-5 border-primary rounded-top overflow-hidden h-100">
              <div className="text-center p-4 pt-0">
                <div className="d-inline-block bg-primary text-white rounded-bottom fs-5 pb-1 px-3 mb-4">
                  <small>Jurnal</small>
                </div>
                <h5 className="mb-3">Catatan dan gagasan R-Tika Nusantara</h5>
                <p className="text-muted">
                  Jurnal, artikel, dan catatan dari tim R-Tika Nusantara
                </p>
                <div className="d-flex justify-content-end">
                  <p className="text-muted">Learn More</p>
                </div>
              </div>
            </div>
          </Link>
          <Link
            to="team-activity"
            className="col-lg-4 col-md-6 wow fadeInUp"
            data-wow-delay="0.5s"
          >
            <div className="causes-item d-flex flex-column bg-white border-top border-5 border-primary rounded-top overflow-hidden h-100">
              <div className="text-center p-4 pt-0">
                <div className="d-inline-block bg-primary text-white rounded-bottom fs-5 pb-1 px-3 mb-4">
                  <small>Ragam Kegiatan</small>
                </div>
                <h5 className="mb-3">
                  Aktivitas dan ragam kegiatan R-tika Nusantara
                </h5>
                <p className="text-muted">
                  Dokumentasi aktivitas-aktivitas sosial R-Tika Nusantara
                </p>
                <div className="d-flex justify-content-end">
                  <p className="text-muted">Learn More</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Thoughts;
