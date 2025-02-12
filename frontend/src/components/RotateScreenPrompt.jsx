import { useState, useEffect } from "react";
import "./RotateScreen.css";

const RotateScreenPrompt = () => {
    const [showPrompt, setShowPrompt] = useState(false);

    useEffect(() => {
        const checkScreenOrientation = () => {
            const isSmallScreen = window.innerWidth < 768;
            const isPortrait = window.innerHeight > window.innerWidth;

            setShowPrompt(isSmallScreen && isPortrait);
        };

        // Check on mount
        checkScreenOrientation();

        // Listen for screen resize
        window.addEventListener("resize", checkScreenOrientation);
        window.addEventListener("orientationchange", checkScreenOrientation);

        return () => {
            window.removeEventListener("resize", checkScreenOrientation);
            window.removeEventListener("orientationchange", checkScreenOrientation);
        };
    }, []);

    return (
        showPrompt && (
            <div className="rotate-screen-overlay">
                <p>Please rotate your device for a better experience.</p>
            </div>
        )
    );
};

export default RotateScreenPrompt;
