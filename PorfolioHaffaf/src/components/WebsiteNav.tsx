import { useNavHoverAnimation } from '../hooks/useNavHoverAnimation';
import { useNavigateToSection } from '../hooks/useNavigateToSection';
import { useTextSplitAnimation } from '../hooks/useTextSplitAnimation';
import Text from './Text.tsx';

const WebsiteNav = () => {
  useNavHoverAnimation();

  useTextSplitAnimation({
    selector: '.website-nav ul li p',
    animationClass: 'char-animate',
    randomOrder: true,
    delayRange: [0, 150],
  });

  const { navigateToSection } = useNavigateToSection();

  return (
    <div className="website-nav">
      <ul>
        <li>
          <button type="button" onClick={() => navigateToSection('about')} className="nav-button">
            <Text name="ABOUT ME" fontSize="20px" fontWeight="100" />
          </button>
        </li>
        <li>
          <button type="button" onClick={() => navigateToSection('works')} className="nav-button">
            <Text name="WORKS" fontSize="20px" fontWeight="100" />
          </button>
        </li>
        <li>
          <button type="button" onClick={() => navigateToSection('service')} className="nav-button">
            <Text name="SERVICE" fontSize="20px" fontWeight="100" />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default WebsiteNav;
