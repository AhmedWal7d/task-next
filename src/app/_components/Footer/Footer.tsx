import { Container, Row, Col } from 'react-bootstrap';
import img from '../../../../public/assets/Screenshot 2025-04-05 142327.png';
import Image from 'next/image';
import { FaEnvelope, FaFacebookF, FaInstagram, FaPhoneAlt, FaTiktok } from 'react-icons/fa';
import { FaLocationDot, FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="footer  text-white " >
      <Container>
        <Row className="gy-">
          <Col md={3} className="text-center text-md-end">
            <Image src={img} alt="Logo" />
            <p className=" small fw-bold mt-2">
              موقع Round هو منصة إلكترونية تهدف إلى تقديم مجموعة متنوعة من الخيارات للسياح والمقيمين لاستكشاف الجمال 
            </p>
            <ul className="d-flex footer-social justify-content-center justify-content-md-start gap-3 mt-4 list-unstyled">
  <li>
    <a href="#">
      <FaFacebookF className="text-white fs-5" />
    </a>
  </li>
  <li>
    <a href="#">
      <FaInstagram className="text-white fs-5" />
    </a>
  </li>
  <li>
    <a href="#">
      <FaTiktok className="text-white fs-5" />
    </a>
  </li>
  <li>
    <a href="#">
      <FaXTwitter className="text-white fs-5" />
    </a>
  </li>
</ul>
          </Col>

          <Col md={6}>
            <Row>
              <Col xs={6}>
                <h5 className="fw-bold  mx-4 px-3">الصفحات</h5>
                <ul className="list-unstyled">
                  <li><a href="#" className="text-white d-block mb-2 fw-bold">خدماتنا</a></li>
                  <li><a href="#" className="text-white d-block mb-2 fw-bold">عن الشركة</a></li>
                  <li><a href="#" className="text-white d-block mb-2 fw-bold">الوجهات السياحية</a></li>
                  <li><a href="#" className="text-white d-block mb-2 fw-bold">العضوية</a></li>
                  <li><a href="#" className="text-white d-block mb-2 fw-bold">اليوم السياحي</a></li>
                </ul>
              </Col>
              <Col xs={6}>
                <ul className="list-unstyled mt-4 pt-2">
                  <li><a href="#" className="text-white d-block mb-2 fw-bold">الأحكام والشروط</a></li>
                  <li><a href="#" className="text-white d-block mb-2 fw-bold">سياسة الخصوصية</a></li>
                  <li><a href="#" className="text-white d-block mb-2 fw-bold">الأسئلة الشائعة</a></li>
                  <li><a href="#" className="text-white d-block mb-2 fw-bold">تواصل معنا</a></li>
                </ul>
              </Col>
            </Row>
          </Col>

          <Col md={3}>
            <h5 className="fw-bold mb-3 mx-4 px-3">بيانات التواصل</h5>
            <ul className="list-unstyled">
  <li className="d-flex align-items-center mb-2">
    <FaPhoneAlt className="mx-3" />
    <span>+2 1235 1235 123</span>
  </li>
  <li className="d-flex align-items-center mb-2">
    <FaEnvelope className="mx-3"/>
    <span>Info@mail.com</span>
  </li>
  <li className="d-flex align-items-center mb-2">
    <FaLocationDot className="mx-3" />
    <span>Egypt - Cairo</span>
  </li>
</ul>
          </Col>

        </Row>

        <hr className="border-light " />

        <div className="d-flex flex-column flex-md-row justify-content-between text-center pt-4">
          <span className="small">جميع الحقوق محفوظة Round © 2024</span>
          <span className="small">
            صنع بـ ❤️ بواسطة <strong>APEX</strong>
          </span>
        </div>
      </Container>
    </footer>
  );
}
