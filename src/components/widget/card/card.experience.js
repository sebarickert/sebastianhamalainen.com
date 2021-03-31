import React from "react";

const WidgetCardExperience = ({
  children,
  title,
  organization,
  timeframe,
  link,
}) => (
  <div className="card card--experience">
    <h3 className="card__title">{title}</h3>
    <p className="card__organization">
      {link ? (
        <a href={link} className="card__link">
          {organization}
        </a>
      ) : (
        organization
      )}
    </p>
    <p className="card__timeframe">{timeframe}</p>
    {children ? <p className="card__content">{children}</p> : ""}
  </div>
);
export default WidgetCardExperience;
