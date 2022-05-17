import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";import{r as a,c as p,b as e,w as t,a as n,F as r,e as d,d as s,o as u}from"./app.22a70bca.js";const h={},m=d(`<h1 id="highlight-keywords-in-html-string" tabindex="-1"><a class="header-anchor" href="#highlight-keywords-in-html-string" aria-hidden="true">#</a> highlight keywords in HTML string</h1><h2 id="question" tabindex="-1"><a class="header-anchor" href="#question" aria-hidden="true">#</a> Question</h2><p>Suppose you are implementing an auto-complete in search input.</p><p>When keywords are typed, you need to <strong>highlight the keywords</strong>, how would you do that?</p><p>To simplify things, you need to create a function <code>highlightKeywords(html:string, keywords: string[])</code>, which wraps the keywords in html string, with <code>&lt;em&gt;</code> tag.</p><p>Here is an example.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">highlightKeywords</span><span class="token punctuation">(</span>
  <span class="token string">&#39;Hello FrontEnd Lovers&#39;</span><span class="token punctuation">,</span> 
  <span class="token punctuation">[</span><span class="token string">&#39;Hello&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Front&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;JavaScript&#39;</span><span class="token punctuation">]</span>
<span class="token punctuation">)</span>
<span class="token comment">// &#39;&lt;em&gt;Hello&lt;/em&gt; &lt;em&gt;Front&lt;/em&gt;End Lovers&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Pay attention to the overlapping and adjacent case. You should use the least tags as possible.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">highlightKeywords</span><span class="token punctuation">(</span>
  <span class="token string">&#39;Hello FrontEnd Lovers&#39;</span><span class="token punctuation">,</span> 
  <span class="token punctuation">[</span><span class="token string">&#39;Front&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;End&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;JavaScript&#39;</span><span class="token punctuation">]</span>
<span class="token punctuation">)</span>
<span class="token comment">// &#39;Hello &lt;em&gt;FrontEnd&lt;/em&gt; Lovers&#39;</span>

<span class="token function">highlightKeywords</span><span class="token punctuation">(</span>
  <span class="token string">&#39;Hello FrontEnd Lovers&#39;</span><span class="token punctuation">,</span> 
  <span class="token punctuation">[</span><span class="token string">&#39;Front&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;FrontEnd&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;JavaScript&#39;</span><span class="token punctuation">]</span>
<span class="token punctuation">)</span>
<span class="token comment">// &#39;Hello &lt;em&gt;FrontEnd&lt;/em&gt; Lovers&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>note that <code>space</code> should not be included.</p><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2>`,11),k=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("string"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"html"),s(`
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("string"),n("span",{class:"token punctuation"},"["),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"keywords"),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"highlightKeywords"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("html"),n("span",{class:"token punctuation"},","),s(" keywords")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// your code here"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=n("h2",{id:"source",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#source","aria-hidden":"true"},"#"),s(" Source")],-1),v={href:"https://bigfrontend.dev/problem/highlight-keywords-in-HTML-string",target:"_blank",rel:"noopener noreferrer"},b=s("Source From");function _(y,w){const o=a("CodeGroupItem"),i=a("CodeGroup"),c=a("ExternalLinkIcon");return u(),p(r,null,[m,e(i,null,{default:t(()=>[e(o,{title:"javascript",active:""},{default:t(()=>[k]),_:1})]),_:1}),g,n("p",null,[n("a",v,[b,e(c)])])],64)}var F=l(h,[["render",_],["__file","highlight-keywords-in-html-string.html.vue"]]);export{F as default};
