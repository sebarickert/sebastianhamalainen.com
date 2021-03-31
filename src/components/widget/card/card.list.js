import React from "react";

const WidgetCardList = ({ children }) => (
  <ul className="card-list">
    {children
      ? children.map((child) => (
          <li className="card-list__item" key={child.props.title}>
            {child}
          </li>
        ))
      : ""}
  </ul>
);
export default WidgetCardList;
