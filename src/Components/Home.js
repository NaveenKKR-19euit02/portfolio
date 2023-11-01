import React from "react"
import './Home.css'
import Html from './assets/html.jpg'
import Css from './assets/css.jpg'
import Boot from './assets/boot.jpg'
import Reac from './assets/react.jpg'
import Node from './assets/node.png'
import My from './assets/mysql.webp'

export function Home(){
    return(
              <div className="container">
        <div className="mb-5 mt-5" style={{border:"0"}}>
        <div className="row">
              <div className="col-xl-6 col-md-6 col-sm-12 col-12 order-sm-2 d-flex justify-content-center" >
              </div>
              <div className="d-flex align-items-center justify-content-center">
                <div className="body d-flex justify-content-center flex-column align-items-center">
                  <h5 className="title ho1 animated-text">Naveen K K R</h5>
                  <p className="text profession">Full Stack Develpoper</p>
                  <a className="btn resume-view" href="https://drive.google.com/file/d/1lg2k6SoUAKd0Ej3Hb3MFP70KAJRDYE06/view?usp=drivesdk" role="button" target="_blank">View Resume</a>
                </div>
              </div>
            </div>
          </div>
      </div>
    )
}
export function About(){
    return(
        <div className="container info"id="about">
        <div className="mb-3 mt-5" style={{border:"0"}}>
          <div className="row">
                <div className="col-xl-4 col-md-4 col-sm-12 col-12 d-flex justify-content-center" >
                </div>
                <div className=" d-flex align-items-center justify-content-center">
                  <div className="body d-flex justify-content-center flex-column align-items-center">
                    <h5 className="title head-purple sliding-heading ">About Me</h5>
                    <p className="text about-text">Versatile Full Stack Developer
                      with a flair for seamless integration, innovation, and holistic design
                      thinking. Skilled in creating interactive and visually captivating
                      websites that prioritize user experience. A problem solver who bridges
                      the gap between creativity and technical expertise to deliver
                      outstanding digital solutions.
                      </p>
                  </div>
                </div>
              </div>
            </div>
      </div>
    );
}
export function Education(){
    return(
        <div className="container" id="education">
        <div className="mb-3 mt-5" style={{border:"0"}}>
          <div className="row">
                <div className=" d-flex justify-content-center" >
                </div>
                <div className=" d-flex align-items-center justify-content-center">
                  <div className="body d-flex justify-content-center flex-column align-items-center">
                    <h5 className="title ho1 head-white mt-4 sliding-heading">Education</h5>
                    <div className=" container-fluid row mt-3">
                      <div className="col-lg-4">
                        <p className="edu1">B.Tech Information Technology</p>
                        <p className="edu2">Sri Krishna College of Engineering and technology</p>
                        <p className="edu3">2019-2023</p>
                        <p className="edu3">CGPA:7.62</p>
                      </div>
                      <div className="col-lg-4">
                        <p className="edu1">Higher Secondary School</p>
                        <p className="edu2">Barathi vidya bhavan</p>
                        <p className="edu3">2018-2019</p>
                        <p className="edu3">Percentage:62</p>
                      </div>
                      <div className="col-lg-4">
                        <p className="edu1">Secondary School</p>
                        <p className="edu2">Barathi vidya bhavan</p>
                        <p className="edu3">2016-2017</p>
                        <p className="edu3">Percentage:89</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
      </div>
    );
}

export function Technical(){
    return(
        <div className="container mt-5 mb-3 pt-5 pb-5 d-flex flex-column align-items-center" id="technical">
        <p className="head-purple mt-4 sliding-heading">Technical Skills</p>
        <div className="row">
          <img className="col-lg-2 col-4 mt-2" src={Html} alt=""/>
          <img className="col-lg-2 col-4 mt-2"src={Css} alt=""/>
          <img className="col-lg-2 col-4 mt-2"src={Boot} alt=""/>
          <img className="col-lg-2 col-4 mt-2"src={Reac} alt=""/>
          <img className="col-lg-2 col-4 mt-2"src={Node} alt=""/>
          <img className="col-lg-2 col-4 mt-2"src={My} alt=""/>
        </div>
      </div>
    );
}

export function Contact(){
    return(
        <div className="container d-flex flex-column align-items-center" id="contact">
        <p className="head-white mt-3 sliding-heading">Contact me</p>
        <div className="row">
          <div className="mb-3 col-lg-6 d-flex flex-column justify-content-center">
            <div className="mb-3">
              <img src="https://cdn-icons-png.flaticon.com/128/8898/8898833.png" alt="" width="30px"/>
              <p className="contact" style={{display:"inline"}}>naveenravikkr.com</p>
            </div>
            <div className="mb-3">
              <img src="https://cdn-icons-png.flaticon.com/128/3814/3814365.png" alt="" width="30px"/>
              <p className="contact"  style={{display:"inline"}}>9791665577</p>
            </div>
            <div className="mb-3">
              <img src="https://cdn-icons-png.flaticon.com/128/1433/1433265.png" alt="" width="30px" style={{display:"inline"}}/>
              <p className="contact" style={{display:"inline"}}>10,kuilon thoppu, 2nd street, karungalpalayam  erode-638003</p>
            </div>
          </div>
            <div className=" mb-3 col-lg-6">
              <p className="contact-form">Get in Touch</p>
              <form action="mailto:naveenravikkr@gmail.com" method="post" enctype="text/plain">
              <div className="row g-3 mt-1">
                <div className="col">
                  <label for="name">Name</label>
                </div>
                <div className="col">
                  <input type="text" className="form-control" placeholder="Name" aria-label="name" required/>
                </div>
              </div>
              <div className="row g-3 mt-1">
                <div className="col">
                  <label for="number">Ph.no</label>
                </div>
                <div className="col">
                  <input type="tel" className="form-control" placeholder="10 digit number" aria-label="number" required/>
                </div>
              </div>
              <div className="row g-3 mt-1">
                <div className="col">
                  <label for="mail">Mail</label>
                </div>
                <div className="col">
                  <input type="email" className="form-control" placeholder="***@gmail.com" aria-label="mail" required/>
                </div>
              </div>
              <div className="row g-3 mt-1">
                <div className="col">
                  <label for="query">Query</label>
                </div>
                <div className="col">
                  <input type="text" className="form-control" placeholder="Write your Query" aria-label="query" required/>
                </div>
              </div>
              <div className="row g-3 mt-1">
                <div className="col">
                  <input type="submit" className="form-control submit-btn" value="send"/>
                </div>
              </div>
            </form>
          </div>
        </div>
        </div>
    );
}