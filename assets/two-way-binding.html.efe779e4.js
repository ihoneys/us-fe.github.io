import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";import{r as a,c as i,b as e,w as t,a as n,F as u,e as r,d as s,o as d}from"./app.22a70bca.js";const k={},m=r(`<h1 id="two-way-binding" tabindex="-1"><a class="header-anchor" href="#two-way-binding" aria-hidden="true">#</a> Two-way binding</h1><h2 id="question" tabindex="-1"><a class="header-anchor" href="#question" aria-hidden="true">#</a> Question</h2><p>Let&#39;s do some simple two-way binding.</p><p>Please create a function <code>model(state, element)</code>, to bind <code>state.value</code> to the HTMLInputElement <code>element</code>.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> input <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;input&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;BFE&#39;</span> <span class="token punctuation">}</span>
<span class="token function">model</span><span class="token punctuation">(</span>state<span class="token punctuation">,</span> input<span class="token punctuation">)</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>input<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token comment">// &#39;BFE&#39;</span>
state<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&#39;dev&#39;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>input<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token comment">// &#39;dev&#39;</span>
input<span class="token punctuation">.</span>value <span class="token operator">=</span> <span class="token string">&#39;BFE.dev&#39;</span>
input<span class="token punctuation">.</span><span class="token function">dispatchEvent</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Event</span><span class="token punctuation">(</span><span class="token string">&#39;change&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>state<span class="token punctuation">.</span>value<span class="token punctuation">)</span> <span class="token comment">// &#39;BFE.dev&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2>`,6),v=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"{"),s("value"),n("span",{class:"token operator"},":"),s(" string"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"state"),s(`
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("HTMLInputElement"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"element"),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"model"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("state"),n("span",{class:"token punctuation"},","),s(" element")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// your code here"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),h=n("pre",null,[n("code",null,`::: code-group-item typescript:active
`)],-1),b=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"model"),n("span",{class:"token punctuation"},"("),s("state"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token punctuation"},"{"),s("value"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},","),s(" element"),n("span",{class:"token operator"},":"),s(" HTMLInputElement"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// your code here"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=n("p",null,":::",-1),g=n("h2",{id:"source",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#source","aria-hidden":"true"},"#"),s(" Source")],-1),f={href:"https://bigfrontend.dev/problem/two-way-binding",target:"_blank",rel:"noopener noreferrer"},w=s("Source From");function y(x,E){const o=a("CodeGroupItem"),c=a("CodeGroup"),p=a("ExternalLinkIcon");return d(),i(u,null,[m,e(c,null,{default:t(()=>[e(o,{title:"javascript"},{default:t(()=>[v]),_:1}),h,b,_]),_:1}),g,n("p",null,[n("a",f,[w,e(p)])])],64)}var C=l(k,[["render",y],["__file","two-way-binding.html.vue"]]);export{C as default};
