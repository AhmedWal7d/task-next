"use client"
import { useRef } from "react";
import Slider from "react-slick";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaStar, FaArrowLeft, FaArrowRight } from "react-icons/fa";
import img1 from "../../../../public/assets/images.jpeg";
import img2 from "../../../../public/assets/Sahaba.jpg";
import { LuPen } from "react-icons/lu";
import Image, { StaticImageData } from "next/image";

interface Tour {
    title: string;
    price: number;
    rating: number;
    img?: StaticImageData;
}

const tours: Tour[] = [
    { title: "الرحلة العائلية", price: 50, rating: 4.5, img: img2 },
    { title: "الرحلة الثقافية", price: 40, rating: 4.2, img: img1 },
    { title: "الرحلة البحرية", price: 60, rating: 4.8, img: img1 },
    { title: "الرحلة الصحراوية", price: 70, rating: 4.3, img: img1 },
];

export default function TourSliderSection() {
    const sliderRef = useRef<Slider>(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1,
        rtl: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 992,
                settings: { slidesToShow: 2 },
            },
            {
                breakpoint: 768,
                settings: { slidesToShow: 1 },
            },
        ],
    };

    return (
        <section className="tour-slider-section position-relative container py-5">
            <Container fluid>
                <Row className="mb-4">
                    <div className="text-start">
                        <Button variant="primary" className="rounded-pill px-4 cusstom-btn">
                            استكشف ←
                        </Button>
                    </div>
                </Row>

                <Row>
                    <Col md={3} sm={12} className="position-relative">
                        <div>
                            <h2 className="fw-bold title_section">الرحلات السياحية</h2>
                            <h5 className="text-muted">استمتع باستكشاف رحلتك السياحية المميزة</h5>
                        </div>
                        <div className="mx-5 w-50">
                            <div
                                className="custom-slider-arrow slider-arrow-prev d-flex justify-content-center align-items-center position-absolute"
                                onClick={() => sliderRef.current?.slickNext()}
                            >
                                <FaArrowRight size={20} />
                            </div>
                            <div
                                className="custom-slider-next slider-arrow-next d-flex justify-content-center align-items-center position-absolute"


                                onClick={() => sliderRef.current?.slickPrev()}
                            >
                                <FaArrowLeft size={20} />
                            </div>
                        </div>
                    </Col>
                    <Col md={9}>
                        <Slider ref={sliderRef} {...settings}>
                            {tours?.map((tour, idx) => (
                                <div key={idx} className="px-2">
                                    <div className="tour-card position-relative">
                                        <div className="rating-badge">
                                            <FaStar className="text-warning" size={14} />
                                            {tour.rating}
                                        </div>
                                        {tour.img && (
                                            <Image
                                                src={tour.img}
                                                alt={tour.title}
                                                width={500}
                                                height={300}
                                                className="w-100 h-100 object-fit-cover"
                                            />
                                        )}

                                        <div className="overlay">
                                            <div className="d-flex justify-content-between align-items-start">
                                                <div className="d-flex align-items-center">
                                                    <Button className="bg-transparent border-white btn-sm">المزيد</Button>
                                                </div>

                                                <div className="text-end text-white">
                                                    <h6 className="mb-1">{tour.title}</h6>
                                                    <div className="d-flex align-items-center justify-content-end gap-2">
                                                        <p className="mb-0">10</p>
                                                        <LuPen size={14} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            ))}
                        </Slider>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
