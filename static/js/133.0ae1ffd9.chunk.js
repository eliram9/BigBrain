"use strict";(self.webpackChunkbigbrain=self.webpackChunkbigbrain||[]).push([[133],{459:(e,t,n)=>{n.d(t,{Ay:()=>ie});var r=n(6326);function i(e,t){if(!Boolean(e))throw new Error(null!=t?t:"Unexpected invariant triggered.")}const s=/\r\n|[\n\r]/g;function o(e,t){let n=0,r=1;for(const o of e.body.matchAll(s)){if("number"===typeof o.index||i(!1),o.index>=t)break;n=o.index+o[0].length,r+=1}return{line:r,column:t+1-n}}function a(e,t){const n=e.locationOffset.column-1,r="".padStart(n)+e.body,i=t.line-1,s=e.locationOffset.line-1,o=t.line+s,a=1===t.line?n:0,u=t.column+a,l="".concat(e.name,":").concat(o,":").concat(u,"\n"),h=r.split(/\r\n|[\n\r]/g),p=h[i];if(p.length>120){const e=Math.floor(u/80),t=u%80,n=[];for(let r=0;r<p.length;r+=80)n.push(p.slice(r,r+80));return l+c([["".concat(o," |"),n[0]],...n.slice(1,e+1).map((e=>["|",e])),["|","^".padStart(t)],["|",n[e+1]]])}return l+c([["".concat(o-1," |"),h[i-1]],["".concat(o," |"),p],["|","^".padStart(u)],["".concat(o+1," |"),h[i+1]]])}function c(e){const t=e.filter((e=>{let[t,n]=e;return void 0!==n})),n=Math.max(...t.map((e=>{let[t]=e;return t.length})));return t.map((e=>{let[t,r]=e;return t.padStart(n)+(r?" "+r:"")})).join("\n")}class u extends Error{constructor(e){for(var t,n,r,i=arguments.length,s=new Array(i>1?i-1:0),a=1;a<i;a++)s[a-1]=arguments[a];const{nodes:c,source:h,positions:p,path:d,originalError:f,extensions:v}=function(e){const t=e[0];return null==t||"kind"in t||"length"in t?{nodes:t,source:e[1],positions:e[2],path:e[3],originalError:e[4],extensions:e[5]}:t}(s);super(e),this.name="GraphQLError",this.path=null!==d&&void 0!==d?d:void 0,this.originalError=null!==f&&void 0!==f?f:void 0,this.nodes=l(Array.isArray(c)?c:c?[c]:void 0);const E=l(null===(t=this.nodes)||void 0===t?void 0:t.map((e=>e.loc)).filter((e=>null!=e)));this.source=null!==h&&void 0!==h?h:null===E||void 0===E||null===(n=E[0])||void 0===n?void 0:n.source,this.positions=null!==p&&void 0!==p?p:null===E||void 0===E?void 0:E.map((e=>e.start)),this.locations=p&&h?p.map((e=>o(h,e))):null===E||void 0===E?void 0:E.map((e=>o(e.source,e.start)));const m="object"==typeof(T=null===f||void 0===f?void 0:f.extensions)&&null!==T?null===f||void 0===f?void 0:f.extensions:void 0;var T;this.extensions=null!==(r=null!==v&&void 0!==v?v:m)&&void 0!==r?r:Object.create(null),Object.defineProperties(this,{message:{writable:!0,enumerable:!0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),null!==f&&void 0!==f&&f.stack?Object.defineProperty(this,"stack",{value:f.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,u):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}get[Symbol.toStringTag](){return"GraphQLError"}toString(){let e=this.message;if(this.nodes)for(const n of this.nodes)n.loc&&(e+="\n\n"+a((t=n.loc).source,o(t.source,t.start)));else if(this.source&&this.locations)for(const n of this.locations)e+="\n\n"+a(this.source,n);var t;return e}toJSON(){const e={message:this.message};return null!=this.locations&&(e.locations=this.locations),null!=this.path&&(e.path=this.path),null!=this.extensions&&Object.keys(this.extensions).length>0&&(e.extensions=this.extensions),e}}function l(e){return void 0===e||0===e.length?void 0:e}function h(e,t,n){return new u("Syntax Error: ".concat(n),{source:e,positions:[t]})}var p,d=n(4740);!function(e){e.QUERY="QUERY",e.MUTATION="MUTATION",e.SUBSCRIPTION="SUBSCRIPTION",e.FIELD="FIELD",e.FRAGMENT_DEFINITION="FRAGMENT_DEFINITION",e.FRAGMENT_SPREAD="FRAGMENT_SPREAD",e.INLINE_FRAGMENT="INLINE_FRAGMENT",e.VARIABLE_DEFINITION="VARIABLE_DEFINITION",e.SCHEMA="SCHEMA",e.SCALAR="SCALAR",e.OBJECT="OBJECT",e.FIELD_DEFINITION="FIELD_DEFINITION",e.ARGUMENT_DEFINITION="ARGUMENT_DEFINITION",e.INTERFACE="INTERFACE",e.UNION="UNION",e.ENUM="ENUM",e.ENUM_VALUE="ENUM_VALUE",e.INPUT_OBJECT="INPUT_OBJECT",e.INPUT_FIELD_DEFINITION="INPUT_FIELD_DEFINITION"}(p||(p={}));var f,v=n(4705),E=n(7312),m=n(5843);!function(e){e.SOF="<SOF>",e.EOF="<EOF>",e.BANG="!",e.DOLLAR="$",e.AMP="&",e.PAREN_L="(",e.PAREN_R=")",e.SPREAD="...",e.COLON=":",e.EQUALS="=",e.AT="@",e.BRACKET_L="[",e.BRACKET_R="]",e.BRACE_L="{",e.PIPE="|",e.BRACE_R="}",e.NAME="Name",e.INT="Int",e.FLOAT="Float",e.STRING="String",e.BLOCK_STRING="BlockString",e.COMMENT="Comment"}(f||(f={}));class T{constructor(e){const t=new d.ou(f.SOF,0,0,0,0);this.source=e,this.lastToken=t,this.token=t,this.line=1,this.lineStart=0}get[Symbol.toStringTag](){return"Lexer"}advance(){this.lastToken=this.token;return this.token=this.lookahead()}lookahead(){let e=this.token;if(e.kind!==f.EOF)do{if(e.next)e=e.next;else{const t=A(this,e.end);e.next=t,t.prev=e,e=t}}while(e.kind===f.COMMENT);return e}}function b(e){return e>=0&&e<=55295||e>=57344&&e<=1114111}function N(e,t){return k(e.charCodeAt(t))&&y(e.charCodeAt(t+1))}function k(e){return e>=55296&&e<=56319}function y(e){return e>=56320&&e<=57343}function x(e,t){const n=e.source.body.codePointAt(t);if(void 0===n)return f.EOF;if(n>=32&&n<=126){const e=String.fromCodePoint(n);return'"'===e?"'\"'":'"'.concat(e,'"')}return"U+"+n.toString(16).toUpperCase().padStart(4,"0")}function _(e,t,n,r,i){const s=e.line,o=1+n-e.lineStart;return new d.ou(t,n,r,s,o,i)}function A(e,t){const n=e.source.body,r=n.length;let i=t;for(;i<r;){const t=n.charCodeAt(i);switch(t){case 65279:case 9:case 32:case 44:++i;continue;case 10:++i,++e.line,e.lineStart=i;continue;case 13:10===n.charCodeAt(i+1)?i+=2:++i,++e.line,e.lineStart=i;continue;case 35:return g(e,i);case 33:return _(e,f.BANG,i,i+1);case 36:return _(e,f.DOLLAR,i,i+1);case 38:return _(e,f.AMP,i,i+1);case 40:return _(e,f.PAREN_L,i,i+1);case 41:return _(e,f.PAREN_R,i,i+1);case 46:if(46===n.charCodeAt(i+1)&&46===n.charCodeAt(i+2))return _(e,f.SPREAD,i,i+3);break;case 58:return _(e,f.COLON,i,i+1);case 61:return _(e,f.EQUALS,i,i+1);case 64:return _(e,f.AT,i,i+1);case 91:return _(e,f.BRACKET_L,i,i+1);case 93:return _(e,f.BRACKET_R,i,i+1);case 123:return _(e,f.BRACE_L,i,i+1);case 124:return _(e,f.PIPE,i,i+1);case 125:return _(e,f.BRACE_R,i,i+1);case 34:return 34===n.charCodeAt(i+1)&&34===n.charCodeAt(i+2)?F(e,i):D(e,i)}if((0,m.yp)(t)||45===t)return I(e,i,t);if((0,m.un)(t))return P(e,i);throw h(e.source,i,39===t?"Unexpected single quote character ('), did you mean to use a double quote (\")?":b(t)||N(n,i)?"Unexpected character: ".concat(x(e,i),"."):"Invalid character: ".concat(x(e,i),"."))}return _(e,f.EOF,r,r)}function g(e,t){const n=e.source.body,r=n.length;let i=t+1;for(;i<r;){const e=n.charCodeAt(i);if(10===e||13===e)break;if(b(e))++i;else{if(!N(n,i))break;i+=2}}return _(e,f.COMMENT,t,i,n.slice(t+1,i))}function I(e,t,n){const r=e.source.body;let i=t,s=n,o=!1;if(45===s&&(s=r.charCodeAt(++i)),48===s){if(s=r.charCodeAt(++i),(0,m.yp)(s))throw h(e.source,i,"Invalid number, unexpected digit after 0: ".concat(x(e,i),"."))}else i=O(e,i,s),s=r.charCodeAt(i);if(46===s&&(o=!0,s=r.charCodeAt(++i),i=O(e,i,s),s=r.charCodeAt(i)),69!==s&&101!==s||(o=!0,s=r.charCodeAt(++i),43!==s&&45!==s||(s=r.charCodeAt(++i)),i=O(e,i,s),s=r.charCodeAt(i)),46===s||(0,m.un)(s))throw h(e.source,i,"Invalid number, expected digit but got: ".concat(x(e,i),"."));return _(e,o?f.FLOAT:f.INT,t,i,r.slice(t,i))}function O(e,t,n){if(!(0,m.yp)(n))throw h(e.source,t,"Invalid number, expected digit but got: ".concat(x(e,t),"."));const r=e.source.body;let i=t+1;for(;(0,m.yp)(r.charCodeAt(i));)++i;return i}function D(e,t){const n=e.source.body,r=n.length;let i=t+1,s=i,o="";for(;i<r;){const r=n.charCodeAt(i);if(34===r)return o+=n.slice(s,i),_(e,f.STRING,t,i+1,o);if(92!==r){if(10===r||13===r)break;if(b(r))++i;else{if(!N(n,i))throw h(e.source,i,"Invalid character within String: ".concat(x(e,i),"."));i+=2}}else{o+=n.slice(s,i);const t=117===n.charCodeAt(i+1)?123===n.charCodeAt(i+2)?C(e,i):S(e,i):w(e,i);o+=t.value,i+=t.size,s=i}}throw h(e.source,i,"Unterminated string.")}function C(e,t){const n=e.source.body;let r=0,i=3;for(;i<12;){const e=n.charCodeAt(t+i++);if(125===e){if(i<5||!b(r))break;return{value:String.fromCodePoint(r),size:i}}if(r=r<<4|L(e),r<0)break}throw h(e.source,t,'Invalid Unicode escape sequence: "'.concat(n.slice(t,t+i),'".'))}function S(e,t){const n=e.source.body,r=R(n,t+2);if(b(r))return{value:String.fromCodePoint(r),size:6};if(k(r)&&92===n.charCodeAt(t+6)&&117===n.charCodeAt(t+7)){const e=R(n,t+8);if(y(e))return{value:String.fromCodePoint(r,e),size:12}}throw h(e.source,t,'Invalid Unicode escape sequence: "'.concat(n.slice(t,t+6),'".'))}function R(e,t){return L(e.charCodeAt(t))<<12|L(e.charCodeAt(t+1))<<8|L(e.charCodeAt(t+2))<<4|L(e.charCodeAt(t+3))}function L(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:-1}function w(e,t){const n=e.source.body;switch(n.charCodeAt(t+1)){case 34:return{value:'"',size:2};case 92:return{value:"\\",size:2};case 47:return{value:"/",size:2};case 98:return{value:"\b",size:2};case 102:return{value:"\f",size:2};case 110:return{value:"\n",size:2};case 114:return{value:"\r",size:2};case 116:return{value:"\t",size:2}}throw h(e.source,t,'Invalid character escape sequence: "'.concat(n.slice(t,t+2),'".'))}function F(e,t){const n=e.source.body,r=n.length;let i=e.lineStart,s=t+3,o=s,a="";const c=[];for(;s<r;){const r=n.charCodeAt(s);if(34===r&&34===n.charCodeAt(s+1)&&34===n.charCodeAt(s+2)){a+=n.slice(o,s),c.push(a);const r=_(e,f.BLOCK_STRING,t,s+3,(0,E.OC)(c).join("\n"));return e.line+=c.length-1,e.lineStart=i,r}if(92!==r||34!==n.charCodeAt(s+1)||34!==n.charCodeAt(s+2)||34!==n.charCodeAt(s+3))if(10!==r&&13!==r)if(b(r))++s;else{if(!N(n,s))throw h(e.source,s,"Invalid character within String: ".concat(x(e,s),"."));s+=2}else a+=n.slice(o,s),c.push(a),13===r&&10===n.charCodeAt(s+1)?s+=2:++s,a="",o=s,i=s;else a+=n.slice(o,s),o=s+1,s+=4}throw h(e.source,s,"Unterminated string.")}function P(e,t){const n=e.source.body,r=n.length;let i=t+1;for(;i<r;){const e=n.charCodeAt(i);if(!(0,m.xr)(e))break;++i}return _(e,f.NAME,t,i,n.slice(t,i))}var M=n(3515),U=n(9788);const B=globalThis.process&&!0?function(e,t){return e instanceof t}:function(e,t){if(e instanceof t)return!0;if("object"===typeof e&&null!==e){var n;const r=t.prototype[Symbol.toStringTag];if(r===(Symbol.toStringTag in e?e[Symbol.toStringTag]:null===(n=e.constructor)||void 0===n?void 0:n.name)){const t=(0,U.N)(e);throw new Error("Cannot use ".concat(r,' "').concat(t,'" from another module or realm.\n\nEnsure that there is only one instance of "graphql" in the node_modules\ndirectory. If different versions of "graphql" are the dependencies of other\nrelied on modules, use "resolutions" to ensure only one version is installed.\n\nhttps://yarnpkg.com/en/docs/selective-version-resolutions\n\nDuplicate "graphql" modules cannot be used at the same time since different\nversions may have different capabilities and behavior. The data from one\nversion used in the function from another could produce confusing and\nspurious results.'))}}return!1};class V{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GraphQL request",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{line:1,column:1};"string"===typeof e||(0,M.U)(!1,"Body must be a string. Received: ".concat((0,U.N)(e),".")),this.body=e,this.name=t,this.locationOffset=n,this.locationOffset.line>0||(0,M.U)(!1,"line in locationOffset is 1-indexed and must be positive."),this.locationOffset.column>0||(0,M.U)(!1,"column in locationOffset is 1-indexed and must be positive.")}get[Symbol.toStringTag](){return"Source"}}class K{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const n=function(e){return B(e,V)}(e)?e:new V(e);this._lexer=new T(n),this._options=t,this._tokenCounter=0}parseName(){const e=this.expectToken(f.NAME);return this.node(e,{kind:v.b.NAME,value:e.value})}parseDocument(){return this.node(this._lexer.token,{kind:v.b.DOCUMENT,definitions:this.many(f.SOF,this.parseDefinition,f.EOF)})}parseDefinition(){if(this.peek(f.BRACE_L))return this.parseOperationDefinition();const e=this.peekDescription(),t=e?this._lexer.lookahead():this._lexer.token;if(t.kind===f.NAME){switch(t.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}if(e)throw h(this._lexer.source,this._lexer.token.start,"Unexpected description, descriptions are supported only on type definitions.");switch(t.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"extend":return this.parseTypeSystemExtension()}}throw this.unexpected(t)}parseOperationDefinition(){const e=this._lexer.token;if(this.peek(f.BRACE_L))return this.node(e,{kind:v.b.OPERATION_DEFINITION,operation:d.cE.QUERY,name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet()});const t=this.parseOperationType();let n;return this.peek(f.NAME)&&(n=this.parseName()),this.node(e,{kind:v.b.OPERATION_DEFINITION,operation:t,name:n,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseOperationType(){const e=this.expectToken(f.NAME);switch(e.value){case"query":return d.cE.QUERY;case"mutation":return d.cE.MUTATION;case"subscription":return d.cE.SUBSCRIPTION}throw this.unexpected(e)}parseVariableDefinitions(){return this.optionalMany(f.PAREN_L,this.parseVariableDefinition,f.PAREN_R)}parseVariableDefinition(){return this.node(this._lexer.token,{kind:v.b.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(f.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(f.EQUALS)?this.parseConstValueLiteral():void 0,directives:this.parseConstDirectives()})}parseVariable(){const e=this._lexer.token;return this.expectToken(f.DOLLAR),this.node(e,{kind:v.b.VARIABLE,name:this.parseName()})}parseSelectionSet(){return this.node(this._lexer.token,{kind:v.b.SELECTION_SET,selections:this.many(f.BRACE_L,this.parseSelection,f.BRACE_R)})}parseSelection(){return this.peek(f.SPREAD)?this.parseFragment():this.parseField()}parseField(){const e=this._lexer.token,t=this.parseName();let n,r;return this.expectOptionalToken(f.COLON)?(n=t,r=this.parseName()):r=t,this.node(e,{kind:v.b.FIELD,alias:n,name:r,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(f.BRACE_L)?this.parseSelectionSet():void 0})}parseArguments(e){const t=e?this.parseConstArgument:this.parseArgument;return this.optionalMany(f.PAREN_L,t,f.PAREN_R)}parseArgument(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];const t=this._lexer.token,n=this.parseName();return this.expectToken(f.COLON),this.node(t,{kind:v.b.ARGUMENT,name:n,value:this.parseValueLiteral(e)})}parseConstArgument(){return this.parseArgument(!0)}parseFragment(){const e=this._lexer.token;this.expectToken(f.SPREAD);const t=this.expectOptionalKeyword("on");return!t&&this.peek(f.NAME)?this.node(e,{kind:v.b.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1)}):this.node(e,{kind:v.b.INLINE_FRAGMENT,typeCondition:t?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentDefinition(){const e=this._lexer.token;return this.expectKeyword("fragment"),!0===this._options.allowLegacyFragmentVariables?this.node(e,{kind:v.b.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()}):this.node(e,{kind:v.b.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentName(){if("on"===this._lexer.token.value)throw this.unexpected();return this.parseName()}parseValueLiteral(e){const t=this._lexer.token;switch(t.kind){case f.BRACKET_L:return this.parseList(e);case f.BRACE_L:return this.parseObject(e);case f.INT:return this.advanceLexer(),this.node(t,{kind:v.b.INT,value:t.value});case f.FLOAT:return this.advanceLexer(),this.node(t,{kind:v.b.FLOAT,value:t.value});case f.STRING:case f.BLOCK_STRING:return this.parseStringLiteral();case f.NAME:switch(this.advanceLexer(),t.value){case"true":return this.node(t,{kind:v.b.BOOLEAN,value:!0});case"false":return this.node(t,{kind:v.b.BOOLEAN,value:!1});case"null":return this.node(t,{kind:v.b.NULL});default:return this.node(t,{kind:v.b.ENUM,value:t.value})}case f.DOLLAR:if(e){if(this.expectToken(f.DOLLAR),this._lexer.token.kind===f.NAME){const e=this._lexer.token.value;throw h(this._lexer.source,t.start,'Unexpected variable "$'.concat(e,'" in constant value.'))}throw this.unexpected(t)}return this.parseVariable();default:throw this.unexpected()}}parseConstValueLiteral(){return this.parseValueLiteral(!0)}parseStringLiteral(){const e=this._lexer.token;return this.advanceLexer(),this.node(e,{kind:v.b.STRING,value:e.value,block:e.kind===f.BLOCK_STRING})}parseList(e){return this.node(this._lexer.token,{kind:v.b.LIST,values:this.any(f.BRACKET_L,(()=>this.parseValueLiteral(e)),f.BRACKET_R)})}parseObject(e){return this.node(this._lexer.token,{kind:v.b.OBJECT,fields:this.any(f.BRACE_L,(()=>this.parseObjectField(e)),f.BRACE_R)})}parseObjectField(e){const t=this._lexer.token,n=this.parseName();return this.expectToken(f.COLON),this.node(t,{kind:v.b.OBJECT_FIELD,name:n,value:this.parseValueLiteral(e)})}parseDirectives(e){const t=[];for(;this.peek(f.AT);)t.push(this.parseDirective(e));return t}parseConstDirectives(){return this.parseDirectives(!0)}parseDirective(e){const t=this._lexer.token;return this.expectToken(f.AT),this.node(t,{kind:v.b.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(e)})}parseTypeReference(){const e=this._lexer.token;let t;if(this.expectOptionalToken(f.BRACKET_L)){const n=this.parseTypeReference();this.expectToken(f.BRACKET_R),t=this.node(e,{kind:v.b.LIST_TYPE,type:n})}else t=this.parseNamedType();return this.expectOptionalToken(f.BANG)?this.node(e,{kind:v.b.NON_NULL_TYPE,type:t}):t}parseNamedType(){return this.node(this._lexer.token,{kind:v.b.NAMED_TYPE,name:this.parseName()})}peekDescription(){return this.peek(f.STRING)||this.peek(f.BLOCK_STRING)}parseDescription(){if(this.peekDescription())return this.parseStringLiteral()}parseSchemaDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("schema");const n=this.parseConstDirectives(),r=this.many(f.BRACE_L,this.parseOperationTypeDefinition,f.BRACE_R);return this.node(e,{kind:v.b.SCHEMA_DEFINITION,description:t,directives:n,operationTypes:r})}parseOperationTypeDefinition(){const e=this._lexer.token,t=this.parseOperationType();this.expectToken(f.COLON);const n=this.parseNamedType();return this.node(e,{kind:v.b.OPERATION_TYPE_DEFINITION,operation:t,type:n})}parseScalarTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("scalar");const n=this.parseName(),r=this.parseConstDirectives();return this.node(e,{kind:v.b.SCALAR_TYPE_DEFINITION,description:t,name:n,directives:r})}parseObjectTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("type");const n=this.parseName(),r=this.parseImplementsInterfaces(),i=this.parseConstDirectives(),s=this.parseFieldsDefinition();return this.node(e,{kind:v.b.OBJECT_TYPE_DEFINITION,description:t,name:n,interfaces:r,directives:i,fields:s})}parseImplementsInterfaces(){return this.expectOptionalKeyword("implements")?this.delimitedMany(f.AMP,this.parseNamedType):[]}parseFieldsDefinition(){return this.optionalMany(f.BRACE_L,this.parseFieldDefinition,f.BRACE_R)}parseFieldDefinition(){const e=this._lexer.token,t=this.parseDescription(),n=this.parseName(),r=this.parseArgumentDefs();this.expectToken(f.COLON);const i=this.parseTypeReference(),s=this.parseConstDirectives();return this.node(e,{kind:v.b.FIELD_DEFINITION,description:t,name:n,arguments:r,type:i,directives:s})}parseArgumentDefs(){return this.optionalMany(f.PAREN_L,this.parseInputValueDef,f.PAREN_R)}parseInputValueDef(){const e=this._lexer.token,t=this.parseDescription(),n=this.parseName();this.expectToken(f.COLON);const r=this.parseTypeReference();let i;this.expectOptionalToken(f.EQUALS)&&(i=this.parseConstValueLiteral());const s=this.parseConstDirectives();return this.node(e,{kind:v.b.INPUT_VALUE_DEFINITION,description:t,name:n,type:r,defaultValue:i,directives:s})}parseInterfaceTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("interface");const n=this.parseName(),r=this.parseImplementsInterfaces(),i=this.parseConstDirectives(),s=this.parseFieldsDefinition();return this.node(e,{kind:v.b.INTERFACE_TYPE_DEFINITION,description:t,name:n,interfaces:r,directives:i,fields:s})}parseUnionTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("union");const n=this.parseName(),r=this.parseConstDirectives(),i=this.parseUnionMemberTypes();return this.node(e,{kind:v.b.UNION_TYPE_DEFINITION,description:t,name:n,directives:r,types:i})}parseUnionMemberTypes(){return this.expectOptionalToken(f.EQUALS)?this.delimitedMany(f.PIPE,this.parseNamedType):[]}parseEnumTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("enum");const n=this.parseName(),r=this.parseConstDirectives(),i=this.parseEnumValuesDefinition();return this.node(e,{kind:v.b.ENUM_TYPE_DEFINITION,description:t,name:n,directives:r,values:i})}parseEnumValuesDefinition(){return this.optionalMany(f.BRACE_L,this.parseEnumValueDefinition,f.BRACE_R)}parseEnumValueDefinition(){const e=this._lexer.token,t=this.parseDescription(),n=this.parseEnumValueName(),r=this.parseConstDirectives();return this.node(e,{kind:v.b.ENUM_VALUE_DEFINITION,description:t,name:n,directives:r})}parseEnumValueName(){if("true"===this._lexer.token.value||"false"===this._lexer.token.value||"null"===this._lexer.token.value)throw h(this._lexer.source,this._lexer.token.start,"".concat(j(this._lexer.token)," is reserved and cannot be used for an enum value."));return this.parseName()}parseInputObjectTypeDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("input");const n=this.parseName(),r=this.parseConstDirectives(),i=this.parseInputFieldsDefinition();return this.node(e,{kind:v.b.INPUT_OBJECT_TYPE_DEFINITION,description:t,name:n,directives:r,fields:i})}parseInputFieldsDefinition(){return this.optionalMany(f.BRACE_L,this.parseInputValueDef,f.BRACE_R)}parseTypeSystemExtension(){const e=this._lexer.lookahead();if(e.kind===f.NAME)switch(e.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(e)}parseSchemaExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");const t=this.parseConstDirectives(),n=this.optionalMany(f.BRACE_L,this.parseOperationTypeDefinition,f.BRACE_R);if(0===t.length&&0===n.length)throw this.unexpected();return this.node(e,{kind:v.b.SCHEMA_EXTENSION,directives:t,operationTypes:n})}parseScalarTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");const t=this.parseName(),n=this.parseConstDirectives();if(0===n.length)throw this.unexpected();return this.node(e,{kind:v.b.SCALAR_TYPE_EXTENSION,name:t,directives:n})}parseObjectTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");const t=this.parseName(),n=this.parseImplementsInterfaces(),r=this.parseConstDirectives(),i=this.parseFieldsDefinition();if(0===n.length&&0===r.length&&0===i.length)throw this.unexpected();return this.node(e,{kind:v.b.OBJECT_TYPE_EXTENSION,name:t,interfaces:n,directives:r,fields:i})}parseInterfaceTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");const t=this.parseName(),n=this.parseImplementsInterfaces(),r=this.parseConstDirectives(),i=this.parseFieldsDefinition();if(0===n.length&&0===r.length&&0===i.length)throw this.unexpected();return this.node(e,{kind:v.b.INTERFACE_TYPE_EXTENSION,name:t,interfaces:n,directives:r,fields:i})}parseUnionTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");const t=this.parseName(),n=this.parseConstDirectives(),r=this.parseUnionMemberTypes();if(0===n.length&&0===r.length)throw this.unexpected();return this.node(e,{kind:v.b.UNION_TYPE_EXTENSION,name:t,directives:n,types:r})}parseEnumTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");const t=this.parseName(),n=this.parseConstDirectives(),r=this.parseEnumValuesDefinition();if(0===n.length&&0===r.length)throw this.unexpected();return this.node(e,{kind:v.b.ENUM_TYPE_EXTENSION,name:t,directives:n,values:r})}parseInputObjectTypeExtension(){const e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");const t=this.parseName(),n=this.parseConstDirectives(),r=this.parseInputFieldsDefinition();if(0===n.length&&0===r.length)throw this.unexpected();return this.node(e,{kind:v.b.INPUT_OBJECT_TYPE_EXTENSION,name:t,directives:n,fields:r})}parseDirectiveDefinition(){const e=this._lexer.token,t=this.parseDescription();this.expectKeyword("directive"),this.expectToken(f.AT);const n=this.parseName(),r=this.parseArgumentDefs(),i=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");const s=this.parseDirectiveLocations();return this.node(e,{kind:v.b.DIRECTIVE_DEFINITION,description:t,name:n,arguments:r,repeatable:i,locations:s})}parseDirectiveLocations(){return this.delimitedMany(f.PIPE,this.parseDirectiveLocation)}parseDirectiveLocation(){const e=this._lexer.token,t=this.parseName();if(Object.prototype.hasOwnProperty.call(p,t.value))return t;throw this.unexpected(e)}node(e,t){return!0!==this._options.noLocation&&(t.loc=new d.aZ(e,this._lexer.lastToken,this._lexer.source)),t}peek(e){return this._lexer.token.kind===e}expectToken(e){const t=this._lexer.token;if(t.kind===e)return this.advanceLexer(),t;throw h(this._lexer.source,t.start,"Expected ".concat(G(e),", found ").concat(j(t),"."))}expectOptionalToken(e){return this._lexer.token.kind===e&&(this.advanceLexer(),!0)}expectKeyword(e){const t=this._lexer.token;if(t.kind!==f.NAME||t.value!==e)throw h(this._lexer.source,t.start,'Expected "'.concat(e,'", found ').concat(j(t),"."));this.advanceLexer()}expectOptionalKeyword(e){const t=this._lexer.token;return t.kind===f.NAME&&t.value===e&&(this.advanceLexer(),!0)}unexpected(e){const t=null!==e&&void 0!==e?e:this._lexer.token;return h(this._lexer.source,t.start,"Unexpected ".concat(j(t),"."))}any(e,t,n){this.expectToken(e);const r=[];for(;!this.expectOptionalToken(n);)r.push(t.call(this));return r}optionalMany(e,t,n){if(this.expectOptionalToken(e)){const e=[];do{e.push(t.call(this))}while(!this.expectOptionalToken(n));return e}return[]}many(e,t,n){this.expectToken(e);const r=[];do{r.push(t.call(this))}while(!this.expectOptionalToken(n));return r}delimitedMany(e,t){this.expectOptionalToken(e);const n=[];do{n.push(t.call(this))}while(this.expectOptionalToken(e));return n}advanceLexer(){const{maxTokens:e}=this._options,t=this._lexer.advance();if(void 0!==e&&t.kind!==f.EOF&&(++this._tokenCounter,this._tokenCounter>e))throw h(this._lexer.source,t.start,"Document contains more that ".concat(e," tokens. Parsing aborted."))}}function j(e){const t=e.value;return G(e.kind)+(null!=t?' "'.concat(t,'"'):"")}function G(e){return function(e){return e===f.BANG||e===f.DOLLAR||e===f.AMP||e===f.PAREN_L||e===f.PAREN_R||e===f.SPREAD||e===f.COLON||e===f.EQUALS||e===f.AT||e===f.BRACKET_L||e===f.BRACKET_R||e===f.BRACE_L||e===f.PIPE||e===f.BRACE_R}(e)?'"'.concat(e,'"'):e}var Q=new Map,q=new Map,Y=!0,z=!1;function J(e){return e.replace(/[\s,]+/g," ").trim()}function X(e){var t=new Set,n=[];return e.definitions.forEach((function(e){if("FragmentDefinition"===e.kind){var r=e.name.value,i=J((o=e.loc).source.body.substring(o.start,o.end)),s=q.get(r);s&&!s.has(i)?Y&&console.warn("Warning: fragment with name "+r+" already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names"):s||q.set(r,s=new Set),s.add(i),t.has(i)||(t.add(i),n.push(e))}else n.push(e);var o})),(0,r.Cl)((0,r.Cl)({},e),{definitions:n})}function H(e){var t=J(e);if(!Q.has(t)){var n=function(e,t){return new K(e,t).parseDocument()}(e,{experimentalFragmentVariables:z,allowLegacyFragmentVariables:z});if(!n||"Document"!==n.kind)throw new Error("Not a valid GraphQL document.");Q.set(t,function(e){var t=new Set(e.definitions);t.forEach((function(e){e.loc&&delete e.loc,Object.keys(e).forEach((function(n){var r=e[n];r&&"object"===typeof r&&t.add(r)}))}));var n=e.loc;return n&&(delete n.startToken,delete n.endToken),e}(X(n)))}return Q.get(t)}function W(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];"string"===typeof e&&(e=[e]);var r=e[0];return t.forEach((function(t,n){t&&"Document"===t.kind?r+=t.loc.source.body:r+=t,r+=e[n+1]})),H(r)}var $,Z=W,ee=function(){Q.clear(),q.clear()},te=function(){Y=!1},ne=function(){z=!0},re=function(){z=!1};($=W||(W={})).gql=Z,$.resetCaches=ee,$.disableFragmentWarnings=te,$.enableExperimentalFragmentVariables=ne,$.disableExperimentalFragmentVariables=re,W.default=W;const ie=W},7528:(e,t,n)=>{function r(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,{A:()=>r})},4082:(e,t,n)=>{n.d(t,{IT:()=>S});var r=n(6326),i=n(1766),s=n(48),o=n.t(s,2),a=n(2622),c=!1,u=o.useSyncExternalStore||function(e,t,n){var r=t();!1===globalThis.__DEV__||c||r===t()||(c=!0,!1!==globalThis.__DEV__&&i.V1.error(60));var o=s.useState({inst:{value:r,getSnapshot:t}}),u=o[0].inst,h=o[1];return a.JR?s.useLayoutEffect((function(){Object.assign(u,{value:r,getSnapshot:t}),l(u)&&h({inst:u})}),[e,r,t]):Object.assign(u,{value:r,getSnapshot:t}),s.useEffect((function(){return l(u)&&h({inst:u}),e((function(){l(u)&&h({inst:u})}))}),[e]),r};function l(e){var t=e.value,n=e.getSnapshot;try{return t!==n()}catch(r){return!0}}var h,p,d=n(4902),f=n(2277),v=n(1172),E=n(7832),m=n(1388),T=n(4376),b=n(4273),N=n(2172);function k(e){var t;switch(e){case h.Query:t="Query";break;case h.Mutation:t="Mutation";break;case h.Subscription:t="Subscription"}return t}function y(e){p||(p=new T.A(b.v.parser||1e3));var t,n,r=p.get(e);if(r)return r;(0,i.V1)(!!e&&!!e.kind,62,e);for(var s=[],o=[],a=[],c=[],u=0,l=e.definitions;u<l.length;u++){var d=l[u];if("FragmentDefinition"!==d.kind){if("OperationDefinition"===d.kind)switch(d.operation){case"query":o.push(d);break;case"mutation":a.push(d);break;case"subscription":c.push(d)}}else s.push(d)}(0,i.V1)(!s.length||o.length||a.length||c.length,63),(0,i.V1)(o.length+a.length+c.length<=1,64,e,o.length,c.length,a.length),n=o.length?h.Query:h.Mutation,o.length||a.length||(n=h.Subscription);var f=o.length?o:a.length?a:c;(0,i.V1)(1===f.length,65,e,f.length);var v=f[0];t=v.variableDefinitions||[];var E={name:v.name&&"Name"===v.name.kind?v.name.value:"data",type:n,variables:t};return p.set(e,E),E}function x(e){var t=s.useContext((0,v.l)()),n=e||t.client;return(0,i.V1)(!!n,50),n}!function(e){e[e.Query=0]="Query",e[e.Mutation=1]="Mutation",e[e.Subscription=2]="Subscription"}(h||(h={})),y.resetCache=function(){p=void 0},!1!==globalThis.__DEV__&&(0,N.D_)("parser",(function(){return p?p.size:0}));var _=n(8694),A=n(8829),g=n(6250),I=Symbol.for("apollo.hook.wrappers");var O=Object.prototype.hasOwnProperty;function D(){}var C=Symbol();function S(e,t){return void 0===t&&(t=Object.create(null)),function(e,t,n){var r=n.queryManager,i=r&&r[I],s=i&&i[e];return s?s(t):t}("useQuery",R,x(t&&t.client))(e,t)}function R(e,t){var n=function(e,t){var n=x(t.client),o=s.useContext((0,v.l)()).renderPromises,a=!!o,c=n.disableNetworkFetches,l=!1!==t.ssr&&!t.skip,p=t.partialRefetch,f=function(e,t,n,i){void 0===n&&(n={});var s=n.skip,o=(n.ssr,n.onCompleted,n.onError,n.defaultOptions),a=(0,r.Tt)(n,["skip","ssr","onCompleted","onError","defaultOptions"]);return function(n){var r=Object.assign(a,{query:t});return!i||"network-only"!==r.fetchPolicy&&"cache-and-network"!==r.fetchPolicy||(r.fetchPolicy="cache-first"),r.variables||(r.variables={}),s?(r.initialFetchPolicy=r.initialFetchPolicy||r.fetchPolicy||P(o,e.defaultOptions),r.fetchPolicy="standby"):r.fetchPolicy||(r.fetchPolicy=(null===n||void 0===n?void 0:n.options.initialFetchPolicy)||P(o,e.defaultOptions)),r}}(n,e,t,a),E=function(e,t,n,o,a){function c(r){var s;return function(e,t){var n=y(e),r=k(t),s=k(n.type);(0,i.V1)(n.type===t,66,r,r,s)}(t,h.Query),{client:e,query:t,observable:o&&o.getSSRObservable(a())||e.watchQuery(L(void 0,e,n,a())),resultData:{previousData:null===(s=null===r||void 0===r?void 0:r.resultData.current)||void 0===s?void 0:s.data}}}var u=s.useState(c),l=u[0],p=u[1];function d(e){var t,n;Object.assign(l.observable,((t={})[C]=e,t));var i=l.resultData;p((0,r.Cl)((0,r.Cl)({},l),{query:e.query,resultData:Object.assign(i,{previousData:(null===(n=i.current)||void 0===n?void 0:n.data)||i.previousData,current:void 0})}))}if(e!==l.client||t!==l.query){var f=c(l);return p(f),[f,d]}return[l,d]}(n,e,t,o,f),T=E[0],b=T.observable,N=T.resultData,_=E[1],A=f(b);!function(e,t,n,r,i){var s;t[C]&&!(0,d.L)(t[C],i)&&(t.reobserve(L(t,n,r,i)),e.previousData=(null===(s=e.current)||void 0===s?void 0:s.data)||e.previousData,e.current=void 0);t[C]=i}(N,b,n,t,A);var g=s.useMemo((function(){return function(e){return{refetch:e.refetch.bind(e),reobserve:e.reobserve.bind(e),fetchMore:e.fetchMore.bind(e),updateQuery:e.updateQuery.bind(e),startPolling:e.startPolling.bind(e),stopPolling:e.stopPolling.bind(e),subscribeToMore:e.subscribeToMore.bind(e)}}(b)}),[b]);!function(e,t,n){t&&n&&(t.registerSSRObservable(e),e.getCurrentResult().loading&&t.addObservableQueryPromise(e))}(b,o,l);var I=function(e,t,n,r,i,o,a,c,l){var h=s.useRef(l);s.useEffect((function(){h.current=l}));var p=!c&&!o||!1!==r.ssr||r.skip?r.skip||"standby"===i.fetchPolicy?B:void 0:U,f=e.previousData,v=s.useMemo((function(){return p&&M(p,f,t,n)}),[n,t,p,f]);return u(s.useCallback((function(r){if(c)return function(){};var i=function(){var i=e.current,s=t.getCurrentResult();i&&i.loading===s.loading&&i.networkStatus===s.networkStatus&&(0,d.L)(i.data,s.data)||w(s,e,t,n,a,r,h.current)},s=function(c){if(o.current.unsubscribe(),o.current=t.resubscribeAfterError(i,s),!O.call(c,"graphQLErrors"))throw c;var u=e.current;(!u||u&&u.loading||!(0,d.L)(c,u.error))&&w({data:u&&u.data,error:c,loading:!1,networkStatus:m.pT.error},e,t,n,a,r,h.current)},o={current:t.subscribe(i,s)};return function(){setTimeout((function(){return o.current.unsubscribe()}))}}),[o,c,t,e,a,n]),(function(){return v||F(e,t,h.current,a,n)}),(function(){return v||F(e,t,h.current,a,n)}))}(N,b,n,t,A,c,p,a,{onCompleted:t.onCompleted||D,onError:t.onError||D});return{result:I,obsQueryFields:g,observable:b,resultData:N,client:n,onQueryExecuted:_}}(e,t),o=n.result,a=n.obsQueryFields;return s.useMemo((function(){return(0,r.Cl)((0,r.Cl)({},o),a)}),[o,a])}function L(e,t,n,r){var i=[],s=t.defaultOptions.watchQuery;return s&&i.push(s),n.defaultOptions&&i.push(n.defaultOptions),i.push((0,_.o)(e&&e.options,r)),i.reduce(f.l)}function w(e,t,n,s,o,a,c){var u=t.current;u&&u.data&&(t.previousData=u.data),!e.error&&(0,A.E)(e.errors)&&(e.error=new E.K4({graphQLErrors:e.errors})),t.current=M(function(e,t,n){if(e.partial&&n&&!e.loading&&(!e.data||0===Object.keys(e.data).length)&&"cache-only"!==t.options.fetchPolicy)return t.refetch(),(0,r.Cl)((0,r.Cl)({},e),{loading:!0,networkStatus:m.pT.refetch});return e}(e,n,o),t.previousData,n,s),a(),function(e,t,n){if(!e.loading){var r=function(e){return(0,A.E)(e.errors)?new E.K4({graphQLErrors:e.errors}):e.error}(e);Promise.resolve().then((function(){r?n.onError(r):e.data&&t!==e.networkStatus&&e.networkStatus===m.pT.ready&&n.onCompleted(e.data)})).catch((function(e){!1!==globalThis.__DEV__&&i.V1.warn(e)}))}}(e,null===u||void 0===u?void 0:u.networkStatus,c)}function F(e,t,n,r,i){return e.current||w(t.getCurrentResult(),e,t,i,r,(function(){}),n),e.current}function P(e,t){var n;return(null===e||void 0===e?void 0:e.fetchPolicy)||(null===(n=null===t||void 0===t?void 0:t.watchQuery)||void 0===n?void 0:n.fetchPolicy)||"cache-first"}function M(e,t,n,i){var s=e.data,o=(e.partial,(0,r.Tt)(e,["data","partial"]));return(0,r.Cl)((0,r.Cl)({data:s},o),{client:i,observable:n,variables:n.variables,called:e!==U&&e!==B,previousData:t})}var U=(0,g.G)({loading:!0,data:void 0,error:void 0,networkStatus:m.pT.loading}),B=(0,g.G)({loading:!1,data:void 0,error:void 0,networkStatus:m.pT.ready})}}]);
//# sourceMappingURL=133.0ae1ffd9.chunk.js.map