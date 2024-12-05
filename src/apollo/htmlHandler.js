import DOMPurify from 'dompurify';

export const sanitizeAndPrepareHtml = (html) => {
    const clean = DOMPurify.sanitize(html, {
        ALLOWED_TAGS: [
          'p', 'br', 'strong', 'em', 'u', 's',
          'h1', 'h2', 'h3', 'ol', 'ul', 'li',
          'a', 'img', 'video', 'sub', 'sup', 'span' // Include 'span'
        ],
        ALLOWED_ATTR: ['href', 'src', 'target', 'rel', 'class', 'style'], // Allow 'style'
        ALLOW_DATA_ATTR: false,
        ALLOWED_CSS_PROPERTIES: ['color', 'background-color'], // Allow specific CSS properties
    });
    const doc = new DOMParser().parseFromString(clean, 'text/html');

    // Process <a> tags (hyperlinks) and apply styles
    doc.querySelectorAll('a').forEach(link => {
        const href = link.getAttribute('href');
        if (href && !href.startsWith('http://') && !href.startsWith('https://')) {
            link.setAttribute('href', `https://${href}`);
        }
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
        // Apply the underline and color
        link.style.textDecoration = 'underline';
        link.style.color = '#124C5F'; // Main color
    });

    // Process <li> elements and apply styles


    // Define regex patterns for media
    const patterns = {
        youtube: /(?:https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+/,
        giphy: /https?:\/\/(?:media|i)\.giphy\.com\/(?:media\/)?(?:v1\.)?(?:[A-Za-z0-9]+\/)?[A-Za-z0-9]+\/[\w-]+\.(?:gif|webp)/i,
        image: /https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp)/i
    };

    // Function to create media elements
    const createMediaElement = (url, type) => {
        // Create a unique identifier for this media element
        const uniqueId = 'media-' + Math.random().toString(36).substr(2, 9);

        // Create the CSS for responsive behavior
        const responsiveCSS = `
            <style>
                #${uniqueId} {
                    width: 50%;
                }
                @media (max-width: 768px) {
                    #${uniqueId} {
                        width: 80%;
                    }
                }
                @media (max-width: 479px) {
                    #${uniqueId} {
                        width: 100%;
                    }
                }
            </style>
        `;

        switch (type) {
            case 'youtube':
                const videoId = url.match(/(?:youtube\.com\/(?:[^/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/)[1];
                return `
                    ${responsiveCSS}
                    <div style="display: flex; justify-content: center; margin: 20px 0;">
                        <iframe 
                            id="${uniqueId}"
                            height="350" 
                            src="https://www.youtube.com/embed/${videoId}" 
                            frameborder="0" 
                            allow="autoplay; encrypted-media" 
                            allowfullscreen
                        ></iframe>
                    </div>
                `;
            case 'giphy':
                return `
                    ${responsiveCSS}
                    <div style="display: flex; justify-content: center; margin: 20px 0;">
                        <img 
                            id="${uniqueId}"
                            src="${url}" 
                            alt="Giphy GIF" 
                            style="height: auto; display: block;"
                        />
                    </div>
                `;
            case 'image':
                return `<div style="display: flex; justify-content: center; margin: 20px 0;">
                            <img src="${url}" alt="Embedded Image" style="width: 100%; max-height: 370px; object-fit: cover; display: block;" />
                        </div>`;
            default:
                return url;
        }
    };

    // Function to process text content
    const processTextContent = (text) => {
        for (const [type, pattern] of Object.entries(patterns)) {
            if (pattern.test(text)) {
                return createMediaElement(text, type);
            }
        }
        return text;
    };

    // Add padding or margin around <strong> and <em> elements, avoiding punctuation
    const processStyledElements = () => {
        // Select both <strong> and <em> elements for processing
        const styledElements = doc.querySelectorAll('strong, em');
        styledElements.forEach(el => {
            const prevChar = el.previousSibling?.textContent?.slice(-1) || '';
            const nextChar = el.nextSibling?.textContent?.[0] || '';

            // Add margin when <strong> or <em> follows a comma or other symbols
            if (prevChar === ',' || prevChar === '!' || prevChar === '.' || prevChar === ':' || /\d/.test(prevChar)) {
                el.style.marginLeft = '5px';
            }

            // Ensure space between normal text and <strong> or <em> if no space or punctuation is present
            if (prevChar && !/\s/.test(prevChar) && !/[.,!?;:()]/.test(prevChar)) {
                el.style.marginLeft = '5px';
            }

            // Ensure space AFTER a comma if not already present
            if (prevChar === ',' && nextChar && !/\s/.test(nextChar)) {
                // If next character is not a space after the comma, insert a space
                el.previousSibling.textContent = el.previousSibling.textContent.trimEnd() + ' ';
            }

            // Optionally: add padding on both sides when not adjacent to punctuation
            const isLetterOrNumber = /[a-zA-Z0-9]/;
            const isPunctuation = /[.,!?;:()]/;

            el.style.paddingRight = isLetterOrNumber.test(nextChar) && !isPunctuation.test(nextChar) ? '5px' : '0';
        });
    };

    // Recursively process nodes
    const processNode = (node) => {
        if (node.nodeType === Node.TEXT_NODE) {
            const newContent = processTextContent(node.textContent);
            if (newContent !== node.textContent) {
                const fragment = doc.createRange().createContextualFragment(newContent);
                node.parentNode.replaceChild(fragment, node);
            }
        } else if (node.nodeType === Node.ELEMENT_NODE) {
            Array.from(node.childNodes).forEach(processNode);
        }
    };

    processNode(doc.body);
    processStyledElements(); // Apply padding logic to <strong> and <em> elements
    return doc.body.innerHTML;
};