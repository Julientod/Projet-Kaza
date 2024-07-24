import { useState } from "react";
import "./dropdown.css";

function Dropdown(props) {
  const { title, content } = props;
  const [open, setOpened] = useState(false);

  return (
    <div className="dropdown_content">
      <div className="dropdown">
        <div className="dropdown--head" style={{ borderRadius: "10px" }}>
          <div className="dropdown--title">{title}</div>
          <img
            src={require("../../images/UpArrow.png")}
            alt="dropdown arrow"
            className={
              open ? "dropdown--arrow--open" : "dropdown--arrow--close"
            }
            onClick={() => {
              setOpened(!open);
            }}
          />
        </div>
        <div className={open ? "content_text" : "content_text_none"}>
          {Array.isArray(content) ? (
            <ul className="equipements_content">
              {content.map((ctn, i) => (
                <li key={i}>{ctn}</li>
              ))}
            </ul>
          ) : (
            <div>{content}</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
