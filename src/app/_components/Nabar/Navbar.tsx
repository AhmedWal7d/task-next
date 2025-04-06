"use client"
import {
  Container,
  Navbar,
  Nav,
  Form,
  Button,
  Dropdown,

} from 'react-bootstrap';
import {
  FaArrowLeft,
  FaBars,
  FaGlobe,
  FaInstagram,
  FaRegUser,
  FaTiktok
} from 'react-icons/fa';
import { BsSnapchat } from 'react-icons/bs';
import { FaXTwitter } from 'react-icons/fa6';
import img from '../../../../public/assets/Screenshot 2025-04-05 142327.png';
import Image from 'next/image';
export default function Header() {
  return (
    <div className="hero-section text-white text-end position-relative">
      <div className="hero-bg"></div>

      <div className="bg-navbar position-relative z-3 fixed-top ">
        <Container>
          <div className="d-flex justify-content-between align-items-center px-3 text-white pt-3">
            <div className="d-flex gap-2">
              <BsSnapchat size={15} />
              <FaTiktok size={15} />
              <FaInstagram size={15} />
              <FaXTwitter size={15} />
            </div>
      

            <Dropdown className="text-white">
              <Dropdown.Toggle
                variant="link"
                className="text-white p-0 d-flex align-items-center gap-1 border-0 shadow-none"
                id="dropdown-language"
              >
                <span>AR</span>
                <FaGlobe size={12} />
              </Dropdown.Toggle>
              <Dropdown.Menu className="text-end">
                <Dropdown.Item href="#">AR  العربية</Dropdown.Item>
                <Dropdown.Item href="#">EN  English</Dropdown.Item>
                <Dropdown.Item href="#">FR  Français</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>

          <hr className="text-white my-2" />

          <Navbar expand="lg" variant="dark">
            <Container fluid>
              <Navbar.Brand href="#">
                <Image src={img} alt="Logo" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="main-navbar" className="text-white border-0">
                <FaBars />
              </Navbar.Toggle>
              <Navbar.Collapse id="main-navbar" className="justify-content-between">
                <Nav className="mx-auto mb-2 mb-lg-0 gap-lg-3 text-center text-lg-end">
                  <Nav.Link href="#" className=" fw-bold activehome active">الرئيسية</Nav.Link>
                  <Nav.Link href="#" className="text-white fw-bold activehomehover">خدماتنا</Nav.Link>
                  <Nav.Link href="#" className="text-white fw-bold activehomehover">عن الشركة</Nav.Link>
                  <Nav.Link href="#" className="text-white fw-bold activehomehover">الوجهات السياحية</Nav.Link>
                  <Nav.Link href="#" className="text-white fw-bold activehomehover">المدونة</Nav.Link>
                  <Nav.Link href="#" className="text-white fw-bold activehomehover">ألبوم الصور</Nav.Link>
                </Nav>
                <Button className="btn cusstom-btn bg-center text-white btn-navbar px-3 fw-bold d-flex align-items-center gap-2" type="button">
                  <FaRegUser size={15} /> التسجيل
                </Button>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Container>
      </div>

      <Container className="position-relative z-2 responsiveheader text-end">
        <h1 className="display-5 fw-bold">اجعل رحلتك أكثر تحديًا</h1>
        <p className="lead fw-bold mt-4">استكشف العديد من الرحلات و الخدمات الرائعة</p>
        <Button className="btn cusstom-btn d-none d-lg-block text-white px-3 mt-3 fw-bold btnheader">
          احجز الآن <FaArrowLeft size={14} className='mx-1' />
        </Button>
      </Container>

      <div className="mx-auto search-bar rounded-4 shadow p-3 mt-5 d-flex flex-wrap gap-2 align-items-center justify-content-between divpositionheader">
        <div>
          <Form.Label className="text-black fw-bold text-muted">نوع الرحله</Form.Label>
          <Form.Select className="w-auto fw-bold text-muted mt-2">
            <option>اختر نوع الرحلة</option>
            <option>مغامرة</option>
            <option>استرخاء</option>
          </Form.Select>
        </div>

        <div>        <Form.Label className="text-black fw-bold text-muted">الوجهات</Form.Label>
          <Form.Select className="w-auto fw-bold text-muted mt-2">
            <option>اختر الوجهة</option>
            <option>دبي</option>
            <option>شرم الشيخ</option>
          </Form.Select>
        </div>

        <div>      <Form.Label className="text-black fw-bold text-muted">السعر</Form.Label>
          <Form.Select className="w-auto fw-bold text-muted mt-2">
            <option>50 ج.م</option>
            <option>100 ج.م</option>
            <option>200 ج.م</option>
          </Form.Select>
        </div>

        <Button className="btn cusstom-btn text-white px-3 mt-4 fw-bold btnheader">
          البحث <FaArrowLeft size={14} className="mx-1" />
        </Button>
      </div>
    </div>
  );
}
