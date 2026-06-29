import "./CourseItem.css";
import { FaUsers } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { TbCurrencyIranianRial } from "react-icons/tb";

function CourseItem(props) {
  return (
    <div className="courseCardWrapper">
      <div className="courseCardImage">
        <img className="courseImage" src={props.image} />
        <p>
          <FaUsers size="20px" />
          <span> {props.studentCount} </span>
        </p>
      </div>
      <div className="courseCardContent">
        <h5 className="courseName">{props.title}</h5>
        <p className="courseDescription">{props.description} </p>
      </div>
      <div className="courseCardTeacher">
        <p>
          <GiTeacher size="25px" />
          <span> مدرس : {props.teacher} </span>
        </p>
      </div>
      <div className="courseCardFooter">
        <p>
          <button>
            <b>ثبت نام دوره</b>
          </button>
        </p>
        <p>
            <b>{props.mainPrice}</b>
          <TbCurrencyIranianRial size="25px" />
          
        </p>
      </div>
    </div>
  );
}

export default CourseItem;
