import DOMPurify from 'dompurify';

export const sanitizeAndPrepareHtml = (html) => {
    const clean = DOMPurify.sanitize(html);
    const doc = new DOMParser().parseFromString(clean, 'text/html');

    // Process <a> tags
    doc.querySelectorAll('a').forEach(link => {
        const href = link.getAttribute('href');
        if (href && !href.startsWith('http://') && !href.startsWith('https://')) {
            link.setAttribute('href', `https://${href}`);
        }
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    });

    // Define regex patterns for media
    const patterns = {
        youtube: /(?:https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+/,
        giphy: /https?:\/\/(?:media|i)\.giphy\.com\/(?:media\/)?(?:v1\.)?(?:[A-Za-z0-9]+\/)?[A-Za-z0-9]+\/[\w-]+\.(?:gif|webp)/i,
        image: /https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp)/i
    };

    // Function to create media elements
    const createMediaElement = (url, type) => {
        switch (type) {
            case 'youtube':
                const videoId = url.match(/(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/)[1];
                return `<div style="display: flex; justify-content: center; margin: 20px 0;">
                            <iframe width="80%" height="350" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                        </div>`;
            case 'giphy':
                return `<div style="display: flex; justify-content: center; margin: 20px 0;">
                            <img src="${url}" alt="Giphy GIF" style="width: 50%; height: auto; display: block;" />
                        </div>`;
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
            } else {
            }
        }
        return text;
    };

    // Recursively process nodes
    const processNode = (node) => {
        if (node.nodeType === Node.TEXT_NODE) {
            const newContent = processTextContent(node.textContent.trim());
            if (newContent !== node.textContent) {
                const fragment = doc.createRange().createContextualFragment(newContent);
                node.parentNode.replaceChild(fragment, node);
            } else {
            }
        } else if (node.nodeType === Node.ELEMENT_NODE) {
            Array.from(node.childNodes).forEach(processNode);
        }
    };

    processNode(doc.body);
    return doc.body.innerHTML;
};