import { useNavigateToSection } from '../hooks/useNavigateToSection';
import Text from './Text.tsx';

const WebsiteLogo = () => {
  const { navigateToSection } = useNavigateToSection();

  return (
    <button type="button" className="website-logo" onClick={() => navigateToSection('home')}>
      <Text name="HAFFAF" fontSize="1.65vw" />
      <Text name="OUSSAMA" fontSize="1.65vw" />
    </button>
  );
};

export default WebsiteLogo;
