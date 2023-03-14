import PageHeader from "../components/PageHeader";
import WhatIDo from "../components/Homepage/WhatIDo";
import about1 from "../assets/img/about-tika-1.jpg";
import about2 from "../assets/img/about-tika-2.jpg";
import about3 from "../assets/img/about-tika-3.jpg";
import about4 from "../assets/img/about-tika-4.jpg";
import about5 from "../assets/img/about-tika-5.jpg";
import about6 from "../assets/img/about-tika-6.jpg";

import VisionAndMission from "../components/About/VisionAndMission";
import OurTeam from "../components/Homepage/OurTeam";
import CallMe from "../components/Homepage/CallMe";

const AboutUs = () => {
  return (
    <>
      <PageHeader title="Tentang Kami" subDetail="Tentang Kami" />
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
                    Berawal dari kegemaran mengikuti kegiatan sosial dengan
                    tujuan peningkatan kualitas hidup masyarakat, kami
                    mendirikan Relawan Teman Ibu Kawan Anak (R-Tika).
                    Perkumpulan ini bergerak dengan semangat gotong royong,
                    cinta tanah air, mandiri, serta berkelanjutan.
                  </p>
                  <span className="text-primary blockquote-footer">
                    Tika Dian Pangastuti, S.S - Ketua R-Tika Nusantara
                  </span>
                </div>
                <p className="mb-5">
                  Perkumpulan Relawan Teman Ibu Kawan Anak (R-Tika) adalah upaya
                  pemberdayaan masyarakat Indonesia dengan ruang lingkup yang
                  terbatas serta mandiri. Upaya peningkatan kualitas hidup
                  masyarakat di bidang pendidikan, kesehatan, ekonomi, politik,
                  serta perlindungan perempuan, anak dan lansia kami lakukan
                  dengan menjalin kemitraan bersama seluruh lapisan. Kami juga
                  berupaya meningkatkan potensi yang dimiliki masyarakat hingga
                  dapat berkembang, mewujudkan jati diri, dan menggapai
                  kesejahteraan hidup menuju Indonesia sejahtera.
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
                  Dengan prinsip kesetaraan, partisipasi, swadaya, mandiri, dan
                  berkelanjutan, kami berupaya meningkatkan peran dan kualitas
                  masyarakat. R-Tika Nusantara berharap hadir di seluruh
                  Indonesia untuk mensosialisasikan dan mendorong gerakan
                  masyarakat secara pemberdayaan (empowering), melindungi
                  (protecting), dan mengembangkan (developing).
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
                  src={about3}
                  alt=""
                  style={{ objectFit: "cover" }}
                />
                <img
                  className="position-absolute top-0 end-0 bg-white ps-2 pb-2"
                  src={about4}
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
                  src={about5}
                  alt=""
                  style={{ objectFit: "cover" }}
                />
                <img
                  className="position-absolute top-0 end-0 bg-white ps-2 pb-2"
                  src={about6}
                  alt=""
                  style={{ width: "200px", height: "200px" }}
                />
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="h-100">
                <h1 className="display-6 mb-5">Kredibilitas</h1>
                <p className="mb-5">
                  R-TIKA Nusantara merupakan perkumpulan masyarakat yang
                  Kredibel: perencanaan didasari atas pertimbangan pengetahuan,
                  informasi dan data terkini, serta mekanisme pelaksanaan
                  kegiatan dilakukan secara partisipatif dan berorientasi
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
