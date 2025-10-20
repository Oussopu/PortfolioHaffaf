import justPrice from '../assets/img/Ljp.png';
import lizzysWorld from '../assets/img/Lw.png';
import ohMyFood from '../assets/img/Omf.png';
import { useWorksSlider } from '../hooks/useWorksSlider.ts';
import Text from './Text';

export default function WorksSlider() {
  const { setSliderRef } = useWorksSlider();
  return (
    <section className="works-slider embla open-0" ref={setSliderRef} aria-label="Works slider">
      <div className="embla__container">
        <section className="embla__slide">
          <div className="first-work">
            <div className="first-work-title">
              <div className="number-work">
                <Text name="01" color="#f2f2f2" fontSize="20px" fontWeight="700" />
              </div>
              <div className="name-work">
                <Text name="LIZZY'SWORLD" color="#f2f2f2" fontSize="20px" fontWeight="700" />
              </div>
            </div>
            <div className="first-work-description">
              <div className="image-wrapper">
                <img src={lizzysWorld} alt="lizzy's world" />
                <span className="dev-badge">STILL IN DEVELOPMENT</span>
              </div>
              <Text
                name="STEP INTO LIZZY'S WORLD OF VINTAGE FASHION. THIS E-COMMERCE PLATFORM
                                      TRANSFORMS SECOND-HAND SHOPPING INTO AN IMMERSIVE EXPERIENCE THROUGH
                                      THOUGHTFUL DESIGN THAT HIGHLIGHTS EACH UNIQUE PIECE WHILE RESPECTING
                                      THE ARTISTIC SOUL OF THE COLLECTION."
                color="#f2f2f2"
                fontWeight="700"
                fontSize="20px"
              />
            </div>
          </div>
        </section>
        <section className="embla__slide">
          <div className="second-work">
            <div className="second-work-title">
              <div className="number-work">
                <Text name="02" color="#141414" fontSize="20px" fontWeight="700" />
              </div>
              <div className="name-work">
                <Text name="THE PRICE IS RIGHT" color="#141414" fontSize="20px" fontWeight="700" />
              </div>
            </div>
            <div className="second-work-description">
              <div className="image-wrapper">
                <a
                  href="https://oussopu.github.io/jeux-le-juste-prix/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={justPrice} alt="the game show" />
                </a>
              </div>
              <Text
                name="INSPIRED BY THE ICONIC TV SHOW 'THE PRICE IS RIGHT', I BUILT AN
                  INTERACTIVE GUESSING GAME WHERE PLAYERS COMPETE AGAINST A RANDOM
                  PRICE GENERATOR. AN ACADEMIC PROJECT CHALLENGING ME TO DESIGN AND
                  DEPLOY A FULLY FUNCTIONAL GAME WITHIN A SINGLE DAY."
                color="#141414"
                fontWeight="700"
                fontSize="20px"
              />
            </div>
          </div>
        </section>

        <section className="embla__slide">
          <div className="third-work">
            <div className="third-work-title">
              <div className="number-work">
                <Text name="03" color="#f2f2f2" fontSize="20px" fontWeight="700" />
              </div>
              <div className="name-work">
                <Text name="OH MY FOOD" color="#f2f2f2" fontSize="20px" fontWeight="700" />
              </div>
            </div>
            <div className="third-work-description">
              <div className="image-wrapper">
                <a
                  href="https://oussopu.github.io/OC-projet-3/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={ohMyFood} alt="oh my food" />
                </a>
              </div>
              <Text
                name="AS PART OF AN ACADEMIC PROJECT, I DEVELOPED A WEB APPLICATION
                  TO FACILITATE THE DISCOVERY OF RESTAURANTS IN MY CITY TO FIND
                  THE IDEAL RESTAURANT ACCORDING TO YOUR DESIRES OF THE MOMENT."
                color="#f2f2f2"
                fontWeight="700"
                fontSize="20px"
              />
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
