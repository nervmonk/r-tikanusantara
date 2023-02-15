import PageHeader from "../components/PageHeader";
import WhatIDo from "../components/Homepage/WhatIDo";
import about1 from "../assets/img/about-tika-1.jpg";
import about2 from "../assets/img/about-tika-2.jpg";

import VisionAndMission from "../components/About/VisionAndMission";
import OurTeam from "../components/Homepage/OurTeam";
import CallMe from "../components/Homepage/CallMe";

const AboutUs = () => {
  return (
    <>
      <PageHeader title="Tentang Kami" />
      <div className="container-xxl py-2">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div
                className="position-relative overflow-hidden h-100"
                style={{ minHeight: "400px" }}
              >
                <img
                  className="position-absolute w-100 h-100 pt-5 pe-5"
                  src={about1}
                  alt=""
                  style={{ objectFit: "contain" }}
                />
                <img
                  className="position-absolute top-0 end-0 bg-white ps-2 pb-2"
                  src={about2}
                  alt=""
                  style={{
                    width: "200px",
                    height: "200px",
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="h-100">
                <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">
                  Tentang Organisasi
                </div>
                <h1 className="display-6 mb-5">
                  Relawan Teman Ibu Kawan Anak Nusantara
                </h1>
                <div className="bg-light border-bottom border-5 border-primary rounded p-4 mb-4">
                  <p className="text-dark mb-2">
                    Berawal dari kegemaran mengikuti kegiatan-kegiatan sosial
                    yang bersifat mendidik, memberdayakan, dan meningkatkan
                    kualitas hidup manusia di bidang pendidikan, kesehatan,
                    ekonomi, serta perlindungan terhadap perempuan dan anak,
                    mendorong untuk mendirikan perkumpulan yang dinamakan
                    Relawan Teman Ibu Kawan Anak (R-Tika) yang dilandasi
                    semangat gotong royong, cinta tanah air, mandiri dan
                    berkelanjutan.
                  </p>
                  <span className="text-primary blockquote-footer">
                    Tika Dian Pangastuti, S.S - Ketua R-Tika Nusantara
                  </span>
                </div>
                <p className="mb-5">
                  Perkumpulan Relawan Teman Ibu Kawan Anak (R-Tika) merupakan
                  upaya pemberdayaan masyarakat Indonesia dengan ruang lingkup
                  yang terbatas dan mandiri. Melalui pemberdayaan masyarakat dan
                  kemitraan perempuan dan laki-laki untuk peningkatan kualitas
                  hidup di bidang pendidikan, kesehatan, ekonomi, politik dan
                  perlindungan perempuan anak dan lansia dan pelestarian budaya
                  tradisional masyarakat. R-Tika merupakan upaya peningkatan
                  kemampuan dan potensi yang dimiliki masyarakat, sehingga
                  masyarakat dapat mengembangkan diri secara baik, dalam
                  mewujudkan jati diri, harkat dan martabat secara maksimal
                  untuk menggapai kesejahteraan hidup menuju Indonesia
                  sejahtera.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-xxl py-2">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="h-100">
                <h1 className="display-6 mb-5">
                  Empowering, Protecting, and Developing
                </h1>
                <p className="mb-5">
                  R-TIKA Nusantara berharap hadir diseluruh Indonesia untuk
                  pemberdayaan masyarakat dengan mensosialisasikan dan mendorong
                  gerakan masyarakat melalui upaya peningkatan peran dan
                  kualitas masyarakat Perempuan, Anak dan Laki-laki yang
                  berkeadilan dalam upaya untuk berdaya dan berjiwa mandiri
                  dengan upaya empowering (pemberdayaan), protecting
                  (melindungi) dan developing (mengembangkan) dengan
                  mengimplementasikan prinsip-prinsip suksesnya pemberdayaan
                  masyarakat yaitu prinsip kesetaraan, prinsip partisipasi,
                  swadaya, mandiri dan berkelanjutan.
                </p>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div
                className="position-relative overflow-hidden h-100"
                style={{ minHeight: "400px" }}
              >
                <img
                  className="position-absolute w-100 h-100 pt-5 pe-5"
                  src={about1}
                  alt=""
                  style={{ objectFit: "cover" }}
                />
                <img
                  className="position-absolute top-0 end-0 bg-white ps-2 pb-2"
                  src={about2}
                  alt=""
                  style={{ width: "200px", height: "200px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-xxl py-2">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div
                className="position-relative overflow-hidden h-100"
                style={{ minHeight: "400px" }}
              >
                <img
                  className="position-absolute w-100 h-100 pt-5 pe-5"
                  src={about1}
                  alt=""
                  style={{ objectFit: "cover" }}
                />
                <img
                  className="position-absolute top-0 end-0 bg-white ps-2 pb-2"
                  src={about2}
                  alt=""
                  style={{ width: "200px", height: "200px" }}
                />
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="h-100">
                <h1 className="display-6 mb-5">Kredibilitas</h1>
                <p className="mb-5">
                  R-TIKA Nusantara R-Tika merupakan perkumpulan masyarakat yang
                  Kredibel: perencanaan yang berdasarkan pertimbangan atas
                  pengetahuan, informasi dan data yang terkini dengan mekanisme
                  pelaksanaan secara partisipatif dan berorientasi
                  kepada masyarakat.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <VisionAndMission />
      <OurTeam />
      <WhatIDo />
      <CallMe />
    </>
  );
};

export default AboutUs;
