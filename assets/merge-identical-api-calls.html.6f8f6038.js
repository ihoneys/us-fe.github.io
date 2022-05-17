import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{r as t,c as r,a as n,b as a,w as p,F as u,e as o,d as s,o as k}from"./app.22a70bca.js";const d={},m=o(`<h1 id="merge-identical-api-calls" tabindex="-1"><a class="header-anchor" href="#merge-identical-api-calls" aria-hidden="true">#</a> merge identical API calls</h1><h2 id="question" tabindex="-1"><a class="header-anchor" href="#question" aria-hidden="true">#</a> Question</h2><p>Suppose we have a utility function <code>getAPI()</code> which fetches data.</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> getAPI <span class="token operator">=</span>  <span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>
  path<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> 
  config<span class="token operator">:</span> SomeConfig
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> <span class="token operator">...</span> <span class="token punctuation">}</span>

<span class="token keyword">const</span> list1 <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getAPI</span><span class="token punctuation">(</span><span class="token string">&#39;/list&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> keyword<span class="token operator">:</span> <span class="token string">&#39;bfe&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> list2 <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">getAPI</span><span class="token punctuation">(</span><span class="token string">&#39;/list&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> keyword<span class="token operator">:</span> <span class="token string">&#39;dev&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>It works great. Util the UI become so complicated that same API might be called for multiple time within a relatively short period of time.</p><p>You want to avoid the unnecessary API calls, based on following assumption:</p><p><strong>GET API call response hardly changes within 1000ms.</strong></p>`,7),v=s("So identical GET API calls should return the same response within 1000ms. By "),h=n("strong",null,"identical",-1),g=s(", it means "),b=n("code",null,"path",-1),f=s(" and "),y=n("code",null,"config",-1),_=s(" are "),w={href:"https://bigfrontend.dev/problem/implement-deep-equal-isEqual",target:"_blank",rel:"noopener noreferrer"},I=s("deeply equal"),P=s("."),A=o(`<p>You create <code>getAPIWithMerging(path: string, config: SomeConfig)</code>, which works like following.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>
<span class="token function">getAPIWithMerging</span><span class="token punctuation">(</span><span class="token string">&#39;/list&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">keyword</span><span class="token operator">:</span> <span class="token string">&#39;bfe&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span>  
<span class="token comment">// 1st call,  this will call getAPI</span>

<span class="token function">getAPIWithMerging</span><span class="token punctuation">(</span><span class="token string">&#39;/list&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">keyword</span><span class="token operator">:</span> <span class="token string">&#39;bfe&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span> 
<span class="token comment">// 2nd call is identical to 1st call, </span>
<span class="token comment">// so getAPI is not called, </span>
<span class="token comment">// it resolves when 1st call resolves</span>

<span class="token function">getAPIWithMerging</span><span class="token punctuation">(</span><span class="token string">&#39;/list&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">keyword</span><span class="token operator">:</span> <span class="token string">&#39;dev&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span>
<span class="token comment">// 3rd call is not identical, so getAPI is called</span>

<span class="token comment">// after 1000ms</span>
<span class="token function">getAPIWithMerging</span><span class="token punctuation">(</span><span class="token string">&#39;/list&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">keyword</span><span class="token operator">:</span> <span class="token string">&#39;bfe&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span>
<span class="token comment">// 4th call is identical to 1st call, </span>
<span class="token comment">// but since after 1000ms, getAPI is called.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="attention-for-memory-leak" tabindex="-1"><a class="header-anchor" href="#attention-for-memory-leak" aria-hidden="true">#</a> Attention for memory leak!</h2><p>Your cache system should not bloat. For this problem, you should have 5 cache entries at maximum, which means:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">getAPIWithMerging</span><span class="token punctuation">(</span><span class="token string">&#39;/list1&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">keyword</span><span class="token operator">:</span> <span class="token string">&#39;bfe&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span> 
<span class="token comment">// 1st call, call callAPI(), add a cache entry</span>
<span class="token function">getAPIWithMerging</span><span class="token punctuation">(</span><span class="token string">&#39;/list2&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">keyword</span><span class="token operator">:</span> <span class="token string">&#39;bfe&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span> 
<span class="token comment">// 2nd call, call callAPI(), add a cache entry</span>
<span class="token function">getAPIWithMerging</span><span class="token punctuation">(</span><span class="token string">&#39;/list3&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">keyword</span><span class="token operator">:</span> <span class="token string">&#39;bfe&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span> 
<span class="token comment">// 3rd call, call callAPI(), add a cache entry</span>
<span class="token function">getAPIWithMerging</span><span class="token punctuation">(</span><span class="token string">&#39;/list4&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">keyword</span><span class="token operator">:</span> <span class="token string">&#39;bfe&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span> 
<span class="token comment">// 4th call, call callAPI(), add a cache entry</span>
<span class="token function">getAPIWithMerging</span><span class="token punctuation">(</span><span class="token string">&#39;/list5&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">keyword</span><span class="token operator">:</span> <span class="token string">&#39;bfe&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span> 
<span class="token comment">// 5th call, call callAPI(), add a cache entry</span>

<span class="token function">getAPIWithMerging</span><span class="token punctuation">(</span><span class="token string">&#39;/list6&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">keyword</span><span class="token operator">:</span> <span class="token string">&#39;bfe&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span> 
<span class="token comment">// 6th call, call callAPI(), add a cache entry</span>
<span class="token comment">// cache of 1st call is removed</span>

<span class="token function">getAPIWithMerging</span><span class="token punctuation">(</span><span class="token string">&#39;/list1&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">keyword</span><span class="token operator">:</span> <span class="token string">&#39;bfe&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token operator">...</span><span class="token punctuation">)</span> 
<span class="token comment">// identical with 1st call, but cache of 1st call is removed</span>
<span class="token comment">// new cache of entry is added</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="clear" tabindex="-1"><a class="header-anchor" href="#clear" aria-hidden="true">#</a> clear()</h2><p>For test purpose, please provide a clear method to clear all cache.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>getAPIWithMerging<span class="token punctuation">.</span><span class="token function">clearCache</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2>`,9),x=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// getAPI is bundled with your code, config will only be some plain objects."),s(`
`),n("span",{class:"token comment"},"// const getAPI = <T>(path: string, config: SomeConfig): Promise<T> => { ... }"),s(`


