import FadeEffect from './animations/FadeEffect.tsx';
import Text from './Text.tsx';

const TextAbout = () => (
  <div className="text-about">
    <FadeEffect delay={0}>
      <Text
        name="WEBSITES HAVE ALWAYS CAPTIVATED ME. THIS PASSION LED ME TO
ENROLL IN A FULL-STACK WEB DEVELOPMENT DEGREE PROGRAM. EARNING MY
DEGREE WAS JUST THE BEGINNING."
        fontSize="20px"
        fontWeight="100"
        color="#f2f2f2"
      />
    </FadeEffect>
    <FadeEffect delay={0}>
      <Text
        name="MY PASSION FOR ANIMATIONS AND JAVASCRIPT GREW TREMENDOUSLY DURING
MY INITIAL FULL-STACK DEGREE PROGRAM. THIS LED ME TO ENROLL IN
ANOTHER DEGREE PROGRAM MASTERING SASS, JAVASCRIPT, AND REACT."
        fontSize="20px"
        fontWeight="100"
        color="#f2f2f2"
      />
    </FadeEffect>
    <FadeEffect delay={0}>
      <Text
        name="AFTER SUCCESSFULLY COMPLETING BOTH CERTIFICATIONS, I AM NOW
SEEKING A FRONT-END WEB DEVELOPER POSITION WITHIN A COMPANY.
I ALSO OFFER FULL WEBSITE CREATION FROM START TO FINISH IF
NEEDED. FEEL FREE TO CHECK OUT MY SERVICES SECTION.
"
        fontSize="20px"
        fontWeight="100"
        color="#f2f2f2"
      />
    </FadeEffect>
  </div>
);

export default TextAbout;
