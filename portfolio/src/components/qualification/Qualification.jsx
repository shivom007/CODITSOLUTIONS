import React from 'react';
import "./qualification.css";

const Qualification = () => {
   
  return (
    <section className="qualification section">
        <h2 className="section__title">Qualification</h2>
        <span className="section__subtitle">My Personal Journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className="qualification__button qualification__active button--flex "
                >
                    <i className="uil uil-graduation-cap qualification__icon"></i>
                    Education
                </div>
               
            </div>

            <div className="qualification__sections">
                <div className="qualification__content qualification__content-active "
                >
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">
                            Computer Science and Technology
                            </h3>
                            <span className="qualification__subtitle">GITA College <br/>
                            Bhubaneswar<br/> Odisha</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender"></i> 2019 - 2023
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                    </div>
                    <div className="qualification__data">
                        <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>
                        <div>
                            <h3 className="qualification__title">
                                Intermediate
                            </h3>
                            <span className="qualification__subtitle">C.N Inter Colege <br/>
                            Dugda, Bokaro<br/> Jharkhand</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender"></i> 2017 - 2019
                            </div>
                        </div>
                       

                    </div>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">
                            Matriculation
                            </h3>
                            <span className="qualification__subtitle">D.A.V Public School <br/>
                            Dugda, Bokaro<br/> Jharkhand</span>
                            <div className="qualification__calender">
                                <i className="uil uil-calender"></i> 2015 - 2016
                            </div>
                        </div>
                        <div>
                            <span className="qualification__rounder"></span>
                            <span className="qualification__line"></span>
                        </div>

                    </div>
                    
                </div>
               
            </div>
        </div>


    </section>
  )
}

export default Qualification