`),n("span",{class:"token comment"},"// you code here maybe, if you want some outer scope."),s(`

`),n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("string"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"path"),s(`
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("object"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"config"),s(`
 * only plain objects/array made up serializable primitives
 * `),n("span",{class:"token keyword"},"@returns"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("Promise"),n("span",{class:"token punctuation"},"<"),s("any"),n("span",{class:"token punctuation"},">"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"getAPIWithMerging"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("path"),n("span",{class:"token punctuation"},","),s(" config")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// your code here"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`

getAPIWithMerging`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function-variable function"},"clearCache"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
   `),n("span",{class:"token comment"},"// your code here"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),j=n("h2",{id:"source",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#source","aria-hidden":"true"},"#"),s(" Source")],-1),M={href:"https://bigfrontend.dev/problem/merge-identical-API-calls",target:"_blank",rel:"noopener noreferrer"},W=s("Source From");function C(S,T){const e=t("ExternalLinkIcon"),c=t("CodeGroupItem"),l=t("CodeGroup");return k(),r(u,null,[m,n("p",null,[v,h,g,b,f,y,_,n("a",w,[I,a(e)]),P]),A,a(l,null,{default:p(()=>[a(c,{title:"javascript",active:""},{default:p(()=>[x]),_:1})]),_:1}),j,n("p",null,[n("a",M,[W,a(e)])])],64)}var q=i(d,[["render",C],["__file","merge-identical-api-calls.html.vue"]]);export{q as default};
