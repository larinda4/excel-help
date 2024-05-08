import { Image } from "./image";
import React from "react";

export const Gallery = (props) => {
  return (
    <div id="about">
    <div className="container">
      <div className="row">
      <div className="col-xs-12 col-md-6">
          <div className="about-text">
            <h2>Projects</h2>
            <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
            </div>
          </div>
        <div className="col-xs-12 col-md-6">
          {" "}
          <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
        </div>

        </div>
      </div>
    </div>
  );
};
