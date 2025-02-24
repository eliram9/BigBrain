"use strict";(self.webpackChunkbigbrain=self.webpackChunkbigbrain||[]).push([[910],{8607:(e,t,a)=>{function r(e){const t=new Date(parseInt(e,10)),a=String(t.getUTCDate()).padStart(2,"0");return String(t.getUTCMonth()+1).padStart(2,"0")+"-"+a+"-"+t.getUTCFullYear()}function s(e){const t=new Date(parseInt(e,10)),a=t.getUTCDate();return t.toLocaleString("default",{month:"long"})+" "+a+", "+t.getUTCFullYear()}a.d(t,{L:()=>s,Y:()=>r})},4906:(e,t,a)=>{a.d(t,{A:()=>c});var r=a(5043),s=a(5475),n=a(3099),i=a(579);const l={backgroundImage:"linear-gradient(to right, #124C5F, #C7E7E1, #EBA8BF)",WebkitBackgroundClip:"text",backgroundClip:"text",color:"transparent",display:"inline",fontWeight:600},o={backgroundImage:"linear-gradient(to right, #EBA8BF, #C7E7E1, #124C5F)",WebkitBackgroundClip:"text",backgroundClip:"text",color:"transparent",display:"inline",fontWeight:600},c=()=>{const e=(new Date).getFullYear(),[t,a]=(0,r.useState)("");return(0,r.useEffect)((()=>{const e=()=>{const e=window.innerWidth;let t;t="".concat(e<=767?.9*e:e>767&&e<=1279?.8*e:.65*e,"px"),a(t)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[]),(0,i.jsxs)("footer",{className:"relative text-black text-center bottom-0 w-full poppins dark:text-white bg-gradient-to-b from-cream to-blue dark:from-black dark:to-black pt-32",children:[(0,i.jsx)("div",{className:"w-full flex justify-center absolute -top-[80px] left-1/2 transform -translate-x-1/2 dark:bg-black  md:-top-8 xl:-top-[90px]",children:(0,i.jsxs)("div",{style:{width:t},className:"bg-white flex flex-row justify-between rounded-xl drop-shadow-lg border-white border border-opacity-20 px-16 py-6 sm:flex-col sm:justify-center sm:px-6 sm:py-4 dark:bg-darkGray dark:border-darkGray",children:[(0,i.jsxs)("div",{className:"flex flex-col items-start justify-end text-3xl mb-4 sm:mb-0 sm:text-xl sm:items-center xl:text-2xl",children:[(0,i.jsx)("h3",{style:l,children:"Ready to get started?"}),(0,i.jsx)("h3",{style:o,children:"Talk to us today"})]}),(0,i.jsx)("div",{className:"flex items-center text-white sm:mt-4 sm:justify-center",children:(0,i.jsxs)(s.N_,{to:"/contact-us",className:"bg-main text-sm py-2 px-4 rounded-xl flex items-center hover:bg-[#0E3A4A] sm:py-1 xs:text-xs",onClick:()=>window.scrollTo(0,0),children:["I'm ready",(0,i.jsx)("span",{children:(0,i.jsx)(n.i3,{})})]})})]})}),(0,i.jsx)("div",{className:"flex h-auto justify-center items-end py-5 px-2 z-20 dark:bg-black",children:(0,i.jsxs)("div",{className:"w-[1400px] py-7 px-5 border border-red-200 rounded-xl bg-white bg-opacity-[35%] dark:bg-black",children:[(0,i.jsx)("div",{className:"flex justify-center mb-2",children:(0,i.jsx)(n.UI,{fill:"#fda4af"})}),(0,i.jsx)("p",{className:"font-medium py-2 text-sm xs:text-xs",children:"Amma Lucy LLC and or BigBrain is not a crisis facility."}),(0,i.jsx)("p",{className:"font-medium pb-2 text-sm xs:text-xs",children:"Amma Lucy LLC and or BigBrain does not provide emergency services."}),(0,i.jsx)("p",{className:"leading-5 font-light text-xs",children:"If you or someone you know is experiencing a mental health crisis, please call or text 988 at any time to be connected with a trained crisis counselor. "}),(0,i.jsx)("p",{className:"leading-5 font-light text-xs",children:"If you\u2019re looking to find an incredible therapist for ongoing, proactive mental health care, you've found the right place. Take a deep breath and reach out to be connected today."})]})}),(0,i.jsx)("div",{className:"pb-4",children:(0,i.jsxs)("p",{className:"text-xs",children:["\xa9 ",e," All rights reserved to Amma Lucy LLC",(0,i.jsx)("span",{className:"mx-1 dark:text-pink",children:"|"}),(0,i.jsx)("a",{href:"https://github.com/eliram9",className:"text-black hover:underline dark:text-white",target:"_blank",rel:"noopener noreferrer",children:"eliram9"}),"\xa0&\xa0",(0,i.jsx)("a",{href:"https://github.com/ItayLevy1",className:"text-black hover:underline dark:text-white",target:"_blank",rel:"noopener noreferrer",children:"ItayLevy1"})]})})]})}},5529:(e,t,a)=>{a.r(t),a.d(t,{default:()=>b});a(5043);var r,s=a(4082),n=a(5475),i=a(1591),l=a(8060),o=a(247),c=a(8607),d=a(7528);const m=(0,a(459).Ay)(r||(r=(0,d.A)(["\n    query AllArticles {\n        articles {\n            id\n            title\n            author\n            createdDate\n            openingImageUrl\n        }\n    }\n"])));var x=a(4906),h=a(579);const p=e=>{let{id:t,title:a,author:r,createdDate:s,backgroundImage:i}=e;return(0,h.jsxs)(n.N_,{to:"/blog/article/".concat(t),className:"block cursor-pointer border-2 border-main p-6 rounded-md overflow-hidden transition duration-300 transform hover:scale-105 hover:bg-blue dark:border-blue dark:bg-darkGray",children:[(0,h.jsxs)("div",{className:"relative h-64 rounded-md overflow-hidden",children:[(0,h.jsx)("img",{src:i,alt:"".concat(a),className:"w-full h-full object-cover transform transition-transform duration-500 hover:scale-106",loading:"lazy"}),(0,h.jsx)("div",{className:"absolute inset-0 bg-black bg-opacity-40 hover:bg-opacity-60 flex items-center justify-center transition-opacity duration-500",children:(0,h.jsx)("h4",{className:"text-xl font-bold text-center text-white px-4",children:a})})]}),(0,h.jsxs)("div",{className:"mt-4",children:[(0,h.jsxs)("p",{className:"text-sm font-medium text-gray-700 dark:text-blue",children:["Author: ",r||"N/A"]}),(0,h.jsxs)("p",{className:"text-sm text-gray-500 dark:text-blue",children:["Created Date: ",(0,c.Y)(s)]})]})]})},b=()=>{const{data:e,loading:t,error:a}=(0,s.IT)(m);return t?(0,h.jsx)("p",{}):a?(0,h.jsxs)("p",{children:["Error :( ",a.message]}):(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)(i.m,{children:[(0,h.jsx)("title",{children:"BigBrain Therapy | Blog"}),(0,h.jsx)("meta",{name:"description",content:"Explore the BigBrain Therapy blog for insights, tips, and articles on EMDR therapy, trauma, ADHD, anxiety, depression, stress management, relationships, self-esteem, life transitions, and mental wellness in Maryland, Virginia, Arizona & Nebraska."}),(0,h.jsx)("meta",{name:"keywords",content:"EMDR therapy blog, mental health articles, BigBrain Therapy blog, trauma therapy blog, ADHD resources, anxiety counseling blog, depression support, stress management tips, relationship issues, self-esteem, life transitions"}),(0,h.jsx)("link",{rel:"canonical",href:"https://bigbraintherapy.com/blog"}),(0,h.jsx)("script",{type:"application/ld+json",children:'\n                        {\n                            "@context": "https://schema.org",\n                            "@type": "BreadcrumbList",\n                            "itemListElement": [\n                                {\n                                    "@type": "ListItem",\n                                    "position": 1,\n                                    "name": "Home",\n                                    "item": "https://bigbraintherapy.com/"\n                                },\n                                {\n                                    "@type": "ListItem",\n                                    "position": 2,\n                                    "name": "Blog",\n                                    "item": "https://bigbraintherapy.com/blog"\n                                }\n                            ]\n                        }\n                    '})]}),(0,h.jsxs)("section",{className:"relative w-full h-auto overflow-hidden dark:bg-black",children:[(0,h.jsxs)(l.A,{className:"relative z-10 text-darkGray dark:bg-black pb-32 sm:pb-12 md:pb-16 pt-10 mb-20",children:[(0,h.jsx)(o.A,{subtitle:"BlogBrain",className:"mb-20 sm:mb-4"}),(0,h.jsx)("div",{className:"grid grid-cols-3 gap-10 sm:block md:grid md:grid-cols-2 md:gaap-10",children:e.articles.map(((e,t)=>(0,h.jsx)(p,{id:e.id,title:e.title,author:e.author,createdDate:e.createdDate,backgroundImage:e.openingImageUrl},e.id)))})]}),(0,h.jsx)(x.A,{})]})]})}},8060:(e,t,a)=>{a.d(t,{A:()=>s});a(5043);var r=a(579);const s=e=>{let{className:t,children:a}=e;return(0,r.jsx)("div",{className:"flex justify-center w-full h-auto px-32 sm:px-8 md:px-10 lg:px-8 xl:px-10 ".concat(t," poppins dark:bg-black"),children:(0,r.jsx)("main",{className:"h-auto w-full",children:a})})}},247:(e,t,a)=>{a.d(t,{A:()=>n});var r=a(5043),s=a(579);const n=e=>{let{subtitle:t,className:a}=e;const[n,i]=(0,r.useState)(!1);(0,r.useEffect)((()=>{const e=()=>{const e=document.body.classList.contains("dark");i(e)};e();const t=new MutationObserver(e);return t.observe(document.body,{attributes:!0,attributeFilter:["class"]}),()=>t.disconnect()}),[]);const l=t||"",o="".concat(7.5*l.length,"px");return(0,s.jsxs)("div",{className:"flex flex-col ".concat(a),children:[(0,s.jsx)("h2",{className:"text-3xl font-semibold text-black relative dark:text-white sm:text-xl",children:l}),(0,s.jsx)("div",{className:"h-[3px] ".concat(n?"bg-[var(--underline-color-dark)]":"bg-[var(--underline-color-light)]"),style:{width:o}})]})}}}]);
//# sourceMappingURL=910.10e9044b.chunk.js.map