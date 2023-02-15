import fact1 from "../../assets/img/facts-1.jpg";
import fact2 from "../../assets/img/facts-2.jpg";
import fact3 from "../../assets/img/facts-3.jpg";
import fact4 from "../../assets/img/facts-4.jpg";
import classes from "./WhatIDo.module.css";

const WhatIDo = () => {
  return (
    <div className="container-xxl py-3">
      <div
        className="text-center mx-auto mb-5 wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ maxWidth: "500px" }}
      >
        <div className="d-inline-block rounded-pill bg-secondary text-primary py-1 px-3 mb-3">
          Ragam Kegiatan
        </div>
        <h1 className="display-6 mb-5">Program Kerja dan Kegiatan</h1>
      </div>
      <div className="row g-0">
        <div className="col-xl-3 col-sm-6 wow fadeIn" data-wow-delay="0.1s">
          <div className="position-relative">
            <img
              className="img-fluid w-100"
              src={fact1}
              alt=""
              style={{ objectFit: "cover" }}
            />
            <div className={classes.facts}>
              <h1 className="display-1">01</h1>
              <h4 className="text-white mb-3">Pemberdayaan</h4>
              <p className="text-white">
                Pemberdayaan dalam bidang perempuan, anak, dan masyarakat
              </p>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 wow fadeIn" data-wow-delay="0.3s">
          <div className="position-relative">
            <img
              className="img-fluid w-100"
              src={fact2}
              alt=""
              style={{ objectFit: "cover" }}
            />
            <div className={classes.facts}>
              <h1 className="display-1">02</h1>
              <h4 className="text-white mb-3">Bantuan Hukum</h4>
              <p className="text-white">
                Pemberian bantuan hukum kepada masyarakat yang membutuhkan
              </p>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 wow fadeIn" data-wow-delay="0.5s">
          <div className="position-relative">
            <img
              className="img-fluid w-100"
              src={fact3}
              alt=""
              style={{ objectFit: "cover" }}
            />
            <div className={classes.facts}>
              <h1 className="display-1">03</h1>
              <h4 className="text-white mb-3">Pendidikan</h4>
              <p className="text-white">
                Pemberantasan buta huruf hingga pendidikan kecakapan hidup
              </p>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 wow fadeIn" data-wow-delay="0.7s">
          <div className="position-relative">
            <img
              className="img-fluid w-100"
              src={fact4}
              alt=""
              style={{ objectFit: "cover" }}
            />
            <div className={classes.facts}>
              <h1 className="display-1">04</h1>
              <h4 className="text-white mb-3">Multi Bidang</h4>
              <p className="text-white">
                Pemberdayaan bidang pendidikan, kesehatan, hingga ekonomi
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
