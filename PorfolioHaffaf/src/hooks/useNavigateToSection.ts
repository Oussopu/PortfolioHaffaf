import { useNavigate, useLocation } from 'react-router-dom';

export const useNavigateToSection = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const navigateToSection = (sectionId: string, offset: number = 0) => {
        window.dispatchEvent(new Event('works-slider-reset'));

        setTimeout(() => {
            if (location.pathname === '/') {
                const section = document.getElementById(sectionId);
                if (section) {
                    const offsetTop = section.offsetTop - offset;
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            } else {
                navigate('/');
                setTimeout(() => {
                    const section = document.getElementById(sectionId);
                    if (section) {
                        const offsetTop = section.offsetTop - offset;
                        window.scrollTo({
                            top: offsetTop,
                            behavior: 'smooth'
                        });
                    }
                }, 100);
            }
        }, 50);
    };

    return { navigateToSection };
};
