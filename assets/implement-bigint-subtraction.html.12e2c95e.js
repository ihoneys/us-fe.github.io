import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";import{r as s,c as p,a as n,b as a,w as i,F as d,d as e,e as o,o as u}from"./app.22a70bca.js";const m={},h=n("h1",{id:"implement-bigint-subtraction",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#implement-bigint-subtraction","aria-hidden":"true"},"#"),e(" implement BigInt subtraction")],-1),b=n("h2",{id:"question",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#question","aria-hidden":"true"},"#"),e(" Question")],-1),g=e("Luckily we already have built-in support of "),k={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt",target:"_blank",rel:"noopener noreferrer"},v=e("BigInt"),_=e(" in JavaScript, at least in some browsers."),f=o(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token number">1000000000000000000000n</span> <span class="token operator">-</span> <span class="token number">999999999999999999999n</span>
<span class="token comment">// 1n</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Suppose BigInt cannot be used, can you implement a string subtraction function by yourself?</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">subtract</span><span class="token punctuation">(</span><span class="token string">&#39;1000000000000000000000&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;999999999999999999999&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// &#39;1&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>All input are valid <strong>non-negative integer strings</strong>, and the result is guaranteed to be non-negative.</p><p><em>Don&#39;t use BigInt directly, it is not our goal here</em></p><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2>`,6),B=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[e(`/**
 * `),n("span",{class:"token keyword"},"@param"),e(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),e("string"),n("span",{class:"token punctuation"},"}")]),e(),n("span",{class:"token parameter"},"num1"),e(`
 * `),n("span",{class:"token keyword"},"@param"),e(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),e("string"),n("span",{class:"token punctuation"},"}")]),e(),n("span",{class:"token parameter"},"num2"),e(`
 * `),n("span",{class:"token keyword"},"@return"),e(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),e("string"),n("span",{class:"token punctuation"},"}")]),e(`
 */`)]),e(`
`),n("span",{class:"token keyword"},"function"),e(),n("span",{class:"token function"},"subtract"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[e("num1"),n("span",{class:"token punctuation"},","),e(" num2")]),n("span",{class:"token punctuation"},")"),e(),n("span",{class:"token punctuation"},"{"),e(`
  `),n("span",{class:"token comment"},"// your code here"),e(`
`),n("span",{class:"token punctuation"},"}"),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),I=o('<h2 id="related" tabindex="-1"><a class="header-anchor" href="#related" aria-hidden="true">#</a> Related</h2><ul><li><a href="./add-BigInt-string">implement BigInt addition</a></li><li><a href="./implement-BigInt-addition-with-sign">implement BigInt addition with sign</a></li><li><a href="./implement-BigInt-subtraction-with-sign">implement BigInt subtraction with sign</a></li></ul><h2 id="source" tabindex="-1"><a class="header-anchor" href="#source" aria-hidden="true">#</a> Source</h2>',3),x={href:"https://bigfrontend.dev/problem/implement-BigInt-subtraction",target:"_blank",rel:"noopener noreferrer"},w=e("Source From");function j(y,S){const t=s("ExternalLinkIcon"),r=s("CodeGroupItem"),c=s("CodeGroup");return u(),p(d,null,[h,b,n("p",null,[g,n("a",k,[v,a(t)]),_]),f,a(c,null,{default:i(()=>[a(r,{title:"javascript",active:""},{default:i(()=>[B]),_:1})]),_:1}),I,n("p",null,[n("a",x,[w,a(t)])])],64)}var N=l(m,[["render",j],["__file","implement-bigint-subtraction.html.vue"]]);export{N as default};