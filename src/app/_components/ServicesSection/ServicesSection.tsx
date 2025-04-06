import { Container, Row, Col, Card } from "react-bootstrap";
import { FaCar, FaUmbrellaBeach, FaCalendarAlt } from "react-icons/fa";
import logo from '../../../../public/assets/travel-svgrepo-com.svg';
import img1 from '../../../../public/assets/Rectangle 164188@2x.png';
import Image from "next/image";

export default function ServicesSection() {
    return (
        <div className="services-section py-5 mt-5">
            <Container>
                <Row className="align-items-center">
                    <Col md={6} className="text-center ">
                        <div className="position-relative">
                            <div className="main-image-wrapper ">
                                <Image
                                    src={img1}
                                    alt="background"
                                    className="img-fluid main-image w-100"
                                />
                            </div>

                            <Image
                                src={img1}
                                alt="overlay"
                                className="overlay-image d-none d-lg-block"
                            />
                        </div>
                    </Col>

                    <Col md={6} className="text-end">
                        <h4 className="fw-bold mb-3 mt-4 title_section">الخدمات</h4>
                        <p className="mb-4 text-muted">
                            توفر شركة <strong>Round In Oman</strong> العديد من الخدمات المتنوعة و الممتعة استكشفها و استمتع معنا
                        </p>

                        <div className="d-flex flex-column gap-3">
                            <Card className="service-card d-flex flex-row align-items-center border-0">
                                <div className="icon-wrapper icon bg-info text-white">
                                    <img src={logo} alt="trip" className="icon-img" />
                                </div>
                                <div className="mx-3 text-end">
                                    <h6 className="mb-1 fw-bold">خدمات الرحلات</h6>
                                    <p className="mb-0 text-muted small fw-bold">
                                        فرصة رائعة لاكتشاف أماكن جديدة وتجربة مغامرات مشوقة
                                    </p>
                                </div>
                            </Card>



                            <Card className=" service-card d-flex flex-row align-items-center border-0">
                                <div className="icon bg-primary text-white">
                                    <FaCar size={20} />
                                </div>
                                <div className="mx-3">
                                    <h6 className="mb-1 fw-bold">خدمات التنقل</h6>
                                    <p className="mb-0 text-muted small fw-bold">
                                        يمكنك حجز تاكسي أو تأجير سيارة حسب خطتك لإكمال رحلتك معنا
                                    </p>
                                </div>
                            </Card>

                            <Card className="service-card d-flex flex-row align-items-center border-0">
                                <div className="icon bg-success text-white mt-1">
                                    <FaUmbrellaBeach size={20} />
                                </div>
                                <div className="mx-3">
                                    <h6 className="mb-1 fw-bold">الخدمات الترفيهية</h6>
                                    <p className="mb-0 text-muted small fw-bold">
                                        استمتع بالأنشطة الترفيهية والتنوع إلى جانب اختيار الأنشطة المناسبة لك
                                    </p>
                                </div>
                            </Card>

                            <Card className="service-card d-flex flex-row align-items-center border-0">
                                <div className="icon bg-info text-white">
                                    <FaCalendarAlt size={20} />
                                </div>
                                <div className="mx-3">
                                    <h6 className="mb-1 fw-bold">خدمة حجز الفنادق</h6>
                                    <p className="mb-0 text-muted small fw-bold">
                                        خدمة حجز الفنادق هي طريقة مريحة وسريعة لحجز فندقك المناسب أثناء الرحلة
                                    </p>
                                </div>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
