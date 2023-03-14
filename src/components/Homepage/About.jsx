import { Link } from "react-router-dom";
import about1 from "../../assets/img/about-tika-1.jpg";
import about2 from "../../assets/img/about-tika-2.jpg";

const About = () => {
  return (
    <div className="container-xxl py-5">
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
              <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">
                Tentang R-Tika Nusantara
              </div>
              <h1 className="display-6 mb-5">
                Relawan Teman Ibu Kawan Anak Nusantara
              </h1>
              <div className="bg-light border-bottom border-5 border-primary rounded p-4 mb-4">
                <p className="text-dark mb-2">
                  Berawal dari kegemaran mengikuti kegiatan sosial dengan tujuan
                  peningkatan kualitas hidup masyarakat, kami mendirikan Relawan
                  Teman Ibu Kawan Anak (R-Tika). Perkumpulan ini bergerak dengan
                  semangat gotong royong, cinta tanah air, mandiri, serta
                  berkelanjutan.
                  {/* Berawal dari kegemaran mengikuti kegiatan-kegiatan sosial yang
                  bersifat mendidik, memberdayakan, dan meningkatkan kualitas
                  hidup manusia di bidang pendidikan, kesehatan, ekonomi, serta
                  perlindungan terhadap perempuan dan anak, mendorong untuk
                  mendirikan perkumpulan yang dinamakan Relawan Teman Ibu Kawan
                  Anak (R-Tika) yang dilandasi semangat gotong royong, cinta
                  tanah air, mandiri dan berkelanjutan. */}
                </p>
                <span className="text-primary blockquote-footer">
                  Tika Pangastuti - Founder R-Tika Nusantara
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
                {/* Melalui pemberdayaan masyarakat dan kemitraan
                perempuan dan laki-laki untuk peningkatan kualitas hidup di
                bidang pendidikan, kesehatan, ekonomi, politik dan perlindungan
                perempuan anak dan lansia dan pelestarian budaya tradisional
                masyarakat. R-Tika merupakan upaya peningkatan kemampuan dan
                potensi yang dimiliki masyarakat, sehingga masyarakat dapat
                mengembangkan diri secara baik, dalam mewujudkan jati diri,
                harkat dan martabat secara maksimal untuk menggapai
                kesejahteraan hidup menuju Indonesia sejahtera. */}
              </p>
              <Link to="/about" className="btn btn-primary py-2 px-3 me-3">
                Lebih Detail
                <div className="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                  <i className="fa fa-arrow-right"></i>
                </div>
              </Link>
              <a className="btn btn-outline-primary py-2 px-3" href="!#">
                Hubungi Kami
                <div className="d-inline-flex btn-sm-square bg-primary text-white rounded-circle ms-2">
                  <i className="fa fa-arrow-right"></i>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
