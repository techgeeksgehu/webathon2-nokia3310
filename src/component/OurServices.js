import React from "react";
import "./OurServicesContent";
import Flippy, { FrontSide, BackSide } from "react-flippy";
import data from "./OurServicesContent";
import { useNavigate } from "react-router-dom";
import './OurServices.css';

function AboutUs() {

  const navigate = useNavigate()
  return (
    <>
      <div style={{ marginTop: "50px", width: '100vw'}}>
        <h1 style={{ fontWeight: "600" }}> Our Services</h1>

        <div className="outer_div_data" style={{cursor: 'pointer'}}>
          {data.map((data) => {
            return (
              <div onClick={()=>navigate(data.path)} style={{marginBottom: '50px'}}>
              <Flippy
                flipOnHover={true}
                flipOnClick={true}
                flipDirection="horizontal"
                style={{ margin: "20px" }}
              >
                <FrontSide
                  style={{ width: "300px", height: "fit-content" }}
                >
                  <div className="courses_container" style={{marginBottom: '50px'}}>
                    <img
                      className="courses_img"
                      src={data.img}
                      style={{ height: "200px", width: "275px" }}
                      alt=""
                    />

                    <div style={{marginLeft: "20px",
                          marginRight: '20px'}}>
                      <p
                        style={{
                          fontSize: "18px",
                          fontWeight: "600",
                          marginTop: "10px",
                          
                        }}
                      >
                        {" "}
                        {data.heading}{" "}
                      </p>

                      <p style={{ marginTop: "10px" }}>{data.content}</p>

                      <div
                        style={{
                          border: "0.1px solid grey",
                          margin: "10px",
                          marginTop: "20px",
                          marginBottom: "20px",
                        }}
                      ></div>
                    </div>
                  </div>
                </FrontSide>
                <BackSide
                  style={{ width: "300px", height: "fit-content" }}
                >
                  <div className="courses_container">
                    <img
                      className="courses_img_back"
                      src={data.img}
                      style={{ height: "250px", width: "275px" }}
                      alt=""
                    />

                    <div style={{marginLeft: "20px",
                          marginRight: '20px'}} >
                      <p
                        style={{
                          fontSize: "18px",
                          fontWeight: "600",
                          marginTop: "10px",
                        }}
                      >
                        {" "}
                        {data.heading}{" "}
                      </p>
                      <div
                        style={{
                          border: "0.1px solid grey",
                          margin: "10px",
                          marginTop: "20px",
                          marginBottom: "20px",
                        }}
                      ></div>
                    </div>
                  </div>
                </BackSide>
              </Flippy>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default AboutUs;
