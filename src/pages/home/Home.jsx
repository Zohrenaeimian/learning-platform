import { Col, Container, Row } from "react-bootstrap";
import Footer from "../../components/footer/Footer";
import Hero from "../../components/hero/Hero";
import MyNavbar from "../../components/navbar/MyNavbar";
import { useEffect, useState } from "react";
import axios from "axios";
import ArticleItem from "../../components/article/ArticleItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import SwiperButtons from "../../components/swiperButtons/SwiperButtons";
import "./Home.css";

function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost/react/api/articles/?page=1&limit=6")
      .then((Response) => setArticles(Response.data.data));
  }, []);

  return (
    <div>
      <MyNavbar />
      <Hero />
      <Container>
        {/* <h1 style={{ margin: "30px" }}>لیست مقالات </h1>
        <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 gy-4">
          {articles.map(article => 
            <Col>
              <ArticleItem {...article} />
            </Col>
          )}
        </Row> */}

        <Row>
          <Swiper
            className="customSwiperStyle"
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            breakpoints={{
              1200: {
                slidesPerView: 4,
              },
              992: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 2,
              },
              500: {
                slidesPerView: 1,
              },
            }}
          >
            <div className="swiperTopSection">
              <h2 className="sectionTitle">جدیدترین مقالات</h2>
              <SwiperButtons />
            </div>
            {articles.map((article) => (
              <SwiperSlide>
                <ArticleItem {...article} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Row>
      </Container>

      <Footer />
    </div>
  );
}

export default Home;
