import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";import{r as t,c as r,a as n,b as a,w as o,F as u,d as s,e as p,o as d}from"./app.22a70bca.js";const k={},m=n("h1",{id:"implement-completeassign",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#implement-completeassign","aria-hidden":"true"},"#"),s(" implement completeAssign()")],-1),v=n("h2",{id:"question",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#question","aria-hidden":"true"},"#"),s(" Question")],-1),b=s("This is a follow-up on "),h={href:"https://bigfrontend.dev/problem/implement-object-assign",target:"_blank",rel:"noopener noreferrer"},_=s("26. implement Object.assign()"),f=s("."),g=p(`<p><code>Object.assign()</code> assigns the enumerable properties, so getters are not copied, non-enumerable properties are ignored.</p><p>Suppose we have following source object.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> source <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token comment">// prototype</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
      <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// enumerable data descriptor</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">c</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token comment">// non-enumerable data descriptor</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">d</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// non-enumerable accessor descriptor </span>
      <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_d<span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>_d <span class="token operator">=</span> value
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">e</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// enumerable accessor descriptor </span>
      <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>_e<span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">value</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>_e <span class="token operator">=</span> value
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If we call <code>Object.assign()</code> with source of above, we get:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>
Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> source<span class="token punctuation">)</span>

<span class="token comment">// {b: 4, e: undefined}</span>
<span class="token comment">// e is undefined because \`this._e\` is undefined</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Rather than above result, could you implement a <code>completeAssign()</code> which have the same parameters as <code>Object.assign()</code> but fully copies the data descriptors and accessor descriptors?</p>`,6),y=s("In case you are not familiar with the descriptors, "),w={href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty",target:"_blank",rel:"noopener noreferrer"},j=s("this page from MDN"),x=s(" might help."),O=n("p",null,"This problem is solely checking your understanding of how property descriptors work.",-1),C=n("p",null,"Good luck",-1),G=n("h2",{id:"code",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#code","aria-hidden":"true"},"#"),s(" Code")],-1),I=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"completeAssign"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("target"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token operator"},"..."),s("sources")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// your code here"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),S=p('<h2 id="related" tabindex="-1"><a class="header-anchor" href="#related" aria-hidden="true">#</a> Related</h2><ul><li><a href="./implement-object-assign">implement Object.assign()</a></li></ul><h2 id="source" tabindex="-1"><a class="header-anchor" href="#source" aria-hidden="true">#</a> Source</h2>',3),N={href:"https://bigfrontend.dev/problem/implement-completeAssign",target:"_blank",rel:"noopener noreferrer"},A=s("Source From");function V(B,E){const e=t("ExternalLinkIcon"),c=t("CodeGroupItem"),i=t("CodeGroup");return d(),r(u,null,[m,v,n("p",null,[b,n("a",h,[_,a(e)]),f]),g,n("p",null,[y,n("a",w,[j,a(e)]),x]),O,C,G,a(i,null,{default:o(()=>[a(c,{title:"javascript",active:""},{default:o(()=>[I]),_:1})]),_:1}),S,n("p",null,[n("a",N,[A,a(e)])])],64)}var T=l(k,[["render",V],["__file","implement-completeassign.html.vue"]]);export{T as default};
