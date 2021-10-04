import React from 'react';
import './About.css'
import img from '../../images/sideimage.jpg'
import img2 from '../../images/background5.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignature } from '@fortawesome/free-solid-svg-icons';

const About = () => {

    const fontIcon=<FontAwesomeIcon icon={faSignature}></FontAwesomeIcon>

    return (
        <div>
            <h1 className="text-center mt-5 fw-bold" >It All Starts In The Kitchen</h1>

            <section className="flex-Container">

                <div className="half-width">

                    <h4   >About us</h4>
                    <h1>Our Journy</h1>
                    <p className="h5">Our Cooking School features a long and proud
                        history of more than 100 years.
                        Founded at the end of the XIXth century
                        by few NYC top Chefs of the time,
                        the Cooking School has always been
                        the ultimate destination
                        for anyone who’ve ever wanted to
                        become a professional Chef!
                        We’re also known to be one of the
                        pioneering facil ities,
                        that defied the racism and sexism
                        of the age, always having
                        accepted students based solely
                        on their skills and perspective!
                        <span className="fw-bold d-block">
                            Over the years we’ve been evolving
                            together with the culinary
                            trends that spanned across the culinary world…
                            For example, when the Asian cuisine became trending,
                            we instantly added it to our
                            Classes List, just as we did
                            later with the Fusion cuisine as
                            it was rising in the ’90s. All in all,
                            we always feature  a strong
                            team of professional Chefs,
                            a strong list of cooking  classes and a
                            forward-only attitude!
                        </span>

                    </p>
                </div>
                <div>
                    <img className="image-adjust" src={img} alt="" />

                    <p className="h5 fw-bold text-justify ">
                        Today we have more than 6 main cooking classes and more
                        than 35 sub-classes, all taught by a team of
                        well-known  Chefs.
                    </p>
                    <p className=" d-block h5 fw-bold ">

                        Our current list of Classes includes:
                    </p>
                    <ul type="square">
                        <li>Baking & Pastry</li>
                        <li>Fish, Meat & Poultry</li>
                        <li>International Cuisine</li>
                        <li> Desserts</li>
                        <li> Seafood & Wine</li>
                        <li> Exotic Cuisines</li>
                    </ul>
                    <p className=" h5 fw-bold ">… and 35 more sub-classes!</p>
                </div>
            </section>
              <hr className="horizontal-bar " />

            <section>
            <h1 className="text-center mt-5 fw-bold">Reviews Of Our Students</h1>
            <img className="student-image" src={img2} alt="" />

             <p className="h6  text-justify  mt-4 mx-auto">
             Becoming a professional Chef was definitely one of
              the hardest decisions in my life and one of the
              toughest studying processes that I have ever
              gone through… But after all these trials & errors
               and after 12 months of “tough love” from the cooking tutors,
                I was rewarded finally, with a Sous
             Chef position at the Hartford highest rated French restaurant!
             </p>
             <h3  className="text-center mt-5 fw-bold">Annabelle
             <span className="text-warning text-danger"> Bellinghorn</span>

              {fontIcon}</h3>
             <h3 className="text-center text-primary  fw-bold mb-5">Former Student</h3>
            </section>


        </div>
    );
};

export default About;