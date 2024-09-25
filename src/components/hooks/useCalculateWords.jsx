// src/hooks/useCalculateWords.js

import { useState, useEffect } from 'react';

const useCalculateWords = (texts) => {
    const [totalWords, setTotalWords] = useState(0);

    useEffect(() => {
        if (texts && texts.length > 0) {
            const totalWordCount = texts.reduce((total, textObj) => {
                const wordCount = textObj.paragraph ? textObj.paragraph.split(' ').filter(word => word.trim() !== '').length : 0;
                return total + wordCount;
            }, 0);

            setTotalWords(totalWordCount);
        }
    }, [texts]);

    return totalWords;
};

export default useCalculateWords; // Make sure to export the hook as default
