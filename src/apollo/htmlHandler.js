import DOMPurify from 'dompurify';

export const sanitizeAndPrepareHtml = (html) => {
  const clean = DOMPurify.sanitize(html);
  const doc = new DOMParser().parseFromString(clean, 'text/html');
  doc.querySelectorAll('a').forEach(link => {
        const href = link.getAttribute('href');
            if (href && !href.startsWith('http://') && !href.startsWith('https://')) {
                link.setAttribute('href', `https://${href}`);
            }
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
  });
  return doc.body.innerHTML;
};