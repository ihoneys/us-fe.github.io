import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";import{r as t,c,a as e,b as n,w as o,F as l,e as h,d as s,o as _}from"./app.22a70bca.js";const u={},p=h('<h1 id="validate-an-ip-address" tabindex="-1"><a class="header-anchor" href="#validate-an-ip-address" aria-hidden="true">#</a> validate an IP address</h1><h2 id="question" tabindex="-1"><a class="header-anchor" href="#question" aria-hidden="true">#</a> Question</h2><h2 id="ipv4" tabindex="-1"><a class="header-anchor" href="#ipv4" aria-hidden="true">#</a> IPv4</h2>',3),m=s("An "),v={href:"https://en.wikipedia.org/wiki/IP_address#IPv4_addresses",target:"_blank",rel:"noopener noreferrer"},k=s("IPv4 Address"),f=s(" is represented in dot-decimal notation, consisting of 4 numbers( called 'octet'), each ranging from 0 to 255, like "),b=e("code",null,"1.22.33.255",-1),g=s(". It has 32 bit, so there are maximum 2^32 = 4,294,967,296 IPv4 addresses."),x=e("p",null,[e("code",null,"Leading zeroes"),s(" are not allowed in IPv4, like "),e("code",null,"01.01.01.01"),s(" is invalid.")],-1),I=e("h2",{id:"ipv6",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#ipv6","aria-hidden":"true"},"#"),s(" IPv6")],-1),w=s("An "),P={href:"https://en.wikipedia.org/wiki/IPv6_address",target:"_blank",rel:"noopener noreferrer"},y=s("IPv6 Address"),C=s(" have 128 bits (which is a lot), separated by 8 groups (called 'hexadectet', or 'hextet', not fixed yet). Each group has 16 bits, so could be represented by a "),A=e("strong",null,"hexadecimal string at 4 digits",-1),N=s(", such as "),V=e("code",null,"2001:0db8:85a3:0000:0000:8a2e:0370:7334",-1),j=s("."),E=e("p",null,[s("Notice that "),e("code",null,"leading zeroes"),s(" are allowed in IPv6.")],-1),F=s("There are other valid format of IPv6 addresses, like "),G={href:"https://tools.ietf.org/html/rfc5952#section-2.2",target:"_blank",rel:"noopener noreferrer"},B=s("Zero compression"),L=s(", but it is beyond the scope here, you can ignore them."),S=e("h2",{id:"task",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#task","aria-hidden":"true"},"#"),s(" Task")],-1),T=e("p",null,"You are given some random string, please write a function if it is valid IPv4 or IPv6 address.",-1),q=e("p",null,[e("strong",null,"Follow-up")],-1),z=e("p",null,"Can you solve it with regular expressions ?",-1),Q=e("h2",{id:"code",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#code","aria-hidden":"true"},"#"),s(" Code")],-1),Y=e("div",{class:"language-javascript ext-js line-numbers-mode"},[e("pre",{class:"language-javascript"},[e("code",null,[e("span",{class:"token doc-comment comment"},[s(`/**
 * `),e("span",{class:"token keyword"},"@param"),s(),e("span",{class:"token class-name"},[e("span",{class:"token punctuation"},"{"),s("string"),e("span",{class:"token punctuation"},"}")]),s(),e("span",{class:"token parameter"},"str"),s(`
 * `),e("span",{class:"token keyword"},"@return"),s(),e("span",{class:"token class-name"},[e("span",{class:"token punctuation"},"{"),s("boolean"),e("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),e("span",{class:"token keyword"},"function"),s(),e("span",{class:"token function"},"isValidIP"),e("span",{class:"token punctuation"},"("),e("span",{class:"token parameter"},"str"),e("span",{class:"token punctuation"},")"),s(),e("span",{class:"token punctuation"},"{"),s(`
  `),e("span",{class:"token comment"},"// your code here"),s(`
`),e("span",{class:"token punctuation"},"}"),s(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),Z=e("h2",{id:"source",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#source","aria-hidden":"true"},"#"),s(" Source")],-1),D={href:"https://bigfrontend.dev/problem/validate-an-ip-address",target:"_blank",rel:"noopener noreferrer"},H=s("Source From");function J(K,M){const a=t("ExternalLinkIcon"),r=t("CodeGroupItem"),i=t("CodeGroup");return _(),c(l,null,[p,e("p",null,[m,e("a",v,[k,n(a)]),f,b,g]),x,I,e("p",null,[w,e("a",P,[y,n(a)]),C,A,N,V,j]),E,e("p",null,[F,e("a",G,[B,n(a)]),L]),S,T,q,z,Q,n(i,null,{default:o(()=>[n(r,{title:"javascript",active:""},{default:o(()=>[Y]),_:1})]),_:1}),Z,e("p",null,[e("a",D,[H,n(a)])])],64)}var U=d(u,[["render",J],["__file","validate-an-ip-address.html.vue"]]);export{U as default};