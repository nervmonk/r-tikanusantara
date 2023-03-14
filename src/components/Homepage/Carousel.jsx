import { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from "reactstrap";
import carousel1 from "../../assets/img/carousel-tika-1.jpg";
import carousel2 from "../../assets/img/carousel-tika-3.jpg";
import { Link } from "react-router-dom";

const items = [
  {
    src: carousel1,
    altText: "Slide 1",
    title: "Welcome to R-Tika Nusantara",
    caption: "Perkumpulan Relawan Teman Ibu Kawan Anak Nusantara",
    link: "about",
    btnCaption: "Tentang Kami",
    key: 1,
  },
  {
    src: carousel2,
    altText: "Slide 2",
    title: "Bersama Lakukan Perubahan",
    caption:
      "Gotong Royong membangun generasi yang sehat, cerdas, berbudaya dan cinta tanah air",
    link: "photo-gallery",
    btnCaption: "Lihat Galeri",
    key: 2,
  },
];

function HeaderCarousel(args) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.key}
      >
        <div className="carousel-item active">
          <img className="w-100" src={item.src} alt="Ertika Purnamasari" />
          <div className="carousel-caption">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-7 pt-5">
                  <h1 className="display-4 text-white mb-3 animated slideInDown">
                    {item.title}
                  </h1>
                  <p className="fs-5 text-white-50 mb-5 animated slideInDown">
                    {item.caption}
                  </p>
                  <Link
                    className="btn btn-primary py-2 px-3 animated slideInDown"
                    to={item.link}
                  >
                    {item.btnCaption}
                    <div className="d-inline-flex btn-sm-square bg-white text-primary rounded-circle ms-2">
                      <i className="fa fa-arrow-right"></i>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CarouselItem>
    );
  });

  return (
    <div className="container-fluid p-0 mb-5 wow fadeIn" data-wow-delay="0.1s">
      <div
        id="header-carousel"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}
          {...args}
        >
          <CarouselIndicators
            items={items}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
          />
          {slides}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={next}
          />
        </Carousel>
      </div>
    </div>
  );
}

export default HeaderCarousel;
