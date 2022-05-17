import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{r as e,c as r,a as n,b as s,w as c,F as u,d as a,e as o,o as d}from"./app.22a70bca.js";const k={},m=n("h1",{id:"implement-async-helper-parallel",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#implement-async-helper-parallel","aria-hidden":"true"},"#"),a(" implement async helper - "),n("code",null,"parallel()")],-1),v=n("h2",{id:"question",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#question","aria-hidden":"true"},"#"),a(" Question")],-1),b=a("This problem is related to "),h={href:"https://bigfrontend.dev/problem/implement-async-helper-sequence",target:"_blank",rel:"noopener noreferrer"},y=a("29. implement async helper - "),f=n("code",null,"sequence()",-1),_=a("."),g=o(`<p>You are asked to implement an async function helper, <code>parallel()</code> which works like <code>Promise.all()</code>. Different from <code>sequence()</code>, the async function doesn&#39;t wait for each other, rather they are all triggered together.</p><p>All async functions have following interface</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">Callback</span> <span class="token operator">=</span> <span class="token punctuation">(</span>error<span class="token operator">:</span> Error<span class="token punctuation">,</span> data<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>

<span class="token keyword">type</span> <span class="token class-name">AsyncFunc</span> <span class="token operator">=</span> <span class="token punctuation">(</span>
   callback<span class="token operator">:</span> Callback<span class="token punctuation">,</span>
   data<span class="token operator">:</span> <span class="token builtin">any</span>
<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token keyword">void</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Your <code>parallel()</code> should <strong>accept AsyncFunc array</strong>, and return a new function which triggers its own callback when all async functions are done or an error occurs.</p><p>Suppose we have an 3 async functions</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">async1</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">callback</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
   <span class="token function">callback</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">async2</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">callback</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
   <span class="token function">callback</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">async3</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">callback</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
   <span class="token function">callback</span><span class="token punctuation">(</span><span class="token keyword">undefined</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Your <code>parallel()</code> should be able to accomplish this</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> all <span class="token operator">=</span> <span class="token function">parallel</span><span class="token punctuation">(</span>
  <span class="token punctuation">[</span>
    async1<span class="token punctuation">,</span>
    async2<span class="token punctuation">,</span>
    async3
  <span class="token punctuation">]</span>
<span class="token punctuation">)</span>

<span class="token function">all</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">error<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
   console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span> <span class="token comment">// [1, 2, 3]</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When error occurs, only first error is passed down to the last. Later errors or data are ignored.</p><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2>`,10),w=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},`/*
type Callback = (error: Error, data: any) => void

type AsyncFunc = (
   callback: Callback,
   data: any
) => void

*/`),a(`

`),n("span",{class:"token doc-comment comment"},[a(`/**
 * `),n("span",{class:"token keyword"},"@param"),a(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),a("AsyncFunc"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),a(),n("span",{class:"token parameter"},"funcs"),a(`
 * `),n("span",{class:"token keyword"},"@return"),a(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"("),a("callback"),n("span",{class:"token operator"},":"),a(" Callback"),n("span",{class:"token punctuation"},")"),a(),n("span",{class:"token operator"},"=>"),a(),n("span",{class:"token keyword"},"void"),n("span",{class:"token punctuation"},"}")]),a(`
 */`)]),a(`
`),n("span",{class:"token keyword"},"function"),a(),n("span",{class:"token function"},"parallel"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"funcs"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),a(`
  `),n("span",{class:"token comment"},"// your code here"),a(`
`),n("span",{class:"token punctuation"},"}"),a(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),x=o('<h2 id="related" tabindex="-1"><a class="header-anchor" href="#related" aria-hidden="true">#</a> Related</h2><ul><li><a href="./implement-async-helper-sequence">implement async helper - <code>sequence()</code></a></li><li><a href="./implement-async-helper-race">implement async helper - <code>race()</code></a></li></ul><h2 id="source" tabindex="-1"><a class="header-anchor" href="#source" aria-hidden="true">#</a> Source</h2>',3),C={href:"https://bigfrontend.dev/problem/implement-async-helper-parallel",target:"_blank",rel:"noopener noreferrer"},j=a("Source From");function q(F,A){const t=e("ExternalLinkIcon"),l=e("CodeGroupItem"),p=e("CodeGroup");return d(),r(u,null,[m,v,n("p",null,[b,n("a",h,[y,f,s(t)]),_]),g,s(p,null,{default:c(()=>[s(l,{title:"javascript",active:""},{default:c(()=>[w]),_:1})]),_:1}),x,n("p",null,[n("a",C,[j,s(t)])])],64)}var I=i(k,[["render",q],["__file","implement-async-helper-parallel.html.vue"]]);export{I as default};
