import React from "react";
import "./Service.css";
import service1 from "../../Assets/service1.jpg";
import service2 from "../../Assets/service2.jpg";
import service3 from "../../Assets/service3.jpg";
import service4 from "../../Assets/service4.jpg";
import service5 from "../../Assets/service5.jpg";
import service6 from "../../Assets/service6.jpg";
import feature from "../../Assets/feature.jpg";


function ServiceMain() {
  return (
    <div className="service-page">
      <div className="container">
        <div className="service">
            <div className="service-head">
                <h5 className="h5">Our Services</h5>
              <h1>We Convert Sunlight Into Electricity</h1>
            </div>
          <div className="card-wraps">
            <div className="card-boxes">
              <div className="boxes">
                <img src={service1} alt="..." width="330px " height=" 300px" />
                <div className="box-content">
                <div className="icon-head">
                <i class="fa-solid fa-solar-panel"></i>
                  <h3>
                  Solar panels for  buildings  </h3>
                  </div>
                  <p>
                    Many solar panels for commercial buildings have been
                    installed for our clients, providing a great return on
                    investment, increasing the property value of their business,
                    and providing protection against unforeseen energy price
                    increases.
                
                  </p>
                
                  <button>
                    Dealor or Distributer{" "}
                    <i class="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>
              <div className="boxes">
                <img src={service2} alt="..." width="330px " height=" 300px" />
                <div className="box-content">
                <div className="icon-head">      <i class="fa-solid fa-wind"></i>
                  <h3>
                 
              Solar power plant
                  </h3>
                  </div>
                  <p>
                    Sunlight is used by solar power plants to generate
                    electricity. One may use the sun's abundant and sustainable
                    energy to power their homes and places of business. You
                    might have to make an upfront investment to establish a
                    solar power plant. However, it will greatly reduce your
                    energy use.
                  </p>
                  <button>
                    Dealor or Distributer{" "}
                    <i class="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>
              <div className="boxes">
                <img src={service3} alt="..." width="330px " height=" 300px" />
                <div className="box-content">
                <div className="icon-head"><i class="fa-solid fa-lightbulb"></i>
                  <h3>
                   
                    Solar Modules
                  </h3>
                  </div>
                  <p>
                    The use of solar energy is growing daily, and there are many
                    positive developments in this sector that we may take
                    advantage of in the future. Do you know what a solar module
                    is? Solar modules provide a plethora of advantages,
                    including remote power systems for cabins, remote sensing,
                    and many more.
                  </p>
                  <button>
                    Dealor or Distributer{" "}
                    <i class="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
            <div className="card-boxes">
              <div className="boxes">
                <img src={service4} alt="..." width="330px " height=" 300px" />
                <div className="box-content">
                  <div className="icon-head">
                    <i class="fa-solid fa-solar-panel"></i>
                    <h3> Roof Top Power plants</h3>
                  </div>
                  <p>
                    We provide solutions for any rooftops that are underutilised
                    and that can be fitted with rooftop power plants so that the
                    energy generated may be used wisely inside the consumption
                    locations.
                  </p>
                  <button>
                    Dealor or Distributer{" "}
                    <i class="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>
              <div className="boxes">
                <img src={service5} alt="..." width="330px " height=" 300px" />
                <div className="className=box-content">
                <div className="icon-head">  <i class="fa-solid fa-wind">
                </i><h3>
                Utility-Scale Solar Power
                  </h3>
                  </div>
                  <p>
                    Utility scale power plants are available on a turnkey basis
                    for large consumers and consumers without roof space, in
                    which case we handle the entire development and delivery of
                    the finished power plant to end clients, sparing them the
                    hassles of setting up the plant.
                  </p>
                  <button>
                    Dealor or Distributer{" "}
                    <i class="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>
              <div className="boxes">
                <img src={service6} alt="..." width="330px " height=" 300px" />
                <div className="box-content">
                <div className="icon-head">
                     <i class="fa-solid fa-lightbulb"></i>
                  <h3>
                  Solar Water Pump
                  </h3>
                  </div>
                  <p>
                    We have created effective pumps that can fulfil MNRE and
                    other technical standards for both on-grid and off-grid
                    solar pumps for agricultural watering purposes.
                  </p>
                  <button>
                    Dealor or Distributer{" "}
                    <i class="fa-solid fa-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="feature">
            <div className="featurecontent">
                <h5 className="h5">Why choose us?</h5>
                <h1>High Performance solar panels are made by our company for use in both residential and commercial installations. We provide Solar panels with high effeciency and low cost
</h1>
<div className="featureicon">
                    <div className="feat-cont">
                
                <div className="icon-flex">
                      <div className="icon-view">
                      <div className="icon-box">
                      <i class="fa-solid fa-check"></i>
                      </div>
                      <div className="icon-cont">
                        <p>  Quality</p>
                        <h5>Services</h5>
                      </div>
                      </div>
                      <div className="icon-view">
                      <div className="icon-box">
                      <i class="fa-solid fa-user-check"></i>
                      </div>
                      <div className="icon-cont">
                      <p>Expert</p>
                        <h5>Workers</h5>
                      </div>
                      </div>
                </div>
                  <div className="icon-flex">
                      <div className="icon-view">
                      <div className="icon-box">
                      <i class="fa-solid fa-compass-drafting"></i>
                      </div>
                      <div className="icon-cont">
                      <p>Free</p>
                        <h5>Consultation</h5>
                      </div>
                      </div>
                      <div className="icon-view">
                      <div className="icon-box">
                      <i class="fa-solid fa-headset"></i>
                      </div>
                      <div className="icon-cont">
                      <p>Customer</p>
                        <h5>Support</h5>
                      </div>
                      </div>
                  </div>
            
                 
                    </div>
                    <div className="feat-cont"></div>
                </div>

            </div>
            <div className="featureimage">
                <img src={feature} alt="..." 
                width='700px' height='600px'/>
                
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceMain;
