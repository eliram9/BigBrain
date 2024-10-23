"use strict";(self.webpackChunkbigbrain=self.webpackChunkbigbrain||[]).push([[100],{5542:(e,t,s)=>{s.d(t,{A:()=>n});s(5043);var a=s(3099),r=s(579);const n=()=>{const e=(new Date).getFullYear();return(0,r.jsxs)("footer",{className:"relative text-black text-center bottom-0 w-full h-full poppins dark:text-white bg-gradient-to-b from-white to-blue dark:from-black dark:to-black pt-10 md:pt-10",children:[(0,r.jsx)("div",{className:"flex h-auto justify-center items-end py-5 px-2 z-20 dark:bg-black",children:(0,r.jsxs)("div",{className:"w-[1400px] py-7 px-5 border border-red-200 rounded-xl bg-white bg-opacity-[35%] dark:bg-black",children:[(0,r.jsx)("div",{className:"flex justify-center mb-2",children:(0,r.jsx)(a.UI,{fill:"#fda4af"})}),(0,r.jsx)("p",{className:"font-medium py-2 text-sm xs:text-xs",children:"Amma Lucy LLC and or BigBrain is not a crisis facility."}),(0,r.jsx)("p",{className:"font-medium pb-2 text-sm xs:text-xs",children:"Amma Lucy LLC and or BigBrain does not provide emergency services."}),(0,r.jsx)("p",{className:"leading-5 font-light text-xs",children:"If you or someone you know is experiencing a mental health crisis, please call or text 988 at any time to be connected with a trained crisis counselor. "}),(0,r.jsx)("p",{className:"leading-5 font-light text-xs",children:"If you\u2019re looking to find an incredible therapist for ongoing, proactive mental health care, you've found the right place. Take a deep breath and reach out to be connected today."})]})}),(0,r.jsx)("div",{className:"pb-4",children:(0,r.jsxs)("p",{className:"text-xs",children:["\xa9 ",e," All rights reserved to Amma Lucy LLC",(0,r.jsx)("span",{className:"mx-1 dark:text-pink",children:"|"}),(0,r.jsx)("a",{href:"https://github.com/eliram9",className:"text-black hover:underline dark:text-white",target:"_blank",rel:"noopener noreferrer",children:"eliram9"}),"\xa0&\xa0",(0,r.jsx)("a",{href:"https://github.com/ItayLevy1",className:"text-black hover:underline dark:text-white",target:"_blank",rel:"noopener noreferrer",children:"ItayLevy1"})]})})]})}},1100:(e,t,s)=>{s.r(t),s.d(t,{default:()=>f});var a=s(5043),r=s(1591),n=s(8060);const i={_origin:"https://api.emailjs.com"},l=(e,t,s)=>{if(!e)throw"The user ID is required. Visit https://dashboard.emailjs.com/admin/integration";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!s)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class o{constructor(e){this.status=e.status,this.text=e.responseText}}const c=function(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return new Promise(((a,r)=>{const n=new XMLHttpRequest;n.addEventListener("load",(e=>{let{target:t}=e;const s=new o(t);200===s.status||"OK"===s.text?a(s):r(s)})),n.addEventListener("error",(e=>{let{target:t}=e;r(new o(t))})),n.open("POST",i._origin+e,!0),Object.keys(s).forEach((e=>{n.setRequestHeader(e,s[e])})),n.send(t)}))},d=(e,t,s,a)=>{const r=a||i._userID;l(r,e,t);const n={lib_version:"3.2.0",user_id:r,service_id:e,template_id:t,template_params:s};return c("/api/v1.0/email/send",JSON.stringify(n),{"Content-type":"application/json"})};var m=s(3099),x=s(579);const h=()=>{const[e,t]=(0,a.useState)({first_name:"",last_name:"",phone:"",email:"",message:""}),[s,r]=(0,a.useState)(""),n=s=>{t({...e,[s.target.name]:s.target.value})};return(0,x.jsxs)("div",{className:"px-10 w-full poppins sm:px-0 lg:px-0 h-full",children:[(0,x.jsxs)("form",{onSubmit:s=>{s.preventDefault(),d("service_7akd5q8","template_jl2z84d",e,"O9q0VZ9cLLSlaWNod").then((e=>{r("Email sent successfully!"),t({first_name:"",last_name:"",phone:"",email:"",message:""}),setTimeout((()=>{r("")}),5e3)}),(e=>{r("Failed to send email. Please try again."),setTimeout((()=>{r("")}),5e3)}))},className:"w-full font-light",children:[(0,x.jsxs)("div",{className:"w-full grid grid-cols-2 gap-10 justify-center items-start text-md lg:text-sm sm:gap-3",children:[(0,x.jsx)("div",{className:"w-full pb-10",children:(0,x.jsx)("input",{type:"text",name:"first_name",value:e.first_name,onChange:n,required:!0,placeholder:"First Name",className:"border-main border-2 rounded-[12px] w-full px-2 p-2 dark:border-white"})}),(0,x.jsx)("div",{className:"w-full pb-10",children:(0,x.jsx)("input",{type:"text",name:"last_name",value:e.last_name,onChange:n,placeholder:"Last Name",required:!0,className:"border-main border-2 rounded-[12px] w-full px-2 p-2 dark:border-white"})})]}),(0,x.jsxs)("div",{className:"w-full grid grid-cols-2 gap-10 justify-center items-start text-md lg:text-sm sm:gap-3",children:[(0,x.jsx)("div",{className:"w-full pb-10",children:(0,x.jsx)("input",{type:"email",name:"email",value:e.email,onChange:n,placeholder:"Email Address",required:!0,className:"border-main border-2 rounded-[12px] w-full px-2 p-2 dark:border-white"})}),(0,x.jsx)("div",{className:"w-full pb-10",children:(0,x.jsx)("input",{type:"number",name:"phone",value:e.phone,onChange:n,placeholder:"Phone Number",required:!0,className:"border-main border-2 rounded-[12px] w-full px-2 p-2 dark:border-white"})})]}),(0,x.jsxs)("div",{className:"w-full pb-10",children:[(0,x.jsx)("label",{htmlFor:"message",className:"block mb-1 text-sm font-light text-darkGray lg:text-sm dark:text-lightGray",children:"Message (optional)"}),(0,x.jsx)("textarea",{name:"message",value:e.message,onChange:n,rows:3,className:"border-main border-2 rounded-[12px] w-full px-2 p-2 lg:text-sm dark:border-white"})]}),(0,x.jsxs)("button",{type:"submit",className:"w-full flex justify-center bg-main text-white font-regular pt-3 pb-[10px] rounded-[12px] border-transparent hover:bg-[#0E3A4A] hover:text-white hover:font-normal md:text-md sm:border-white ",children:["Send",(0,x.jsx)(m.Zr,{className:"md:h-[22px] ml-2"})]})]}),s&&(0,x.jsx)("div",{className:"mt-4 p-2 rounded ".concat("Email sent successfully!"===s?"bg-green-500 text-white":"bg-red-500 text-white"),children:s})]})};var p=s(247);const u=s.p+"static/media/Base.0c588a5a8d0c6efa0a3f5f2f0d650f5b.svg";var b=s(5542),g=s(3759);const f=()=>(0,x.jsxs)(x.Fragment,{children:[(0,x.jsxs)(r.m,{children:[(0,x.jsx)("title",{children:"Contact Us | BigBrain Therapy"}),(0,x.jsx)("meta",{name:"description",content:"Get in touch with BigBrain Therapy for EMDR therapy services. Contact us today to book your consultation."}),(0,x.jsx)("meta",{name:"keywords",content:"contact BigBrain Therapy, EMDR therapy contact, schedule consultation"}),(0,x.jsx)("link",{rel:"canonical",href:"https://bigbraintherapy.com/contact-us"}),(0,x.jsx)("script",{type:"application/ld+json",children:'\n                    {\n                        "@context": "https://schema.org",\n                        "@type": "Organization",\n                        "url": "https://bigbraintherapy.com",\n                        "logo": "https://bigbraintherapy.com/logo192.png",\n                        "name": "BigBrain Therapy",\n                        "contactPoint": {\n                          "@type": "ContactPoint",\n                          "telephone": "+1-301-337-5676",\n                          "contactType": "Customer Service"\n                        }\n                    }\n                '}),(0,x.jsx)("script",{type:"application/ld+json",children:'\n                    {\n                        "@context": "https://schema.org",\n                        "@type": "BreadcrumbList",\n                        "itemListElement": [\n                            {\n                                "@type": "ListItem",\n                                "position": 1,\n                                "name": "Home",\n                                "item": "https://bigbraintherapy.com/"\n                            },\n                            {\n                                "@type": "ListItem",\n                                "position": 2,\n                                "name": "Contact Us",\n                                "item": "https://bigbraintherapy.com/contact-us"\n                            }\n                        ]\n                    }\n                '})]}),(0,x.jsxs)("section",{className:"relative dark:bg-black bg-gradient-to-b from-white via bg-black to-white",children:[(0,x.jsx)("div",{className:"absolute inset-0 w-full h-full",style:{backgroundImage:"url(".concat(u,")"),backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}}),(0,x.jsxs)(n.A,{className:"relative z-10 text-darkGray pt-10",children:[(0,x.jsx)(p.A,{subtitle:"Contact Us",className:"mb-20 sm:mb-4 md:mb-10 flex justify-center items-center"}),(0,x.jsx)("div",{className:"relative pb-12 sm:pb-0",children:(0,x.jsxs)("div",{className:"relative z-10 flex sm:flex-col-reverse md:flex-row items-center justify-between",children:[(0,x.jsx)("div",{className:"w-7/12 flex items-center text-darkGray pr-10 sm:w-full lg:pr-0",children:(0,x.jsx)(h,{})}),(0,x.jsx)("div",{className:"w-5/12 flex justify-center sm:w-4/6 md:w-4/12 sm:h-fit sm:pb-6",children:(0,x.jsx)(m.Lc,{className:"h-2/4"})})]})})]})]}),(0,x.jsx)("section",{children:(0,x.jsx)("div",{className:"flex justify-center items-center pb-20 pt-32 sm:py-24 dark:bg-black bg-transparent",children:(0,x.jsx)(g.A,{author:"Dr. David Servan-Schreiber",qoute:"EMDR therapy is a proven method for overcoming trauma and fostering emotional healing."})})}),(0,x.jsx)(b.A,{})]})},8060:(e,t,s)=>{s.d(t,{A:()=>r});s(5043);var a=s(579);const r=e=>{let{className:t,children:s}=e;return(0,a.jsx)("div",{className:"flex justify-center w-full h-auto px-32 sm:px-8 md:px-10 lg:px-8 xl:px-10 ".concat(t," poppins dark:bg-black"),children:(0,a.jsx)("main",{className:"h-auto w-full",children:s})})}},3759:(e,t,s)=>{s.d(t,{A:()=>i});var a=s(5043),r=s(3099),n=s(579);const i=e=>{let{qoute:t,author:s}=e;const[i,l]=(0,a.useState)("");return(0,a.useEffect)((()=>{const e=()=>{const e=window.innerWidth;let t;t="".concat(e<=767?.95*e:e>767&&e<=1279?.7*e:.65*e,"px"),l(t)};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[]),(0,n.jsx)("div",{children:(0,n.jsxs)("div",{style:{boxShadow:"10px 10px 50px -30px rgba(0, 0, 0, 0.6)",width:i},className:"w-[1200px] h-auto flex flex-col justify-center rounded-xl items-center relative poppins bg-white text-black dark:bg-darkGray dark:text-lightGray  xs:w-72 sm:w-72",children:[(0,n.jsx)(r.U1,{className:"w-40 absolute -left-10 top-[-48%] flex justify-center  sm:-left-4 xs:w-20 lg:w-28 xl:w-32 z-10"}),(0,n.jsx)("h3",{className:"text-2xl font-thin mb-4 italic pt-8 px-16 text-center z-10  xs:text-lg sm:font-light lg:text-base",children:t}),(0,n.jsx)("h4",{className:"text-center mb-8 xs:text-sm",children:s})]})})}},247:(e,t,s)=>{s.d(t,{A:()=>n});var a=s(5043),r=s(579);const n=e=>{let{subtitle:t,className:s}=e;const[n,i]=(0,a.useState)(!1);(0,a.useEffect)((()=>{const e=()=>{const e=document.body.classList.contains("dark");i(e)};e();const t=new MutationObserver(e);return t.observe(document.body,{attributes:!0,attributeFilter:["class"]}),()=>t.disconnect()}),[]);const l=t||"",o="".concat(7.5*l.length,"px");return(0,r.jsxs)("div",{className:"flex flex-col ".concat(s),children:[(0,r.jsx)("h2",{className:"text-3xl font-semibold text-black relative dark:text-white sm:text-xl",children:l}),(0,r.jsx)("div",{className:"h-[3px] ".concat(n?"bg-[var(--underline-color-dark)]":"bg-[var(--underline-color-light)]"),style:{width:o}})]})}}}]);
//# sourceMappingURL=100.ed6fc1f6.chunk.js.map