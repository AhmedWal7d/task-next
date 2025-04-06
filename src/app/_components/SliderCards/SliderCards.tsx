"use client"
import img from '../../../../public/assets/Rectangle 164188.png';
import img2 from '../../../../public/assets/Rectangle 164188@2x.png';
import img4 from '../../../../public/assets/Rectangle 164190.png';
import img5 from '../../../../public/assets/Rectangle 164190@2x.png';
import Slider from 'react-slick';

import { Container } from 'react-bootstrap';
import Image from 'next/image';

export default function SliderCards() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <Container className="mt-5" fluid dir="rtl">
      <div className="text-center mb-4 mt-5 pt-3">
        <h2 className="fw-bold title_section">استكشف الوجهات</h2>
        <p className="fw-bold text-muted">استمتع باستكشاف الرحلات الممتعة معنا</p>
      </div>

      <div className="w-100 container" dir='ltr'>
        <Slider {...settings}>
          {[{
            src: img, title: "ولاية بوشر"
          }, {
            src: img2, title: "ولاية صلالة"
          }, {
            src: img4, title: "ولاية مسقط"
          }, {
            src: img5, title: "ولاية العامرات"
          }, {
            src: img2, title: "ولاية صلالة"
          }].map((dest, idx) => (
            <div key={idx} className="cardslider text-center px-2 position-relative">
              <Image src={dest.src} alt={`Destination ${idx + 1}`} className="img-fluid  w-100" />
              <div className="bg-card"></div>
              <h4 className="fw-bold mt-2 title_section">{dest.title}</h4>
            </div>
          ))}
        </Slider>
      </div>
    </Container>
  );
}
