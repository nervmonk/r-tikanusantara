import about7 from "../../assets/img/about-tika-7.jpg";
import icon1 from "../../assets/img/icon-revolusi.png";
import icon2 from "../../assets/img/icon-pendampingan.png";
import icon3 from "../../assets/img/icon-perlindungan.png";
import icon4 from "../../assets/img/icon-empowerment.png";

const VisionAndMission = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div
          className="text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "500px" }}
        >
          <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">
            Visi & Misi
          </div>
          <h1 className="display-6 mb-5">Visi Kami</h1>
        </div>
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="h-100">
                <h1 className="display-6 mb-5">
                  Kemajuan Masyarakat Indonesia
                </h1>
                <p className="mb-5">
                  Dengan program-program kami, visi kami menjadi gerbang
                  pemersatu masyarakat untuk maju bersama. Menciptakan kualitas
                  hidup masyarakat yang berkualitas, unggul, mandiri,
                  gotong-royong, kreatif, inovatif dan produktif, serta
                  menjadikan teknologi untuk kemajuan masyarakat
                </p>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div
                className="position-relative overflow-hidden h-100"
                style={{ minHeight: "400px" }}
              >
                <img
                  className="position-absolute w-100 h-100"
                  src={about7}
                  alt=""
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div
          className="text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "500px" }}
        >
          <h1 className="display-6 mt-5">Misi Kami</h1>
        </div>
        <div className="row g-4 justify-content-center">
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item bg-white text-center h-100 p-4">
              <img className="img-fluid mb-4" src={icon1} alt="" />
              <h4 className="mb-3">Perubahan</h4>
              <p className="mb-4 text-start">
                Menjadi pelopor perubahan yang membela hak-hak masyarakat dan
                kelompok yang terpinggirkan
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="service-item bg-white text-center h-100 p-4">
              <img className="img-fluid mb-4" src={icon2} alt="" />
              <h4 className="mb-3">Pendampingan</h4>
              <p className="mb-4 text-start">
                Meningkatkan keahlian dan peran masyarakat dalam pelatihan dan
                pendampingan di bidang pendidikan, kesehatan, perempuan dan
                anak, bantuan hukum dan jasa hukum
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="service-item bg-white text-center h-100 p-4">
              <img className="img-fluid mb-4" src={icon3} alt="" />
              <h4 className="mb-3">Perlindungan</h4>
              <p className="mb-4 text-start">
                Menggerakkan masyarakat dalam perlindungan perempuan dan anak
                dari kekerasan fisik dan pelecehan seksual.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="service-item bg-white text-center h-100 p-4">
              <img className="img-fluid mb-4" src={icon4} alt="" />
              <h4 className="mb-3">Pemberdayaan</h4>
              <p className="mb-4 text-start">
                Mendorong gerakan masyarakat melalui upaya peningkatan peran dan
                kualitas masyarakat perempuan, anak, dan laki-laki yang
                berkeadilan dalam upaya untuk berdaya dan berjiwa mandiri
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionAndMission;
