import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getLenis } from '../hooks/useLenis';

export const ScrollToTop = () => {
    const { pathname } = useLocation();

    useLayoutEffect(() => {
        // Prevent browser's default scroll restoration
        if ('scrollRestoration' in window.history) {
            window.history.scrollRestoration = 'manual';
        }

        // Use Lenis scrollTo if available, otherwise fallback to window
        const lenis = getLenis();
        if (lenis) {
            lenis.scrollTo(0, { immediate: true });
        } else {
            window.scrollTo(0, 0);
        }

    }, [pathname]);

    return null;
};