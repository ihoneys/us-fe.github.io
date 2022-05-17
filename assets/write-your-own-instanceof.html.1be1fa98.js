import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";import{r as e,c as i,a as n,b as a,w as o,F as u,d as s,e as r,o as d}from"./app.22a70bca.js";const k={},m=n("h1",{id:"write-your-own-instanceof",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#write-your-own-instanceof","aria-hidden":"true"},"#"),s(" write your own "),n("code",null,"instanceof")],-1),v=n("h2",{id:"question",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#question","aria-hidden":"true"},"#"),s(" Question")],-1),f=s("Do you know how "),b={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof",target:"_blank",rel:"noopener noreferrer"},h=s("instanceOf"),_=s(" works ?"),w=r(`<p>If so, please write you own <code>myInstanceOf()</code>.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">B</span> <span class="token keyword">extends</span> <span class="token class-name">A</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">B</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">myInstanceOf</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> <span class="token constant">B</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
<span class="token function">myInstanceOf</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> <span class="token constant">A</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
<span class="token function">myInstanceOf</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> Object<span class="token punctuation">)</span> <span class="token comment">// true</span>

<span class="token keyword">function</span> <span class="token constant">C</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token function">myInstanceOf</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> <span class="token constant">C</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
<span class="token class-name">C</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token class-name">B</span><span class="token punctuation">.</span>prototype
<span class="token function">myInstanceOf</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> <span class="token constant">C</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
<span class="token class-name">C</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token function">myInstanceOf</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> <span class="token constant">C</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2>`,3),y=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("any"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"obj"),s(`
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("target"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"target"),s(`
 * `),n("span",{class:"token keyword"},"@return"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("boolean"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"myInstanceOf"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("obj"),n("span",{class:"token punctuation"},","),s(" target")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// your code here"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=n("h2",{id:"source",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#source","aria-hidden":"true"},"#"),s(" Source")],-1),x={href:"https://bigfrontend.dev/problem/write-your-own-instanceof",target:"_blank",rel:"noopener noreferrer"},I=s("Source From");function C(O,j){const t=e("ExternalLinkIcon"),c=e("CodeGroupItem"),p=e("CodeGroup");return d(),i(u,null,[m,v,n("p",null,[f,n("a",b,[h,a(t)]),_]),w,a(p,null,{default:o(()=>[a(c,{title:"javascript",active:""},{default:o(()=>[y]),_:1})]),_:1}),g,n("p",null,[n("a",x,[I,a(t)])])],64)}var G=l(k,[["render",C],["__file","write-your-own-instanceof.html.vue"]]);export{G as default};
