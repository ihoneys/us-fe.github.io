import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";import{r as e,c as u,a as n,b as a,w as o,F as r,d as s,e as p,o as d}from"./app.22a70bca.js";const k={},m=n("h1",{id:"implement-basic-debounce",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#implement-basic-debounce","aria-hidden":"true"},"#"),s(" implement basic debounce()")],-1),b=n("h2",{id:"question",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#question","aria-hidden":"true"},"#"),s(" Question")],-1),h=s("Debounce is a common technique used in Web Application, in most cases using "),v={href:"https://lodash.com/docs/4.17.15#debounce",target:"_blank",rel:"noopener noreferrer"},g=s("lodash solution"),f=s(" would be a good choice."),_=p(`<p>could you implement your own version of basic <code>debounce()</code>?</p><p>In case you forgot, <code>debounce(func, delay)</code> will returned a debounced function, which delays the invoke.</p><p>Here is an example.</p><p>Before debouncing we have a series of calling like</p><p>\u2500A\u2500B\u2500C\u2500 \u2500D\u2500 \u2500 \u2500 \u2500 \u2500 \u2500E\u2500 \u2500F\u2500G</p><p>After debouncing at wait time of 3 dashes</p><p>\u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 D \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 \u2500 G</p><p><strong>notes</strong></p><ol><li><p>please follow above spec. the behavior might not be exactly the same as <code>lodash.debounce()</code></p></li><li><p>because <code>window.setTimeout</code> and <code>window.clearTimeout</code> are not accurate in browser environment, they are replaced to other implementation when judging your code. They still have the same interface, and internally keep track of the timing for testing purpose.</p></li></ol><p>Something like below will be used to do the test.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> currentTime <span class="token operator">=</span> <span class="token number">0</span>

<span class="token keyword">const</span> <span class="token function-variable function">run</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">input</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  currentTime <span class="token operator">=</span> <span class="token number">0</span>
  <span class="token keyword">const</span> calls <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

  <span class="token keyword">const</span> <span class="token function-variable function">func</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arg</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
     calls<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>arg<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">@</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>currentTime<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">const</span> debounced <span class="token operator">=</span> <span class="token function">debounce</span><span class="token punctuation">(</span>func<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>
  input<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">call</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
     <span class="token keyword">const</span> <span class="token punctuation">[</span>arg<span class="token punctuation">,</span> time<span class="token punctuation">]</span> <span class="token operator">=</span> call<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;@&#39;</span><span class="token punctuation">)</span>
     <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token function">debounced</span><span class="token punctuation">(</span>arg<span class="token punctuation">)</span><span class="token punctuation">,</span> time<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> calls
<span class="token punctuation">}</span>

<span class="token function">expect</span><span class="token punctuation">(</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;A@0&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;B@2&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;C@3&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toEqual</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;C@5&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2>`,12),w=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"..."),s("args"),n("span",{class:"token operator"},":"),s(" any"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" any"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"func"),s(`
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("number"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"wait"),s(`
 * `),n("span",{class:"token keyword"},"@returns"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"..."),s("args"),n("span",{class:"token operator"},":"),s(" any"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" any"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"debounce"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("func"),n("span",{class:"token punctuation"},","),s(" wait")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// your code here"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=n("pre",null,[n("code",null,`::: code-group-item typescript
`)],-1),x=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"function"),s(" debounce"),n("span",{class:"token operator"},"<"),n("span",{class:"token constant"},"T"),s(),n("span",{class:"token keyword"},"extends"),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token operator"},"..."),s("args"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"any"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token builtin"},"any"),n("span",{class:"token operator"},">"),n("span",{class:"token punctuation"},"("),s("func"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token constant"},"T"),n("span",{class:"token punctuation"},","),s(" wait"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"number"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token constant"},"T"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// your code here"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),T=n("p",null,":::",-1),C=p('<h2 id="related" tabindex="-1"><a class="header-anchor" href="#related" aria-hidden="true">#</a> Related</h2><ul><li><a href="./implement-basic-throttle">implement basic throttle()</a></li><li><a href="./implement-throttle-with-leading-and-trailing-option">implement throttle() with leading &amp; trailing option</a></li><li><a href="./implement-debounce-with-leading-and-trailing-option">implement debounce() with leading &amp; trailing option</a></li></ul><h2 id="source" tabindex="-1"><a class="header-anchor" href="#source" aria-hidden="true">#</a> Source</h2>',3),j={href:"https://bigfrontend.dev/problem/implement-basic-debounce",target:"_blank",rel:"noopener noreferrer"},B=s("Source From");function E(G,I){const t=e("ExternalLinkIcon"),c=e("CodeGroupItem"),i=e("CodeGroup");return d(),u(r,null,[m,b,n("p",null,[h,n("a",v,[g,a(t)]),f]),_,a(i,null,{default:o(()=>[a(c,{title:"javascript",active:""},{default:o(()=>[w]),_:1}),y,x,T]),_:1}),C,n("p",null,[n("a",j,[B,a(t)])])],64)}var D=l(k,[["render",E],["__file","implement-basic-debounce.html.vue"]]);export{D as default};