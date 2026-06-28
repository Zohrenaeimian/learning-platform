import { Col, Container, Row } from "react-bootstrap";
import "./Hero.css";
import heroImage from "../../assets/images/hero.svg";
import HeroBox from "../heroBox/HeroBox";
import { GrArticle } from "react-icons/gr";
import { ImBooks } from "react-icons/im";
import { FaUserAlt } from "react-icons/fa";
import { MdOutlineDoneOutline } from "react-icons/md";
import { BsFillSkipStartFill } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Hero() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="heroContainer">
        <Container>
          <Row className="align-item-centar">
            <Col className="col-12 col-md-6 right-col" data-aos="fade-left">
              <img src={heroImage} className="heroImage img-fluid" />
            </Col>

            <Col className="col-12 col-md-6" data-aos="fade-right">
              <h2 className="heroTitle">آمارها باعث افتخار ما هستند</h2>
              <Row className="gy-5 justify-content-center row-cols-1 row-cols-xl-2">
                <Col>
                  <HeroBox title="تعداد دانشجو" count={3500}>
                    <FaUserAlt size={"35px"} />
                  </HeroBox>
                </Col>
                <Col>
                  <HeroBox title="تعداد مقاله" count={960}>
                    <GrArticle size={"35px"} />
                  </HeroBox>
                </Col>
                <Col>
                  <HeroBox title="تعداد دوره" count={19}>
                    <ImBooks size={"35px"} />
                  </HeroBox>
                </Col>
                <Col>
                  <HeroBox title=" پروژه موفق" count={15}>
                    <MdOutlineDoneOutline size={"35px"} />
                  </HeroBox>
                </Col>
              </Row>
              <div className="startLearling">
                <span>شروع آموزش</span>
                <BsFillSkipStartFill size={"35px"} />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#a2d9ff"
          d="m0 128 48 16c48 16 144 48 240 26.7C384 149 480 75 576 64s192 43 288 48 192-37 288-42.7c96-5.3 192 26.7 240 42.7l48 16V0H0Z"
        ></path>
      </svg>
    </>
  );
}

export default Hero;
