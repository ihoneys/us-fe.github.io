import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";import{r as a,c as i,b as e,w as t,a as n,F as u,e as r,d as s,o as d}from"./app.22a70bca.js";const m={},k=r(`<h1 id="create-lazyman" tabindex="-1"><a class="header-anchor" href="#create-lazyman" aria-hidden="true">#</a> create LazyMan()</h1><h2 id="question" tabindex="-1"><a class="header-anchor" href="#question" aria-hidden="true">#</a> Question</h2><p><code>LazyMan</code> is very lazy, he only eats and sleeps.</p><p><code>LazyMan(name: string, logFn: (log: string) =&gt; void)</code> would output a message, the passed <code>logFn</code> is used.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">LazyMan</span><span class="token punctuation">(</span><span class="token string">&#39;Jack&#39;</span><span class="token punctuation">,</span> console<span class="token punctuation">.</span>log<span class="token punctuation">)</span>
<span class="token comment">// Hi, I&#39;m Jack.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>He can <code>eat(food: string)</code></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">LazyMan</span><span class="token punctuation">(</span><span class="token string">&#39;Jack&#39;</span><span class="token punctuation">,</span> console<span class="token punctuation">.</span>log<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token string">&#39;banana&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token string">&#39;apple&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// Hi, I&#39;m Jack.</span>
<span class="token comment">// Eat banana.</span>
<span class="token comment">// Eat Apple.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>He also <code>sleep(time: number)</code>, time is based on seconds.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">LazyMan</span><span class="token punctuation">(</span><span class="token string">&#39;Jack&#39;</span><span class="token punctuation">,</span> console<span class="token punctuation">.</span>log<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token string">&#39;banana&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token string">&#39;apple&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token comment">// Hi, I&#39;m Jack.</span>
<span class="token comment">// Eat banana.</span>
<span class="token comment">// (after 10 seconds)</span>
<span class="token comment">// Wake up after 10 seconds.</span>
<span class="token comment">// Eat Apple.</span>
<span class="token comment">// (after 1 second)</span>
<span class="token comment">// Wake up after 1 second.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>He can <code>sleepFirst(time: number)</code>, which has the highest priority among all tasks, no matter what the order is.</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">LazyMan</span><span class="token punctuation">(</span><span class="token string">&#39;Jack&#39;</span><span class="token punctuation">,</span> console<span class="token punctuation">.</span>log<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token string">&#39;banana&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sleepFirst</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">eat</span><span class="token punctuation">(</span><span class="token string">&#39;apple&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token comment">// (after 10 seconds)</span>
<span class="token comment">// Wake up after 10 seconds.</span>
<span class="token comment">// Hi, I&#39;m Jack.</span>
<span class="token comment">// Eat banana</span>
<span class="token comment">// Eat apple</span>
<span class="token comment">// (after 1 second)</span>
<span class="token comment">// Wake up after 1 second.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Please create such <code>LazyMan()</code></p><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2>`,13),v=n("div",{class:"language-javascript ext-js line-numbers-mode"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"// interface Laziness {"),s(`
`),n("span",{class:"token comment"},"//   sleep: (time: number) => Laziness"),s(`
`),n("span",{class:"token comment"},"//   sleepFirst: (time: number) => Laziness"),s(`
`),n("span",{class:"token comment"},"//   eat: (food: string) => Laziness"),s(`
`),n("span",{class:"token comment"},"// }"),s(`

`),n("span",{class:"token doc-comment comment"},[s(`/**
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("string"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"name"),s(`
 * `),n("span",{class:"token keyword"},"@param"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),n("span",{class:"token punctuation"},"("),s("log"),n("span",{class:"token operator"},":"),s(" string"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token keyword"},"void"),n("span",{class:"token punctuation"},"}")]),s(),n("span",{class:"token parameter"},"logFn"),s(`
 * `),n("span",{class:"token keyword"},"@returns"),s(),n("span",{class:"token class-name"},[n("span",{class:"token punctuation"},"{"),s("Laziness"),n("span",{class:"token punctuation"},"}")]),s(`
 */`)]),s(`
`),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"LazyMan"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("name"),n("span",{class:"token punctuation"},","),s(" logFn")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// your code here"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),b=n("h2",{id:"source",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#source","aria-hidden":"true"},"#"),s(" Source")],-1),g={href:"https://bigfrontend.dev/problem/create-lazyman",target:"_blank",rel:"noopener noreferrer"},h=s("Source From");function f(_,y){const c=a("CodeGroupItem"),o=a("CodeGroup"),p=a("ExternalLinkIcon");return d(),i(u,null,[k,e(o,null,{default:t(()=>[e(c,{title:"javascript",active:""},{default:t(()=>[v]),_:1})]),_:1}),b,n("p",null,[n("a",g,[h,e(p)])])],64)}var j=l(m,[["render",f],["__file","create-lazyman.html.vue"]]);export{j as default};
