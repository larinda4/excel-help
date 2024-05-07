import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>What support can we offer to enhance your Excel spreadsheets?</h2>
          <p> We're not simply focused on enhancing your current setup. Our approach involves examining the root issues to optimize your entire workflow. You'll be amazed by the full extent of Excel's capabilities.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}

        </div>
        <a
                  href="#contact"
                  className="btn btn-custom btn-lg page-scroll">
                  Learn More
                </a>
      </div>
    </div>
  );
};
