import { useEffect, useState } from "react";
import MyNavbar from "../../components/navbar/MyNavbar";
import "./Articles.css";
import { Accordion, Col, Container, Row , Form, Alert } from "react-bootstrap";
import ArticleItem from "../../components/article/ArticleItem";
import axios from "axios";
import Footer from "../../components/footer/Footer";
import { TiArrowUnsorted } from "react-icons/ti";
import { MdCategory } from "react-icons/md";



function Articles() {
  const [articles, setArticles] = useState([]);
  const [sortType, setSortType] = useState("earliest");
  const [searchKey, setSearchKey] = useState("");

  const getArticlesByOrder = (order, column) => {
    axios
      .get(
        `http://localhost/react/api/articles/?order=${order}&column=${column}`
      )
      .then((response) => setArticles(response.data.data));
  };

  useEffect(() => {
    if (sortType == "earliest") getArticlesByOrder("desc", "id");
    else if (sortType == "latest") getArticlesByOrder("asc", "id");
    else if (sortType == "longest") getArticlesByOrder("desc", "readingTime");
    else if (sortType == "shortest") getArticlesByOrder("asc", "readingTime");
  }, [sortType]);

  const sortHandler = (e) => {
    setSortType(e.target.id);
  };

  const searchInputHandler = (e) => {
    setSearchKey(e.target.value);
  };

  const searchButtonHandler = () => {
    axios
      .get(
        `http://localhost/react/api/articles/?search=${searchKey}&column=writter`
      )
      .then((response) => setArticles(response.data.data));
  };

  

  return (
    <>
      <MyNavbar />
      <Container>
        <div className="searchSection">
          <h1>لیست مقالات </h1>
          <div className="searchBox">
            <input
              className="inputSection"
              type="text"
              placeholder="جستجو بر اساس نویسنده"
               onChange={searchInputHandler}
            />
            <button className="BtnSection" onClick={searchButtonHandler}>جستجو</button>
          </div>
        </div>

        <Row>
          <Col className="col-12 col-lg-3">
            <Accordion alwaysOpen>
              <Accordion.Item eventKey="0">
                <Accordion.Header> <TiArrowUnsorted size={'20px'} /> <b>مرتب سازی</b> </Accordion.Header>
                <Accordion.Body>
                  <Form>
                    <Form.Check
                      type="radio"
                      id="earliest"
                      name="sort"
                      label="جدید ترین"
                      onChange={sortHandler}
                    />
                    <Form.Check
                      type="radio"
                      id="latest"
                      name="sort"
                      label="قدیمی ترین"
                      onChange={sortHandler}
                    />
                    <Form.Check
                      type="radio"
                      id="longest"
                      name="sort"
                      label="طولانی ترین"
                      onChange={sortHandler}
                    />
                    <Form.Check
                      type="radio"
                      id="shortest"
                      name="sort"
                      label="کوتاه ترین"
                      onChange={sortHandler}
                    />
                  </Form>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header> <MdCategory size={'20px'} /> <b>دسته بندی</b></Accordion.Header>
                <Accordion.Body>
                  دسته بندی
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col className="col-12 col-lg-9">
            <Row className="row-cols-1 row-cols-md-2 row-cols-xl-3 gy-4">
              {articles.map((article) => (
                <Col>
                  <ArticleItem {...article} />
                </Col>
              ))}
            </Row>
            
            {articles.length == 0 && (
              <Alert variant="warning" className="py-3 gy-4 mt-4">
                <p>مقاله ای یافت نشد!!!!</p>
              </Alert>
            )}
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
}

export default Articles;
