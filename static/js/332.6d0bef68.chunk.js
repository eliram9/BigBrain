"use strict";(self.webpackChunkbigbrain=self.webpackChunkbigbrain||[]).push([[332],{332:(e,t,n)=>{n.r(t),n.d(t,{default:()=>pe});var r={};n.r(r),n.d(r,{addTrackers:()=>$,default:()=>ie,event:()=>te,exception:()=>ne,ga:()=>Y,initialize:()=>U,modalview:()=>X,outboundLink:()=>oe,pageview:()=>W,plugin:()=>re,send:()=>Q,set:()=>H,testModeAPI:()=>ae,timing:()=>ee});var o=n(5043),a=n(3216),i=n(5173),c=n.n(i);function l(e){console.warn("[react-ga]",e)}function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}var f=["to","target"];function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){O(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t){return g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},g(e,t)}function d(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m(e);if(t){var o=m(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===u(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return v(e)}(this,n)}}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var h="_blank",w=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&g(e,t)}(i,e);var t,n,r,a=d(i);function i(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return O(v(e=a.call.apply(a,[this].concat(n))),"handleClick",(function(t){var n=e.props,r=n.target,o=n.eventLabel,a=n.to,c=n.onClick,l=n.trackerNames,u={label:o},f=r!==h,s=!(t.ctrlKey||t.shiftKey||t.metaKey||1===t.button);f&&s?(t.preventDefault(),i.trackLink(u,(function(){window.location.href=a}),l)):i.trackLink(u,(function(){}),l),c&&c(t)})),e}return t=i,(n=[{key:"render",value:function(){var e=this.props,t=e.to,n=e.target,r=p(p({},b(e,f)),{},{target:n,href:t,onClick:this.handleClick});return n===h&&(r.rel="".concat(r.rel?r.rel:""," noopener noreferrer").trim()),delete r.eventLabel,delete r.trackerNames,o.createElement("a",r)}}])&&y(t.prototype,n),r&&y(t,r),Object.defineProperty(t,"prototype",{writable:!1}),i}(o.Component);O(w,"trackLink",(function(){l("ga tracking not enabled")})),w.propTypes={eventLabel:c().string.isRequired,target:c().string,to:c().string,onClick:c().func,trackerNames:c().arrayOf(c().string)},w.defaultProps={target:null,to:null,onClick:null,trackerNames:null};var j="REDACTED (Potential Email Address)";function k(e){return e&&e.toString().replace(/^\s+|\s+$/g,"")}var P=/^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|vs?\.?|via)$/i;function A(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],n=e||"";return arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&(n=k(e).replace(/[A-Za-z0-9\u00C0-\u00FF]+[^\s-]*/g,(function(e,t,n){return t>0&&t+e.length!==n.length&&e.search(P)>-1&&":"!==n.charAt(t-2)&&("-"!==n.charAt(t+e.length)||"-"===n.charAt(t-1))&&n.charAt(t-1).search(/[^\s-]/)<0?e.toLowerCase():e.substr(1).search(/[A-Z]|\../)>-1?e:e.charAt(0).toUpperCase()+e.substr(1)}))),t&&(n=function(e){return"string"===typeof(t=e)&&-1!==t.indexOf("@")?(l("This arg looks like an email address, redacting."),j):e;var t}(n)),n}var S=!1;function E(e){console.info("[react-ga]",e)}var D=[];const C={calls:D,ga:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];D.push([].concat(t))},resetCalls:function(){D.length=0}};var T=["category","action","label","value","nonInteraction","transport"];function x(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function L(e){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(e)}function I(e){return function(e){if(Array.isArray(e))return _(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"===typeof e)return _(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var R="undefined"===typeof window||"undefined"===typeof document,z=!1,J=!0,B=!1,G=!0,M=!0,V=function(){var e;return B?C.ga.apply(C,arguments):!R&&(window.ga?(e=window).ga.apply(e,arguments):l("ReactGA.initialize must be called first or GoogleAnalytics should be loaded manually"))};function F(e){return A(e,J,M)}function K(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var o=n[0];if("function"===typeof V){if("string"!==typeof o)return void l("ga command must be a string");!G&&Array.isArray(e)||V.apply(void 0,n),Array.isArray(e)&&e.forEach((function(e){V.apply(void 0,I(["".concat(e,".").concat(o)].concat(n.slice(1))))}))}}function Z(e,t){e?t&&(t.debug&&!0===t.debug&&(z=!0),!1===t.titleCase&&(J=!1),!1===t.redactEmail&&(M=!1),t.useExistingGa)||(t&&t.gaOptions?V("create",e,t.gaOptions):V("create",e,"auto")):l("gaTrackingID is required in initialize()")}function $(e,t){return Array.isArray(e)?e.forEach((function(e){"object"===L(e)?Z(e.trackingId,e):l("All configs must be an object")})):Z(e,t),!0}function U(e,t){if(t&&!0===t.testMode)B=!0;else{if(R)return;t&&!0===t.standardImplementation||function(e){if(!S){S=!0;var t="https://www.google-analytics.com/analytics.js";e&&e.gaAddress?t=e.gaAddress:e&&e.debug&&(t="https://www.google-analytics.com/analytics_debug.js");var n,r,o,a,i,c,l,u=e&&e.onerror;n=window,r=document,o="script",a=t,i="ga",n.GoogleAnalyticsObject=i,n[i]=n[i]||function(){(n[i].q=n[i].q||[]).push(arguments)},n[i].l=1*new Date,c=r.createElement(o),l=r.getElementsByTagName(o)[0],c.async=1,c.src=a,c.onerror=u,l.parentNode.insertBefore(c,l)}}(t)}G=!t||"boolean"!==typeof t.alwaysSendToDefaultTracker||t.alwaysSendToDefaultTracker,$(e,t)}function Y(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.length>0&&(V.apply(void 0,t),z&&(E("called ga('arguments');"),E("with arguments: ".concat(JSON.stringify(t))))),window.ga}function H(e,t){e?"object"===L(e)?(0===Object.keys(e).length&&l("empty `fieldsObject` given to .set()"),K(t,"set",e),z&&(E("called ga('set', fieldsObject);"),E("with fieldsObject: ".concat(JSON.stringify(e))))):l("Expected `fieldsObject` arg to be an Object"):l("`fieldsObject` is required in .set()")}function Q(e,t){K(t,"send",e),z&&(E("called ga('send', fieldObject);"),E("with fieldObject: ".concat(JSON.stringify(e))),E("with trackers: ".concat(JSON.stringify(t))))}function W(e,t,n){if(e){var r=k(e);if(""!==r){var o={};if(n&&(o.title=n),K(t,"send",function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){q(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({hitType:"pageview",page:r},o)),z){E("called ga('send', 'pageview', path);");var a="";n&&(a=" and title: ".concat(n)),E("with path: ".concat(r).concat(a))}}else l("path cannot be an empty string in .pageview()")}else l("path is required in .pageview()")}function X(e,t){if(e){var n,r="/"===(n=k(e)).substring(0,1)?n.substring(1):n;if(""!==r){var o="/modal/".concat(r);K(t,"send","pageview",o),z&&(E("called ga('send', 'pageview', path);"),E("with path: ".concat(o)))}else l("modalName cannot be an empty string or a single / in .modalview()")}else l("modalName is required in .modalview(modalName)")}function ee(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.category,n=e.variable,r=e.value,o=e.label,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;if(t&&n&&"number"===typeof r){var i={hitType:"timing",timingCategory:F(t),timingVar:F(n),timingValue:r};o&&(i.timingLabel=F(o)),Q(i,a)}else l("args.category, args.variable AND args.value are required in timing() AND args.value has to be a number")}function te(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.category,n=e.action,r=e.label,o=e.value,a=e.nonInteraction,i=e.transport,c=x(e,T),u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;if(t&&n){var f={hitType:"event",eventCategory:F(t),eventAction:F(n)};r&&(f.eventLabel=F(r)),"undefined"!==typeof o&&("number"!==typeof o?l("Expected `args.value` arg to be a Number."):f.eventValue=o),"undefined"!==typeof a&&("boolean"!==typeof a?l("`args.nonInteraction` must be a boolean."):f.nonInteraction=a),"undefined"!==typeof i&&("string"!==typeof i?l("`args.transport` must be a string."):(-1===["beacon","xhr","image"].indexOf(i)&&l("`args.transport` must be either one of these values: `beacon`, `xhr` or `image`"),f.transport=i)),Object.keys(c).filter((function(e){return"dimension"===e.substr(0,9)})).forEach((function(e){f[e]=c[e]})),Object.keys(c).filter((function(e){return"metric"===e.substr(0,6)})).forEach((function(e){f[e]=c[e]})),Q(f,u)}else l("args.category AND args.action are required in event()")}function ne(e,t){var n=e.description,r=e.fatal,o={hitType:"exception"};n&&(o.exDescription=F(n)),"undefined"!==typeof r&&("boolean"!==typeof r?l("`args.fatal` must be a boolean."):o.exFatal=r),Q(o,t)}var re={require:function(e,t,n){if(e){var r=k(e);if(""!==r){var o=n?"".concat(n,".require"):"require";if(t){if("object"!==L(t))return void l("Expected `options` arg to be an Object");0===Object.keys(t).length&&l("Empty `options` given to .require()"),Y(o,r,t),z&&E("called ga('require', '".concat(r,"', ").concat(JSON.stringify(t)))}else Y(o,r),z&&E("called ga('require', '".concat(r,"');"))}else l("`name` cannot be an empty string in .require()")}else l("`name` is required in .require()")},execute:function(e,t){for(var n,r,o=arguments.length,a=new Array(o>2?o-2:0),i=2;i<o;i++)a[i-2]=arguments[i];if(1===a.length?n=a[0]:(r=a[0],n=a[1]),"string"!==typeof e)l("Expected `pluginName` arg to be a String.");else if("string"!==typeof t)l("Expected `action` arg to be a String.");else{var c="".concat(e,":").concat(t);n=n||null,r&&n?(Y(c,r,n),z&&(E("called ga('".concat(c,"');")),E('actionType: "'.concat(r,'" with payload: ').concat(JSON.stringify(n))))):n?(Y(c,n),z&&(E("called ga('".concat(c,"');")),E("with payload: ".concat(JSON.stringify(n))))):(Y(c),z&&E("called ga('".concat(c,"');")))}}};function oe(e,t,n){if("function"===typeof t)if(e&&e.label){var r={hitType:"event",eventCategory:"Outbound",eventAction:"Click",eventLabel:F(e.label)},o=!1,a=setTimeout((function(){o=!0,t()}),250);r.hitCallback=function(){clearTimeout(a),o||t()},Q(r,n)}else l("args.label is required in outboundLink()");else l("hitCallback function is required")}var ae=C;const ie={initialize:U,ga:Y,set:H,send:Q,pageview:W,modalview:X,timing:ee,event:te,exception:ne,plugin:re,outboundLink:oe,testModeAPI:C};function ce(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function le(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ce(Object(n),!0).forEach((function(t){ue(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ce(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function ue(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}w.origTrackLink=w.trackLink,w.trackLink=oe;var fe=w;const se=le(le({},r),{},{OutboundLink:fe}),pe=()=>{const e=(0,a.zy)();return(0,o.useEffect)((()=>{se.initialize("G-M3VZB0DBYL")}),[]),(0,o.useEffect)((()=>{se.set({page:window.location.pathname}),se.pageview(window.location.pathname)}),[e]),null}}}]);
//# sourceMappingURL=332.6d0bef68.chunk.js.map