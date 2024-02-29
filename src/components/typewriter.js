import React, { useEffect, useState, useMemo } from 'react';

const Typewriter = () => {
    const textArray = useMemo(() => ["The premier luxury property developer in Dubai DAMAC Properties is part of DAMAC Group that has been shaping the Middle East's luxury real estate market since 1982, delivering iconic residential, commercial and leisure properties for sale across the region and beyond Experience architectural marvels crafted with innovation, where luxury meets functionality. Indulge in exquisite amenities that redefine modern living, elevating your lifestyle. From serene spa retreats to state-of-the-art gyms, discover a sanctuary tailored to your desires."], []);
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const speed = 20; // Typing speed in milliseconds

    useEffect(() => {
        const typeWriter = () => {
            if (charIndex < textArray[textIndex].length) {
                setCharIndex(charIndex + 1);
            } else {
                setTimeout(eraseText, 2000); // Wait for 2 seconds before erasing the text
            }
        };

        const eraseText = () => {
            if (charIndex >= 0) {
                setCharIndex(charIndex - 1);
            } else {
                setTextIndex((textIndex + 1) % textArray.length);
            }
        };

        const typingTimer = setTimeout(typeWriter, speed);
        return () => clearTimeout(typingTimer);
    }, [charIndex, textArray, textIndex]);

    return (
        <div id="typewriter">
            {textArray[textIndex].substring(0, charIndex)}
        </div>
    );
};

export default Typewriter;
