import { useState, useEffect } from "react";

const useWindowSize = () => {
    const [isMobile, setIsMobile] = useState(false);

    const handleResize = () => {
        setIsMobile(window.innerWidth < 992);
    };

    useEffect(() => {
        handleResize();

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return { isMobile };
};

export default useWindowSize;
