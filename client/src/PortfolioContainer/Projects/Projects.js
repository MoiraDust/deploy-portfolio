import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./Projects.css";

import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollerService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";

export default function Projects(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollerService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  // implement carousel
  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <div>
      <ScreenHeading
        title={"Projects"}
        subHeading={"What projects I have done in a year"}
      />
      <section className="projects-section fade-in" id={props.id || ""}>
        <div className="container">
          <div className="row">
            <OwlCarousel
              className="owl-carousel"
              id="projects-carousel"
              {...options}
            >
              {/* project 1 : Greedy Snake*/}
              <div className="col-lg-12">
                <div className="project-item">
                  <div className="project-comment">
                    <p>
                      <i className="fa fa-file-code-o" />
                      Main Stack: Typescript
                      <br />
                      <i className="fa fa-file-text-o" />
                      Description:
                      <br />- This page is used to show myself.
                      <br />- This is a static page with no backend.
                      <br />- You can download my CV, browser my projects, find
                      my contact details and understand me a little in the
                      website.
                    </p>
                  </div>
                  <div className="project-info">
                    <img src="img/Projects/greedy.png" alt="no connection" />
                    <a href="https://56gf7h.sse.codesandbox.io/">
                      <h5>
                        <i className="fa fa-link" />
                        Greedy Snake
                      </h5>
                    </a>
                    <p>Aug 2022 - Aug 2022</p>
                  </div>
                </div>
              </div>
              {/* project 2 : E-commercial website*/}
              <div className="col-lg-12">
                <div className="project-item">
                  <div className="project-comment">
                    <p>
                      <i className="fa fa-file-code-o" />
                      Main Stack: PHP, MySQL, Laravel
                      <br />
                      <i className="fa fa-file-text-o" />
                      Description:
                      <br />- This website is based on PHP.
                      <br />- This is not a front and back end separated site.
                      <br />- You can browser and search the goods, login,
                      logout, register, look through the recommend staff in the
                      carousel and place the order
                    </p>
                  </div>
                  <div className="project-info">
                    <img src="img/Projects/php.jpeg" alt="no connection" />
                    <a href="https://www.youtube.com/watch?v=QjKziE-_a7I">
                      <h5>
                        <i className="fa fa-link" />
                        E-commercial website
                      </h5>
                    </a>
                    <p>Apr 2022 - Apr 2022</p>
                  </div>
                </div>
              </div>
              {/* Project 3 : Restful API for Medicine industry*/}
              <div className="col-lg-12">
                <div className="project-item">
                  <div className="project-comment">
                    <p>
                      <i className="fa fa-file-code-o" />
                      Main Stack: Django, MySQL
                      <br />
                      <i className="fa fa-file-text-o" />
                      Description:
                      <br />- This is a restful API project.
                      <br />- You can do add, delete, alter and query operations
                      <br />- There is no visualization of the results of this
                      project, so I've attached my git repository here
                    </p>
                  </div>
                  <div className="project-info">
                    <img src="img/Projects/django.jpeg" alt="no connection" />
                    <a href="https://github.com/MoiraDust/Django-Demo">
                      <h5>
                        <i className="fa fa-link" />
                        Restful API for Medicine industry
                      </h5>
                    </a>
                    <p>Mar 2022 - Mar 2022</p>
                  </div>
                </div>
              </div>
              {/* Project 4 :  Todo List*/}
              <div className="col-lg-12">
                <div className="project-item">
                  <div className="project-comment">
                    <p>
                      <i className="fa fa-file-code-o" />
                      Main Stack: React
                      <br />
                      <i className="fa fa-file-text-o" />
                      Description:
                      <br />- You can view, add, delete and alter your tasks
                      <br />- This website does not have any backend, so you CAN
                      NOT login and logout. Please DO NOT really use it as a
                      tool, it's just a practice project for me.
                    </p>
                  </div>
                  <div className="project-info">
                    <img
                      src="img/Projects/logo-react-icon.png"
                      alt="no connection"
                    />
                    <a href="https://moira-todolist.herokuapp.com/">
                      <h5>
                        <i className="fa fa-link" />
                        Todo List
                      </h5>
                    </a>
                    <p>Jan 2022 - Jan 2022</p>
                  </div>
                </div>
              </div>
              {/* Project 5 :  Shopping Site*/}
              <div className="col-lg-12">
                <div className="project-item">
                  <div className="project-comment">
                    <p>
                      <i className="fa fa-file-code-o" />
                      Main Stack: "MERN"
                      <br />
                      <i className="fa fa-file-text-o" />
                      Description:
                      <br />- This is a virtual shopping site.
                      <br />- This is a front and back end separation project
                      <br />- You can browser the items, add items to cart,
                      login, logout and register, change your account details
                      and place the order
                    </p>
                  </div>
                  <div className="project-info">
                    <img src="img/Projects/nodejs.png" alt="no connection" />
                    <a href="https://www.youtube.com/watch?v=ZtKgmbNh6p0">
                      <h5>
                        <i className="fa fa-link" />
                        Shopping Site
                      </h5>
                    </a>
                    <p>Nov 2021 - Dec 2021</p>
                  </div>
                </div>
              </div>
              {/* Project 6 :  Capstone: Screen System*/}
              <div className="col-lg-12">
                <div className="project-item">
                  <div className="project-comment">
                    <p>
                      {/* <i className="fa fa-quote-left" />
                      Main Technologies: MERN. An online test system which can
                      rank the players
                      <i className="fa fa-quote-right" /> */}
                      <i className="fa fa-file-code-o" />
                      Main Stack: "MERN"
                      <br />
                      <i className="fa fa-hand-o-right"></i>
                      Collab: Switch Maven, Sydney
                      <br />
                      <i className="fa fa-file-text-o" />
                      Description:
                      <br />- This is my capstone project. I developed the site
                      based on client's requirements
                      <br />- This is site has two roles, they are admin and
                      player. Admin can upload files, browser and alter players'
                      details. Player can do the tests. The main purpose of this
                      project is to screen the players.
                    </p>
                  </div>
                  <div className="project-info">
                    <img src="img/Projects/mongodb.png" alt="no connection" />
                    <a href="https://moira-resume.herokuapp.com/experience/1">
                      <h5>
                        <i className="fa fa-link" />
                        Capstone: Screen System
                      </h5>
                    </a>
                    <p>Sep 2021 - Nov 2021</p>
                  </div>
                </div>
              </div>
              {/* Project 7 :  Smart Education*/}
              <div className="col-lg-12">
                <div className="project-item">
                  <div className="project-comment">
                    <p>
                      {/* <i className="fa fa-quote-left" />
                      Main Technologies: React, Spring Boot, MySQL, face-api.js,
                      BaiDu Face API, JAVA. A system that enables attendance
                      recording by face recognition
                      <i className="fa fa-quote-right" /> */}
                      <i className="fa fa-file-code-o" />
                      Main Stack: React, Spring Boot, MySQL, face-api.js, BaiDu
                      Face API, JAVA
                      <br />
                      <i className="fa fa-file-text-o" />
                      Description:
                      <br />- This is a smart education system.
                      <br />- This is a front and back end separation project
                      <br />- This site has two roles, they are student and
                      teacher. Student can record attendance using face
                      recognition and browser BBS of each course. Teacher can
                      check students' attendance and browser BBS.
                    </p>
                  </div>
                  <div className="project-info">
                    <img src="img/Projects/spring.png" alt="no connection" />
                    <a href="https://moira-resume.herokuapp.com/experience/2">
                      <h5>
                        <i className="fa fa-link" />
                        Smart Education
                      </h5>
                    </a>
                    <p>Nov 2021 - Nov 2021</p>
                  </div>
                </div>
              </div>
            </OwlCarousel>
          </div>
        </div>
      </section>
      <div className="footer-image">
        <img src="img/Projects/shape-bg.png" alt="" />
      </div>
    </div>
  );
}
