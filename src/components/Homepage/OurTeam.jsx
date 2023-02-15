import tika from "../../assets/img/team-tika.jpg";
import dinar from "../../assets/img/team-dinar.jpg";
import ratu from "../../assets/img/team-ratu.jpg";
import haerandi from "../../assets/img/team-haerandi.jpg";
import rudy from "../../assets/img/team-rudy.jpg";
import ali from "../../assets/img/team-ali.jpg";
import bambang from "../../assets/img/team-bambang.jpg";

const OurTeam = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div
          className="text-center mx-auto mb-5 wow fadeInUp"
          data-wow-delay="0.1s"
          style={{ maxWidth: "500px" }}
        >
          <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">
            Dewan Pendiri
          </div>
          <h1 className="display-6 mb-5">
            Struktur Organisasi R-Tika Nusantara
          </h1>
        </div>
        <div className="row g-3">
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="team-item position-relative rounded overflow-hidden">
              <div className="overflow-hidden">
                <img className="img-fluid" src={tika} alt="" />
              </div>
              <div className="team-text bg-light text-center p-4">
                <h5>Tika Dian Pangastuti, S.S.,</h5>
                <p className="text-primary">Ketua</p>
                <div className="team-social text-center">
                  <a className="btn btn-square" href="!#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="btn btn-square" href="!#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="btn btn-square" href="!#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="team-item position-relative rounded overflow-hidden">
              <div className="overflow-hidden">
                <img className="img-fluid" src={dinar} alt="" />
              </div>
              <div className="team-text bg-light text-center p-4">
                <h5>Dinar Raniwiharti, S.Kom.,</h5>
                <p className="text-primary">Sekretaris</p>
                <div className="team-social text-center">
                  <a className="btn btn-square" href="!#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="btn btn-square" href="!#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="btn btn-square" href="!#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="team-item position-relative rounded overflow-hidden">
              <div className="overflow-hidden">
                <img className="img-fluid" src={ratu} alt="" />
              </div>
              <div className="team-text bg-light text-center p-4">
                <h5>Ratu Nadia Syafira Zahra, S.H.,</h5>
                <p className="text-primary">Bendahara</p>
                <div className="team-social text-center">
                  <a className="btn btn-square" href="!#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="btn btn-square" href="!#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="btn btn-square" href="!#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row g-4 mt-1">
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="team-item position-relative rounded overflow-hidden">
              <div className="overflow-hidden">
                <img className="img-fluid" src={haerandi} alt="" />
              </div>
              <div className="team-text bg-light text-center p-4">
                <h5>Haerandi, S.I.Kom.,</h5>
                <p className="text-primary">
                  Divisi Bidang Strategi Komunikasi dan Public Relation
                </p>
                <div className="team-social text-center">
                  <a className="btn btn-square" href="!#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="btn btn-square" href="!#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="btn btn-square" href="!#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
            <div className="team-item position-relative rounded overflow-hidden">
              <div className="overflow-hidden">
                <img className="img-fluid" src={ali} alt="" />
              </div>
              <div className="team-text bg-light text-center p-4">
                <h5>Ali Zubeir Hasibuan, S.H.,</h5>
                <p className="text-primary">
                  Divisi Bidang Hukum dan Bantuan Hukum
                </p>
                <div className="team-social text-center">
                  <a className="btn btn-square" href="!#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="btn btn-square" href="!#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="btn btn-square" href="!#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
            <div className="team-item position-relative rounded overflow-hidden">
              <div className="overflow-hidden">
                <img className="img-fluid" src={bambang} alt="" />
              </div>
              <div className="team-text bg-light text-center p-4">
                <h5>Bambang Purnomo, S.T.,</h5>
                <p className="text-primary">
                  Divisi Bidang Hukum dan Bantuan Hukum
                </p>
                <div className="team-social text-center">
                  <a className="btn btn-square" href="!#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="btn btn-square" href="!#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="btn btn-square" href="!#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
            <div className="team-item position-relative rounded overflow-hidden">
              <div className="overflow-hidden">
                <img className="img-fluid" src={rudy} alt="" />
              </div>
              <div className="team-text bg-light text-center p-4">
                <h5>Rudy Prastyawan, S.T.,</h5>
                <p className="text-primary">
                  Divisi Pendidikan, Parenting, Pengembangan dan Perlindungan
                  Anak
                </p>
                <div className="team-social text-center">
                  <a className="btn btn-square" href="!#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a className="btn btn-square" href="!#">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="btn btn-square" href="!#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
