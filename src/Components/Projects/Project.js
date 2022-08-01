import React from "react";
import "./Project.css";
import Project1 from '../../img/portfolio-1.jpg';
import Project2 from '../../img/portfolio-2.jpg';
import Project3 from '../../img/portfolio-3.jpg';


function Project() {
  return (
    <div className="project component__space" id="Portfolio">
      <div className="heading">
        <h1 className="heading">My Latest Project</h1>
        <p className="heading p__color">
          These projects are convert from wordpress to ReactJS 
        </p>
        <p className="heading p__color">
          and some projects are build from blank.
        </p>
      </div>
       <div className="container">
           <div className="row">
             
             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project1} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Ideahubbd.com</h5>
                     <h4 className="project__text">This is Technology based Company</h4>
                     <a href="https://ideahubbd.com/" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project2} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Ebacket.com</h5>
                     <h4 className="project__text">Online shopping Company</h4>
                     <a href="https://ebacket.com/" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project3} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Development is ongoing</h5>
                     <h4 className="project__text">Getting tickets to the big show</h4>
                     <a href="/" className="project__btn">View Details</a>
                     </div>
                 </div>
             </div>
            
             <div className="view__more__btn d__flex align__items__center justify__content__center pxy__30">
             <button className="view__more pointer btn">View more</button>
             </div>

           </div>
       </div>
    </div>
  );
}

export default Project;
