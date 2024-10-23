"use strict";(self.webpackChunkbigbrain=self.webpackChunkbigbrain||[]).push([[952],{8607:(e,t,n)=>{function a(e){const t=new Date(parseInt(e,10)),n=String(t.getUTCDate()).padStart(2,"0");return String(t.getUTCMonth()+1).padStart(2,"0")+"-"+n+"-"+t.getUTCFullYear()}function s(e){const t=new Date(parseInt(e,10)),n=t.getUTCDate();return t.toLocaleString("default",{month:"long"})+" "+n+", "+t.getUTCFullYear()}n.d(t,{L:()=>s,Y:()=>a})},5542:(e,t,n)=>{n.d(t,{A:()=>r});n(5043);var a=n(3099),s=n(579);const r=()=>{const e=(new Date).getFullYear();return(0,s.jsxs)("footer",{className:"relative text-black text-center bottom-0 w-full h-full poppins dark:text-white bg-gradient-to-b from-white to-blue dark:from-black dark:to-black pt-10 md:pt-10",children:[(0,s.jsx)("div",{className:"flex h-auto justify-center items-end py-5 px-2 z-20 dark:bg-black",children:(0,s.jsxs)("div",{className:"w-[1400px] py-7 px-5 border border-red-200 rounded-xl bg-white bg-opacity-[35%] dark:bg-black",children:[(0,s.jsx)("div",{className:"flex justify-center mb-2",children:(0,s.jsx)(a.UI,{fill:"#fda4af"})}),(0,s.jsx)("p",{className:"font-medium py-2 text-sm xs:text-xs",children:"Amma Lucy LLC and or BigBrain is not a crisis facility."}),(0,s.jsx)("p",{className:"font-medium pb-2 text-sm xs:text-xs",children:"Amma Lucy LLC and or BigBrain does not provide emergency services."}),(0,s.jsx)("p",{className:"leading-5 font-light text-xs",children:"If you or someone you know is experiencing a mental health crisis, please call or text 988 at any time to be connected with a trained crisis counselor. "}),(0,s.jsx)("p",{className:"leading-5 font-light text-xs",children:"If you\u2019re looking to find an incredible therapist for ongoing, proactive mental health care, you've found the right place. Take a deep breath and reach out to be connected today."})]})}),(0,s.jsx)("div",{className:"pb-4",children:(0,s.jsxs)("p",{className:"text-xs",children:["\xa9 ",e," All rights reserved to Amma Lucy LLC",(0,s.jsx)("span",{className:"mx-1 dark:text-pink",children:"|"}),(0,s.jsx)("a",{href:"https://github.com/eliram9",className:"text-black hover:underline dark:text-white",target:"_blank",rel:"noopener noreferrer",children:"eliram9"}),"\xa0&\xa0",(0,s.jsx)("a",{href:"https://github.com/ItayLevy1",className:"text-black hover:underline dark:text-white",target:"_blank",rel:"noopener noreferrer",children:"ItayLevy1"})]})})]})}},6952:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var a,s=n(5043),r=n(4082),i=n(3216),l=n(229),o=n(1591),c=n(7528);const d=(0,n(459).Ay)(a||(a=(0,c.A)(["\n    query ArticleQuery($id: ID!) {\n        article(id: $id) {\n            id\n            title\n            author\n            createdDate\n            openingImageUrl\n            category\n            summary\n            texts {\n                id\n                paragraph\n            }\n            sources{\n                id\n                sourceName\n                url\n            }\n        }\n    }\n"])));var x=n(8607),m=n(6213),h=n.n(m);const p=e=>{const t=h().sanitize(e,{ALLOWED_TAGS:["p","br","strong","em","u","s","h1","h2","h3","ol","ul","li","a","img","video","sub","sup","span"],ALLOWED_ATTR:["href","src","target","rel","class","style"],ALLOW_DATA_ATTR:!1,ALLOWED_CSS_PROPERTIES:["color","background-color"]}),n=(new DOMParser).parseFromString(t,"text/html");n.querySelectorAll("a").forEach((e=>{const t=e.getAttribute("href");!t||t.startsWith("http://")||t.startsWith("https://")||e.setAttribute("href","https://".concat(t)),e.setAttribute("target","_blank"),e.setAttribute("rel","noopener noreferrer"),e.style.textDecoration="underline",e.style.color="#124C5F"}));const a={youtube:/(?:https?:\/\/)?(www\.)?(youtube\.com|youtu\.be)\/.+/,giphy:/https?:\/\/(?:media|i)\.giphy\.com\/(?:media\/)?(?:v1\.)?(?:[A-Za-z0-9]+\/)?[A-Za-z0-9]+\/[\w-]+\.(?:gif|webp)/i,image:/https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp)/i},s=(e,t)=>{const n="media-"+Math.random().toString(36).substr(2,9),a="\n            <style>\n                #".concat(n," {\n                    width: 50%;\n                }\n                @media (max-width: 768px) {\n                    #").concat(n," {\n                        width: 80%;\n                    }\n                }\n                @media (max-width: 479px) {\n                    #").concat(n," {\n                        width: 100%;\n                    }\n                }\n            </style>\n        ");switch(t){case"youtube":const t=e.match(/(?:youtube\.com\/(?:[^/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/)[1];return"\n                    ".concat(a,'\n                    <div style="display: flex; justify-content: center; margin: 20px 0;">\n                        <iframe \n                            id="').concat(n,'"\n                            height="350" \n                            src="https://www.youtube.com/embed/').concat(t,'" \n                            frameborder="0" \n                            allow="autoplay; encrypted-media" \n                            allowfullscreen\n                        ></iframe>\n                    </div>\n                ');case"giphy":return"\n                    ".concat(a,'\n                    <div style="display: flex; justify-content: center; margin: 20px 0;">\n                        <img \n                            id="').concat(n,'"\n                            src="').concat(e,'" \n                            alt="Giphy GIF" \n                            style="height: auto; display: block;"\n                        />\n                    </div>\n                ');case"image":return'<div style="display: flex; justify-content: center; margin: 20px 0;">\n                            <img src="'.concat(e,'" alt="Embedded Image" style="width: 100%; max-height: 370px; object-fit: cover; display: block;" />\n                        </div>');default:return e}},r=e=>{if(e.nodeType===Node.TEXT_NODE){const t=(e=>{for(const[t,n]of Object.entries(a))if(n.test(e))return s(e,t);return e})(e.textContent);if(t!==e.textContent){const a=n.createRange().createContextualFragment(t);e.parentNode.replaceChild(a,e)}}else e.nodeType===Node.ELEMENT_NODE&&Array.from(e.childNodes).forEach(r)};return r(n.body),n.querySelectorAll("strong, em").forEach((e=>{var t,n,a,s;const r=(null===(t=e.previousSibling)||void 0===t||null===(n=t.textContent)||void 0===n?void 0:n.slice(-1))||"",i=(null===(a=e.nextSibling)||void 0===a||null===(s=a.textContent)||void 0===s?void 0:s[0])||"";(","===r||"!"===r||"."===r||":"===r||/\d/.test(r))&&(e.style.marginLeft="5px"),!r||/\s/.test(r)||/[.,!?;:()]/.test(r)||(e.style.marginLeft="5px"),","===r&&i&&!/\s/.test(i)&&(e.previousSibling.textContent=e.previousSibling.textContent.trimEnd()+" "),e.style.paddingRight=/[a-zA-Z0-9]/.test(i)&&!/[.,!?;:()]/.test(i)?"5px":"0"})),n.body.innerHTML};var u=n(579);const g=e=>{let{isSticky:t}=e;const[n,a]=(0,s.useState)(0),r=()=>{const e=document.documentElement.scrollHeight-document.documentElement.clientHeight,t=window.scrollY;a(t/e*100)};return(0,s.useEffect)((()=>(window.addEventListener("scroll",r,{passive:!0}),()=>{window.removeEventListener("scroll",r)})),[]),(0,u.jsx)("div",{className:"w-full h-2 bg-gray-200 z-40 ".concat(t?"fixed top-0":"relative"),"aria-hidden":"true",children:(0,u.jsx)("div",{className:"h-full bg-main",style:{width:"".concat(n,"%"),transition:"width 0.3s ease-out"}})})},b=e=>{const[t,n]=(0,s.useState)(0);return(0,s.useEffect)((()=>{if(e&&e.length>0){const t=e.reduce(((e,t)=>e+(t.paragraph?t.paragraph.split(" ").filter((e=>""!==e.trim())).length:0)),0);n(t)}}),[e]),t};var y=n(5542);const f=e=>{let{paragraph:t}=e;const n=p(t);return(0,u.jsx)("div",{className:"prose prose-blog dark:prose-invert max-w-none",children:(0,l.Ay)(n)})},j=e=>{let{sourceName:t,url:n}=e;return(0,u.jsx)("li",{className:"text-darkGray py-2 text-md xs:text-[10px] sm:text-xs",children:(0,u.jsx)("a",{href:n,target:"_blank",rel:"noopener noreferrer",className:"text-main underline hover:text-main/80",children:t})})},v=()=>{var e;const{id:t}=(0,i.g)(),{loading:n,error:a,data:l}=(0,r.IT)(d,{variables:{id:t}}),[c,m]=(0,s.useState)({texts:[]}),[h,p]=(0,s.useState)(!1),v=(0,s.useRef)(null),w=b(c.texts);return(0,s.useEffect)((()=>{l&&l.article&&m(l.article)}),[l]),(0,s.useEffect)((()=>{let e;const t=v.current,n=()=>{e=new IntersectionObserver((e=>{let[t]=e;p(!t.isIntersecting)}),{threshold:0}),t&&e.observe(t)};return t&&t.complete?n():t&&(t.onload=n),()=>{e&&t&&e.unobserve(t)}}),[v,c.openingImageUrl]),n?(0,u.jsx)("p",{}):a?(0,u.jsxs)("p",{children:["Error: ",a.message]}):(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)(o.m,{children:[(0,u.jsx)("title",{children:"".concat(c.title," | BigBrain Therapy Blog")}),(0,u.jsx)("meta",{name:"description",content:c.summary}),(0,u.jsx)("meta",{name:"keywords",content:"".concat(c.category,", EMDR therapy, mental health, BigBrain Therapy, ").concat(c.author)}),(0,u.jsx)("link",{rel:"canonical",href:"https://bigbraintherapy.com/blog/article/".concat(t)}),(0,u.jsx)("meta",{property:"og:title",content:c.title}),(0,u.jsx)("meta",{property:"og:description",content:c.summary}),(0,u.jsx)("meta",{property:"og:image",content:c.openingImageUrl}),(0,u.jsx)("meta",{property:"og:url",content:"https://bigbraintherapy.com/blog/article/".concat(t)}),(0,u.jsx)("meta",{property:"og:type",content:"article"})]}),(0,u.jsxs)("section",{className:"w-full h-auto overflow-hidden poppins dark:bg-black poppins",children:[(0,u.jsx)("div",{className:"relative",children:(0,u.jsx)("img",{src:c.openingImageUrl,alt:c.title,className:"w-full max-h-[400px] object-cover",ref:v})}),(0,u.jsx)(g,{isSticky:h}),"   ",(0,u.jsxs)("div",{className:"max-w-[750px] mx-auto md:px-[2rem]",children:[(0,u.jsxs)("div",{className:"flex items-center justify-between pt-6 pb-1",children:[(0,u.jsxs)("p",{className:"text-slate-500 text-sm  dark:text-lightBanana xs:text-[8px] sm:text-xs",children:[(0,u.jsx)("span",{className:"font-medium",children:"Last updated: "}),(0,x.L)(c.createdDate)]}),(0,u.jsx)("p",{className:"text-main text-xs dark:text-banana",children:"\u25cf"}),(0,u.jsx)("p",{className:"text-slate-500 text-sm font-medium dark:text-lightBanana xs:text-[8px] sm:text-xs",children:c.category}),(0,u.jsx)("p",{className:"text-main text-xs  dark:text-banana",children:"\u25cf"}),(0,u.jsxs)("p",{className:"text-main text-sm font-medium  dark:text-lightBanana xs:text-[8px] sm:text-xs",children:[Math.trunc(w/200)," minutes read"]})," "]}),(0,u.jsx)("div",{children:(0,u.jsx)("h1",{className:"text-black text-5xl font-bold dark:text-white mt-10 mb-5  xs:text-2xl lg:text-4xl",children:c.title})}),(0,u.jsx)("div",{children:(0,u.jsx)("p",{className:"text-black text-xl font-semibold pb-2 pt-4 dark:text-white sm:text-lg",children:c.summary})}),(0,u.jsxs)("div",{className:"py-4 text-slate-500 text-sm dark:text-lightBanana",children:[(0,u.jsxs)("p",{className:"font-medium",children:["By: ",c.author]}),(0,u.jsx)("p",{className:"xs:text-xs",children:"EMDR Therapist, LCSW-C"})]}),(0,u.jsx)("hr",{}),(0,u.jsx)("div",{className:"h-full mt-10 leading-loose mb-40",children:null===(e=c.texts)||void 0===e?void 0:e.map(((e,t)=>(0,u.jsx)(f,{paragraph:e.paragraph||e},e.id||t)))}),(0,u.jsx)("hr",{}),c.sources&&c.sources.length>0&&(0,u.jsxs)("div",{className:"bg-babyBlue px-5 py-5 mt-10 rounded-lg mb-20 xs:mb-0",children:[(0,u.jsx)("h2",{className:"text-darkGray text-xl font-semibold mb-4 md:text-sm",children:"Sources"}),(0,u.jsx)("ol",{className:"list-decimal list-inside space-y-2",children:c.sources.map((e=>(0,u.jsx)(j,{sourceName:e.sourceName,url:e.url},e.id)))})]})]})]}),(0,u.jsx)(y.A,{})]})}}}]);
//# sourceMappingURL=952.ba8648a0.chunk.js.map