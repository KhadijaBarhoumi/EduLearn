import React from "react";
import "../App.css";

const Entro = () => {
  return (
    <section
      className="vc_row wpb_row vc_row-fluid"
      style={{ marginLeft: 200, marginTop: 100, fontSize: "30px" }}
    >
      <div className="maincontainer">
        <div className="row">
          <div className="wpb_column vc_column_container vc_col-sm-3">
            <div className="vc_column-inner ">
              <div className="wpb_wrapper" />
            </div>
          </div>
          <div className="wpb_column vc_column_container vc_col-sm-6">
            <div className="vc_column-inner ">
              <div className="wpb_wrapper">
                <div className="wpb_text_column wpb_content_element ">
                  <div className="wpb_wrapper">
                    <h2 style={{ color: "#ffffff ", textAlign: "center" }}>
                      <strong>
                        <span style={{ color: "#ffffff  " }}>Who are we</span>
                        <br />
                      </strong>
                    </h2>
                  </div>
                </div>
                <div className="wpb_text_column wpb_content_element ">
                  <div className="wpb_wrapper">
                    <p
                      style={{
                        textAlign: "center",
                        color: "#FFFF",
                        fontWeight: 600,
                        width: 300,
                      }}
                    >
                      <span style={{ color: "#f205fa  " }}> EduLearn is </span>
                      <strong>
                        <span style={{ color: "#FFFF" }}>
                          an online teaching and learning platform for everyone.
                        </span>
                      </strong>{" "}
                      Classes are presented by colleagues, professors, experts
                      and video clips and remain open for replay without time
                      limit ..
                    </p>
                  </div>
                </div>
                <div className="vc_empty_space" style={{ height: 32 }}>
                  <span className="vc_empty_space_inner" />
                </div>
              </div>
            </div>
          </div>
          <div className="wpb_column vc_column_container vc_col-sm-3">
            <div className="vc_column-inner ">
              <div className="wpb_wrapper" />
            </div>
          </div>
        </div>
      </div>
      <div className="clearfix" />
    </section>
  );
};

export default Entro;
