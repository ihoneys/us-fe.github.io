import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{r as s,c as l,b as a,w as t,a as n,F as p,e as u,d as e,o as d}from"./app.22a70bca.js";const m={},h=u(`<h1 id="remove-characters" tabindex="-1"><a class="header-anchor" href="#remove-characters" aria-hidden="true">#</a> remove characters</h1><h2 id="question" tabindex="-1"><a class="header-anchor" href="#question" aria-hidden="true">#</a> Question</h2><p>Given a string contaning only <code>a</code>, <code>b</code> and <code>c</code>, remove all <code>b</code> and <code>ac</code>.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token function">removeChars</span><span class="token punctuation">(</span><span class="token string">&#39;ab&#39;</span><span class="token punctuation">)</span> <span class="token comment">// &#39;a&#39;</span>
<span class="token function">removeChars</span><span class="token punctuation">(</span><span class="token string">&#39;abc&#39;</span><span class="token punctuation">)</span> <span class="token comment">// &#39;&#39;</span>
<span class="token function">removeChars</span><span class="token punctuation">(</span><span class="token string">&#39;cabbaabcca&#39;</span><span class="token punctuation">)</span> <span class="token comment">// &#39;caa&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>What is the time and space complexity of your approach?</p></blockquote><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2>`,6),k=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[e(`/**
 * `),n("span",{class:"token keyword"},"@param"),e(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),e("string"),n("span",{class:"token punctuation"},"}")]),e(),n("span",{class:"token parameter"},"input"),e(`
 * `),n("span",{class:"token keyword"},"@returns"),e(` string
 */`)]),e(`
`),n("span",{class:"token keyword"},"function"),e(),n("span",{class:"token function"},"removeChars"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"input"),n("span",{class:"token punctuation"},")"),e(),n("span",{class:"token punctuation"},"{"),e(`
  `),n("span",{class:"token comment"},"// your code here"),e(`
`),n("span",{class:"token punctuation"},"}"),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),v=n("pre",null,[n("code",null,`::: code-group-item typescript
`)],-1),b=n("div",{class:"language-typescript ext-ts line-numbers-mode"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"function"),e(),n("span",{class:"token function"},"removeChars"),n("span",{class:"token punctuation"},"("),e("input"),n("span",{class:"token operator"},":"),e(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),e(),n("span",{class:"token builtin"},"string"),e(),n("span",{class:"token punctuation"},"{"),e(`
  `),n("span",{class:"token comment"},"// your code here"),e(`
`),n("span",{class:"token punctuation"},"}"),e(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=n("p",null,":::",-1),f=n("h2",{id:"source",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#source","aria-hidden":"true"},"#"),e(" Source")],-1),g={href:"https://bigfrontend.dev/problem/remove-characters",target:"_blank",rel:"noopener noreferrer"},x=e("Source From");function y(C,w){const o=s("CodeGroupItem"),c=s("CodeGroup"),r=s("ExternalLinkIcon");return d(),l(p,null,[h,a(c,null,{default:t(()=>[a(o,{title:"javascript",active:""},{default:t(()=>[k]),_:1}),v,b,_]),_:1}),f,n("p",null,[n("a",g,[x,a(r)])])],64)}var q=i(m,[["render",y],["__file","remove-characters.html.vue"]]);export{q as default};