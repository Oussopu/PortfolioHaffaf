import { useNavigateToSection } from '../hooks/useNavigateToSection';
import Text from './Text.tsx';

const WebsiteLogo = () => {
  const { navigateToSection } = useNavigateToSection();

  return (
    <button type="button" className="website-logo" onClick={() => navigateToSection('home')}>
      <Text name="HAFFAF" fontSize="24px" />
      <Text name="OUSSAMA" fontSize="24px" />
    </button>
  );
};

export default WebsiteLogo;
