import React from "react";

import propTypes from "prop-types";
import Button from "elements/Button";
import "./index.scss";
export default function Breadcrumb(props) {
  const className = [props.className];
  return (
    <div>
      <nav arial-label="breadcrumb">
        <div className={className.join(" ")}>
          {props.data.map((item, index) => {
            return (
              <span
                key={`breadcrumb-${index}`}
                className={`breadcrumb-item${
                  index === props.data.length - 1 ? " active" : ""
                }`}
              >
                {index === props.data.length - 1 ? (
                  item.pageTitle
                ) : (
                  <Button type="link" href={item.pageHref}>
                    {item.pageTitle}
                  </Button>
                )}
              </span>
            );
          })}
        </div>
      </nav>
    </div>
  );
}

Breadcrumb.propTypes = {
  data: propTypes.array,
  className: propTypes.string,
};
