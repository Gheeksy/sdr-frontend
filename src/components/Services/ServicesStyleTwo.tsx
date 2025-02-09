'use client'

import React from 'react'
import { Link } from 'react-router-dom'
import { Img as Image } from 'react-image'

import shapeImg1 from '../../assets/images/shape/services-shape/1.png'
import shapeImg2 from '../../assets/images/shape/services-shape/2.png'
import shapeImg3 from '../../assets/images/shape/services-shape/3.png'
import shapeImg4 from '../../assets/images/shape/services-shape/4.png'
import shapeImg5 from '../../assets/images/shape/services-shape/5.png'
import shapeImg6 from '../../assets/images/shape/services-shape/6.png'

const ServicesStyleTwo: React.FC = () => {
  return (
    <>
      <div className="offer-area pt-100 pb-70">
        <div className="container">
          <div className="section-title">
            <h2>Our Professionals Services For You</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure
              architecto quaerat eaque sapiente accusantium ad ut explicabo
              consequuntur fuga quidem? Sint.
            </p>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-sm-6">
              <div className="single-offer">
                <i className="flaticon-chip"></i>
                <h3>
                  <Link to="/services/service-details/">
                    Robotics & Drones
                  </Link>
                </h3>
                <p>
                  Lorem consectetur ipsum dolor sit amet, adipiscing elit, do
                  eiusmod tempor incididunt sed.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-offer">
                <i className="flaticon-vr"></i>
                <h3>
                  <Link to="/services/service-details/">
                    Virtually Reality
                  </Link>
                </h3>
                <p>
                  Lorem consectetur ipsum dolor sit amet, adipiscing elit, do
                  eiusmod tempor incididunt sed.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-offer">
                <i className="flaticon-blockchain"></i>
                <h3>
                  <Link to="/services/service-details/">
                    Blockchain Project
                  </Link>
                </h3>
                <p>
                  Lorem consectetur ipsum dolor sit amet, adipiscing elit, do
                  eiusmod tempor incididunt sed.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-offer">
                <i className="flaticon-target"></i>
                <h3>
                  <Link to="/services/service-details/">
                    Image Processing
                  </Link>
                </h3>
                <p>
                  Lorem consectetur ipsum dolor sit amet, adipiscing elit, do
                  eiusmod tempor incididunt sed.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-offer">
                <i className="flaticon-choice"></i>
                <h3>
                  <Link to="/services/service-details/">
                    Order Management
                  </Link>
                </h3>
                <p>
                  Lorem consectetur ipsum dolor sit amet, adipiscing elit, do
                  eiusmod tempor incididunt sed.
                </p>
              </div>
            </div>

            <div className="col-lg-4 col-sm-6">
              <div className="single-offer">
                <i className="flaticon-deep-learning"></i>
                <h3>
                  <Link to="/services/service-details/">
                    Machine Learning
                  </Link>
                </h3>
                <p>
                  Lorem consectetur ipsum dolor sit amet, adipiscing elit, do
                  eiusmod tempor incididunt sed.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="offer-shape">
          <Image src={shapeImg1} alt="Image" width={300} height={375} />
          <Image src={shapeImg2} alt="Image" width={300} height={375} />
          <Image src={shapeImg3} alt="Image" width={41} height={36} />
          <Image src={shapeImg4} alt="Image" width={20} height={20} />
          <Image src={shapeImg5} alt="Image" width={28} height={30} />
          <Image src={shapeImg6} alt="Image" width={25} height={25} />
        </div>
      </div>
    </>
  )
}

export default ServicesStyleTwo
