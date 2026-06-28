import { Card } from "react-bootstrap";
import { TfiTime } from "react-icons/tfi";
import { FaArrowLeft } from "react-icons/fa";
import "./ArticleItem.css";
import { Link } from "react-router-dom";

function ArticleItem(props) {
  return (
    <Card className="article-card">
      <Card.Img variant="top" src={props.image} />
      <Card.Body className="article-card-body">
        <Card.Title className="article-title">{props.title}</Card.Title>
        <Card.Text className="article-description">
          {props.description}
        </Card.Text>
        <Link to={`/article/${props.id}`}>
          <span className="read-more">
            <span>ادامه مقاله</span>
            <FaArrowLeft />
          </span>
        </Link>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between align-items-center py-3">
        <span>نویسنده : {props.writter} </span>
        <span>
          {" "}
          {<TfiTime />} {props.readingTime} دقیقه
        </span>
      </Card.Footer>
    </Card>
  );
}

export default ArticleItem;
