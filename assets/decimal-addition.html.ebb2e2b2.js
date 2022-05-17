import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";import{r as t,c as d,a as n,b as s,w as o,F as p,d as e,e as i,o as u}from"./app.22a70bca.js";const m={},h=n("h1",{id:"bigdecimal-addition",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#bigdecimal-addition","aria-hidden":"true"},"#"),e(" BigDecimal addition")],-1),_=n("h2",{id:"question",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#question","aria-hidden":"true"},"#"),e(" Question")],-1),k=n("p",null,"As you know, number data type in JavaScript cannot represent (all) float numbers accurately due to binary nature.",-1),b=n("p",null,[e("For some basic calculations, you might use "),n("code",null,"Number.prototype.toFixed()"),e(" to overcome this, yet for more extreme cases that requires perfect accuracy, it is not enough.")],-1),v={href:"https://github.com/tc39/proposal-decimal",target:"_blank",rel:"noopener noreferrer"},g=e("Proposal of BigDecimal"),f=e(" to JavaScript is still at an early stage, before it is adopted, you can use other libraries like "),y={href:"https://github.com/MikeMcl/big.js/",target:"_blank",rel:"noopener noreferrer"},x=e("Big.js"),w=e("."),j=i(`<p>In this problem, you are asked to <strong>implement the addition of two decimals with arbitrary digits</strong>.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>
<span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&#39;-999999999999999999&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;-1&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// &#39;-1000000000000000000&#39;</span>

<span class="token function">add</span><span class="token punctuation">(</span>
  <span class="token string">&#39;-999999999999999999.999999999999999999999999999999&#39;</span><span class="token punctuation">,</span> 
  <span class="token string">&#39;1.0000000000000000000000000001&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// &#39;-999999999999999998.999999999999999999999999999899&#39;</span>

<span class="token function">add</span><span class="token punctuation">(</span>
  <span class="token string">&#39;999999999999999999.9999999999999999999999999999&#39;</span><span class="token punctuation">,</span> 
  <span class="token string">&#39;1.0000000000000000000000000001&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// &#39;1000000000000000001&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),B=e("This problem covers "),C={href:"https://bigfrontend.dev/problem/implement-BigInt-addition-with-sign",target:"_blank",rel:"noopener noreferrer"},I=e("76. implement BigInt addition with sign"),F=e("."),N=n("li",null,"trailing zeroes in the result should be removed.",-1),S=n("h2",{id:"code",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#code","aria-hidden":"true"},"#"),e(" Code")],-1),G=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[e(`/**
 * `),n("span",{class:"token keyword"},"@param"),e(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),e("string"),n("span",{class:"token punctuation"},"}")]),e(),n("span",{class:"token parameter"},"num1"),e(`
 * `),n("span",{class:"token keyword"},"@param"),e(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),e("string"),n("span",{class:"token punctuation"},"}")]),e(),n("span",{class:"token parameter"},"num2"),e(`
 * `),n("span",{class:"token keyword"},"@return"),e(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),e("string"),n("span",{class:"token punctuation"},"}")]),e(`
 */`)]),e(`
`),n("span",{class:"token keyword"},"function"),e(),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[e("num1"),n("span",{class:"token punctuation"},","),e(" num2")]),n("span",{class:"token punctuation"},")"),e(),n("span",{class:"token punctuation"},"{"),e(`
  `),n("span",{class:"token comment"},"// your code here"),e(`
`),n("span",{class:"token punctuation"},"}"),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),V=i('<h2 id="related" tabindex="-1"><a class="header-anchor" href="#related" aria-hidden="true">#</a> Related</h2><ul><li><a href="./bigdecimal-subtraction">BigDecimal subtraction</a></li></ul><h2 id="source" tabindex="-1"><a class="header-anchor" href="#source" aria-hidden="true">#</a> Source</h2>',3),q={href:"https://bigfrontend.dev/problem/decimal-addition",target:"_blank",rel:"noopener noreferrer"},D=e("Source From");function E(A,J){const a=t("ExternalLinkIcon"),c=t("CodeGroupItem"),r=t("CodeGroup");return u(),d(p,null,[h,_,k,b,n("p",null,[n("a",v,[g,s(a)]),f,n("a",y,[x,s(a)]),w]),j,n("ol",null,[n("li",null,[B,n("a",C,[I,s(a)]),F]),N]),S,s(r,null,{default:o(()=>[s(c,{title:"javascript",active:""},{default:o(()=>[G]),_:1})]),_:1}),V,n("p",null,[n("a",q,[D,s(a)])])],64)}var T=l(m,[["render",E],["__file","decimal-addition.html.vue"]]);export{T as default};
