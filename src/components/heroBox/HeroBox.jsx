import Counter from "../counter/Counter";
import "./HeroBox.css";


function HeroBox({ title, count, children }) {
  return (
    <div className="heroBoxContainer">
      <div className="heroBoxHeader">
        <div className="heroBoxItem">
          {children}
          <span className="heroBoxTitle"> {title} </span>
        </div>

        <p className="heroBoxCount">
          <Counter end={count} />
        </p>
      </div>
    </div>
  );
}

export default HeroBox;
