import classes from "./CallMe.module.css";

const CallMe = () => {
  return (
    <div className={`container-fluid ${classes.appointment} my-5 py-5`}>
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-lg-5 col-md-6 wow fadeIn" data-wow-delay="0.3s">
            <div className="border-start border-5 border-primary ps-4 mb-5">
              <h6 className="text-white text-uppercase mb-2">Hubungi Kami</h6>
              <h1 className="display-6 text-white mb-0">
                Sampaikan Aspirasi Anda Kepada Kami
              </h1>
            </div>
            <p className="text-white mb-0">
              Gunakan form ini untuk menyampaikan aspirasi anda ataupun
              konsultasi. Pesan anda akan kami terima dan kami usahakan
              secepatnya kembali menghubungi anda. Lampirkan nomor handphone
              jika bersedia kami hubungi.
            </p>
          </div>
          <div className="col-lg-7 col-md-6 wow fadeIn" data-wow-delay="0.5s">
            <form>
              <div className="row g-3">
                <div className="col-sm-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control bg-dark border-0"
                      placeholder="Gurdian Name"
                    />
                    <label htmlFor="gname">Nama Anda</label>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control bg-dark border-0"
                      placeholder="Gurdian Email"
                    />
                    <label htmlFor="gmail">Email Anda</label>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-floating">
                    <input
                      type="tel"
                      className="form-control bg-dark border-0"
                      id="cname"
                      placeholder="Child Name"
                    />
                    <label htmlFor="cname">No. HP (opsional)</label>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control bg-dark border-0"
                      placeholder="Child Age"
                    />
                    <label htmlFor="cage">Kota</label>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-floating">
                    <textarea
                      className="form-control bg-dark border-0"
                      placeholder="Leave a message here"
                      style={{ height: "100px" }}
                    ></textarea>
                    <label htmlFor="message">Pesan Anda</label>
                  </div>
                </div>
                <div className="col-12">
                  <button disabled className="btn btn-primary w-100 py-3 mb-5">
                    Kirim Pesan
                  </button>
                </div>
                <div className="col-6">
                  <a
                    className="btn btn-success w-100 py-3"
                    href="https://wa.me/6287840140470"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-whatsapp me-1"></i>Ketua
                  </a>
                </div>
                <div className="col-6">
                  <a
                    className="btn btn-success w-100 py-3"
                    href="https://wa.me/6281314440225"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-whatsapp me-1"></i>Bantuan Hukum
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallMe;
