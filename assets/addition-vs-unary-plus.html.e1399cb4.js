import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{r as e,c as p,a as n,b as o,F as c,d as s,e as l,o as u}from"./app.22a70bca.js";const i={},r=n("h1",{id:"addition-vs-unary-plus",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#addition-vs-unary-plus","aria-hidden":"true"},"#"),s(" Addition vs Unary Plus")],-1),k=n("h2",{id:"question",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#question","aria-hidden":"true"},"#"),s(" Question")],-1),d=n("p",null,[s("What does the code snippet to the right output by "),n("code",null,"console.log"),s("?")],-1),v=s("There is a difference between "),h={href:"https://tc39.es/ecma262/#sec-addition-operator-plus",target:"_blank",rel:"noopener noreferrer"},m=s("Addition Operator(+)"),b=s(" and "),f={href:"https://tc39.es/ecma262/#sec-unary-plus-operator",target:"_blank",rel:"noopener noreferrer"},g=s("Unary plus operator(+)"),_=s(", even though they use the same '+'."),y=l(`<h2 id="snippet" tabindex="-1"><a class="header-anchor" href="#snippet" aria-hidden="true">#</a> Snippet</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">+</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">+</span> <span class="token operator">+</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">+</span> <span class="token string">&#39;2&#39;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">+</span> <span class="token operator">+</span> <span class="token string">&#39;2&#39;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;1&#39;</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;1&#39;</span> <span class="token operator">+</span> <span class="token operator">+</span> <span class="token number">2</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">+</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">+</span> <span class="token operator">+</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;1&#39;</span> <span class="token operator">+</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;1&#39;</span> <span class="token operator">+</span> <span class="token operator">+</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">+</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">+</span> <span class="token operator">+</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;1&#39;</span> <span class="token operator">+</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;1&#39;</span> <span class="token operator">+</span> <span class="token operator">+</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">+</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">+</span> <span class="token operator">+</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;1&#39;</span> <span class="token operator">+</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;1&#39;</span> <span class="token operator">+</span> <span class="token operator">+</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;1&#39;</span> <span class="token operator">+</span> <span class="token operator">+</span> <span class="token operator">+</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="source" tabindex="-1"><a class="header-anchor" href="#source" aria-hidden="true">#</a> Source</h2>`,3),x={href:"https://bigfrontend.dev/quiz/Addition-vs-Unary-Plus",target:"_blank",rel:"noopener noreferrer"},w=s("Source From");function V(N,S){const a=e("ExternalLinkIcon");return u(),p(c,null,[r,k,d,n("p",null,[v,n("a",h,[m,o(a)]),b,n("a",f,[g,o(a)]),_]),y,n("p",null,[n("a",x,[w,o(a)])])],64)}var q=t(i,[["render",V],["__file","addition-vs-unary-plus.html.vue"]]);export{q as default};