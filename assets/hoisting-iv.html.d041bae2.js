import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{r as e,c as t,a as n,b as o,F as c,e as i,d as p,o as l}from"./app.22a70bca.js";const r={},u=i(`<h1 id="hoisting-iv" tabindex="-1"><a class="header-anchor" href="#hoisting-iv" aria-hidden="true">#</a> Hoisting IV</h1><h2 id="question" tabindex="-1"><a class="header-anchor" href="#question" aria-hidden="true">#</a> Question</h2><p>What does the code snippet to the right output by <code>console.log</code>?</p><h2 id="snippet" tabindex="-1"><a class="header-anchor" href="#snippet" aria-hidden="true">#</a> Snippet</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> foo <span class="token operator">=</span> <span class="token number">10</span>
<span class="token keyword">function</span> <span class="token function">func1</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span>
    <span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
<span class="token function">func1</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token keyword">function</span> <span class="token function">func2</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span>
    <span class="token keyword">let</span> foo <span class="token operator">=</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
<span class="token function">func2</span> <span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="source" tabindex="-1"><a class="header-anchor" href="#source" aria-hidden="true">#</a> Source</h2>`,6),d={href:"https://bigfrontend.dev/quiz/Hoisting-IV",target:"_blank",rel:"noopener noreferrer"},k=p("Source From");function h(v,f){const s=e("ExternalLinkIcon");return l(),t(c,null,[u,n("p",null,[n("a",d,[k,o(s)])])],64)}var _=a(r,[["render",h],["__file","hoisting-iv.html.vue"]]);export{_ as default};