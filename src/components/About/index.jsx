import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    const aboutSection = document.getElementById("about-section");
    aboutSection.scrollIntoView({
      behavior: "smooth",
    });
  });

  return (
    <div className="page" id="about-section">
      <section className="about">
        <div className="intro">
          <p>
            <span className="lede">
              Landlines is an initiative developed by
              <a href="https://www.m12studio.org" target="”_blank”">
                M12 Studio
              </a>
            </span>
            in order to connect new art installations and cultural work
            throughout Colorado's rural San Luis Valley. The Initiative is meant
            to challenge us to think collectively about place, cultural
            preservation, environmental awareness, and our rural futures. In
            collaboration with many artists, researchers and community partners,
            we have supported and developed projects that interpret the
            complexity and uniqueness of the San Luis Valley (SLV). From
            2018-2022 M12’s work in the SLV highlights a range of rural
            phenomena including adobe architecture, potato farms, rivers and
            acequias, deserts and sand dunes, ufology, folk music, medicinal
            ecology and off-road and DIY homesteads.
          </p>

          <p>
            M12 operates as both a creative studio and 501c3 Non-Profit
            Organization. By providing support for artists and researchers, the
            Landlines Initiative has resulted in numerous low-impact art
            installations throughout the region and a contemporary addition to
            the cultural record of the San Luis Valley. In the time of COVID we
            are not able to celebrate this work through our usual lectures,
            potluck dinners and block parties. We have developed this
            interactive map and its contents as a way to celebrate the Landlines
            Initiative and the unique cultural ecology of the San Luis Valley.
            Stay tuned for the Landlines book in 2022.
          </p>
        </div>
        <div className="contributors">
          <h3>Contributors</h3>
          <div className="contributors-container">
            <ul className="artists">
              <li>Kirsty Duran</li>

              <li>
                <a href="http://elliotstudio.com/" target="”_blank”">
                  Elliot Ross
                </a>
              </li>

              <li>
                <a
                  href="https://bustergraybill.com/home.html"
                  target="”_blank”"
                >
                  Buster Graybill
                </a>
              </li>

              <li>
                <a href="https://www.kalifajardoanstine.com/" target="”_blank”">
                  Kali Fajardo-Anstine
                </a>
              </li>

              <li>Andrew Valdez</li>

              <li>
                <a href="https://jetsonorama.net/" target="”_blank”">
                  Chip Thomas
                </a>
              </li>

              <li>
                <a
                  href="https://www.historycolorado.org/person/diprince-dawn"
                  target="”_blank”"
                >
                  Dawn DiPrince
                </a>
              </li>

              <li>
                <a href="https://www.jessicakahkoska.com/" target="”_blank”">
                  Jessica Kahkoska
                </a>
              </li>

              <li>Kate Berry</li>

              <li>Caitlin Wise</li>

              <li>Peggy Godfrey</li>

              <li>Eric Carpio</li>

              <li>
                <a href="https://www.richardsaxton.org/" target="”_blank”">
                  Richard Saxton
                </a>
              </li>

              <li>
                <a
                  href="https://uccs.edu/vapa/index/art_history/faculty/macaulay"
                  target="”_blank”"
                >
                  Suzanne MacAulay
                </a>
              </li>
              <li>Rio de la Vista</li>
            </ul>

            <ul className="institutions">
              <li>Michael Rael</li>
              <li>
                <a href="https://www.ourstrangeplanet.com/" target="”_blank”">
                  Christopher O'Brien
                </a>
              </li>

              <li>
                <a href="http://spiderwebsinthesky.com/ " target="”_blank”">
                  Raven Chacon
                </a>
              </li>

              <li>
                <a href="https://dylangoldenaycock.com/" target="”_blank”">
                  Dylan Golden Aycock
                </a>
              </li>

              <li>Loretta Mitson</li>

              <li>Reyes García</li>

              <li>
                <a href="https://www.rael-sanfratello.com/" target="”_blank”">
                  Rael San Fratello
                </a>
              </li>

              <br />

              <li>
                <a href="https://conejos.colibraries.org/" target="”_blank”">
                  Conejos County Library
                </a>
              </li>

              <li>
                <a href="https://aes.agsci.colostate.edu/" target="”_blank”">
                  CSU Agriculture Experiment Station
                </a>
              </li>

              <li>
                <a href="https://www.sangreheritage.org/" target="”_blank”">
                  Sangre de Christo Heritage Area
                </a>
              </li>

              <li>
                <a
                  href="https://www.historycolorado.org/fort-garland-museum-cultural-center"
                  target="”_blank”"
                >
                  Fort Garland Museum and Cultural Center
                </a>
              </li>

              <li>
                <a
                  href="https://blogs.adams.edu/salazar-center/"
                  target="”_blank”"
                >
                  Salazar Rio Grande del Norte Center
                </a>
              </li>

              <li>
                <a href="https://www.loc.gov/folklife/" target="”_blank”">
                  American Folklife Center
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="partners">
          <img
            src="./assets/partners_02.jpg"
            alt="logos of Landlines Partners"
          />
        </div>
      </section>
    </div>
  );
};

export default About;
