import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";import{r as t,c as r,a as n,b as a,w as o,F as u,d as s,e as p,o as d}from"./app.22a70bca.js";const k={},m=n("h1",{id:"serialize-and-deserialize-data-types-not-supported-in-json",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#serialize-and-deserialize-data-types-not-supported-in-json","aria-hidden":"true"},"#"),s(" serialize and deserialize data types not supported in JSON")],-1),b=n("h2",{id:"question",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#question","aria-hidden":"true"},"#"),s(" Question")],-1),v=s("Obviously, "),h={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse",target:"_blank",rel:"noopener noreferrer"},_=s("JSON.parse()"),f=s(" and "),y={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify",target:"_blank",rel:"noopener noreferrer"},g=s("JSON.stringify()"),S=s(" are unable to handle data types that are not supported in JSON."),N=p(`<div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span>a<span class="token operator">:</span><span class="token number">1n</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// Error</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Also <code>undefined</code> is ignored in object properties or changed to <code>null</code>.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token keyword">undefined</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// &quot;[null]&quot;</span>
<span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span>a<span class="token operator">:</span> <span class="token keyword">undefined</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// &quot;{}&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>NaN</code> and <code>Infinity</code> are also treated as <code>null</code></p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">NaN</span><span class="token punctuation">,</span> <span class="token number">Infinity</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// &quot;[null,null]&quot;</span>
<span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span>a<span class="token operator">:</span> <span class="token number">NaN</span><span class="token punctuation">,</span> b<span class="token operator">:</span><span class="token number">Infinity</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// &quot;{&quot;a&quot;:null,&quot;b&quot;:null}&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,5),z=s("for more info, please refer to "),w={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#description",target:"_blank",rel:"noopener noreferrer"},x=s("MDN"),O=s("."),J=p(`<p>But sometimes we might want to be able to serialize these data types.</p><p><strong>Now please implement functions to serialize and deserialize following data types:</strong></p><ol><li>primitives (symbol is exluded)</li><li>object literals</li><li>array</li></ol><p>Object literals and arrays are consisting of primitives and might be nested</p><p>Code below is expected to work:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token function">parse</span><span class="token punctuation">(</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token number">1n</span><span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">,</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token number">NaN</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// [1n, null, undefined, NaN]</span>
<span class="token function">parse</span><span class="token punctuation">(</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span>a<span class="token operator">:</span> <span class="token keyword">undefined</span><span class="token punctuation">,</span> b<span class="token operator">:</span> <span class="token number">NaN</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token comment">// {a: undefined, b: NaN}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>You can use JSON.stringify() and JSON.parse() in your code or write your own.</p><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2>`,8),q=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * type SerializablePrimitives = undefined | null | number | string | bigint | boolean

  * type Serializable = `),n("span",{class:"token punctuation"},"{"),s(`
    [index: string]: Serializable
  `),n("span",{class:"token punctuation"},"}"),s(` | Serializable[] | SerializablePrimitives
*/`)]),s(`

`),n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@params"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("Serializable"),n("span",{class:"token punctuation"},"}")]),s(` data
 * `),n("span",{class:"token keyword"},"@returns"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("string"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"stringify"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"data"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// your code here"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@params"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("string"),n("span",{class:"token punctuation"},"}")]),s(` data
 * `),n("span",{class:"token keyword"},"@returns"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("Serializable"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"const"),s(),n("span",{class:"token function-variable function"},"parse"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"data"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// your code here"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),j=n("pre",null,[n("code",null,`::: code-group-item typescript:active
`)],-1),C=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token class-name"},"SerializablePrimitives"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"undefined"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token keyword"},"null"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token builtin"},"number"),s(),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token builtin"},"string"),s(),n("span",{class:"token operator"},"|"),s(" bigint "),n("span",{class:"token operator"},"|"),s(),n("span",{class:"token builtin"},"boolean"),s(`

`),n("span",{class:"token keyword"},"type"),s(),n("span",{class:"token class-name"},"Serializable"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token punctuation"},"["),s("index"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token operator"},":"),s(` Serializable
`),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token operator"},"|"),s(" Serializable"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"|"),s(` SerializablePrimitives

`),n("span",{class:"token keyword"},"const"),s(" stringify "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),s("data"),n("span",{class:"token operator"},":"),s(" Serializable"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// your code here"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

`),n("span",{class:"token keyword"},"const"),s(" parse "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),s("data"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(" Serializable "),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// your code here"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),I=n("p",null,":::",-1),G=n("h2",{id:"source",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#source","aria-hidden":"true"},"#"),s(" Source")],-1),B={href:"https://bigfrontend.dev/problem/serialize-and-deserialize-data-types-not-supported-in-JSON",target:"_blank",rel:"noopener noreferrer"},E=s("Source From");function P(V,D){const e=t("ExternalLinkIcon"),c=t("CodeGroupItem"),i=t("CodeGroup");return d(),r(u,null,[m,b,n("p",null,[v,n("a",h,[_,a(e)]),f,n("a",y,[g,a(e)]),S]),N,n("p",null,[z,n("a",w,[x,a(e)]),O]),J,a(i,null,{default:o(()=>[a(c,{title:"javascript"},{default:o(()=>[q]),_:1}),j,C,I]),_:1}),G,n("p",null,[n("a",B,[E,a(e)])])],64)}var U=l(k,[["render",P],["__file","serialize-and-deserialize-data-types-not-supported-in-json.html.vue"]]);export{U as default};