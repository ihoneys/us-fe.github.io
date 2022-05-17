import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";import{r as t,c as e,a as n,b as p,F as o,e as c,d as l,o as i}from"./app.22a70bca.js";const r={},u=c(`<h1 id="react-re-render-6-context" tabindex="-1"><a class="header-anchor" href="#react-re-render-6-context" aria-hidden="true">#</a> React re-render 6 - Context</h1><h2 id="question" tabindex="-1"><a class="header-anchor" href="#question" aria-hidden="true">#</a> Question</h2><p>What does the code snippet to the right output by <code>console.log</code>?</p><h2 id="snippet" tabindex="-1"><a class="header-anchor" href="#snippet" aria-hidden="true">#</a> Snippet</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">import</span> React<span class="token punctuation">,</span> <span class="token punctuation">{</span> useState<span class="token punctuation">,</span> createContext<span class="token punctuation">,</span> useEffect<span class="token punctuation">,</span> useContext<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;react&#39;</span>
<span class="token keyword">import</span> ReactDOM <span class="token keyword">from</span> <span class="token string">&#39;react-dom&#39;</span>

<span class="token keyword">const</span> MyContext <span class="token operator">=</span> <span class="token function">createContext</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token constant">B</span><span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>children<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> count <span class="token operator">=</span> <span class="token function">useContext</span><span class="token punctuation">(</span>MyContext<span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;B&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> children
<span class="token punctuation">}</span>

<span class="token keyword">const</span> <span class="token function-variable function">A</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">{</span>children<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">[</span>state<span class="token punctuation">,</span> setState<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">useState</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;A&#39;</span><span class="token punctuation">)</span>
  <span class="token function">useEffect</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">setState</span><span class="token punctuation">(</span><span class="token parameter">state</span> <span class="token operator">=&gt;</span> state <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span>MyContext<span class="token punctuation">.</span>Provider value<span class="token operator">=</span><span class="token punctuation">{</span>state<span class="token punctuation">}</span><span class="token operator">&gt;</span>
    <span class="token punctuation">{</span>children<span class="token punctuation">}</span>
  <span class="token operator">&lt;</span><span class="token operator">/</span>MyContext<span class="token punctuation">.</span>Provider<span class="token operator">&gt;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token constant">C</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;C&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token constant">D</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;D&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token keyword">null</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">App</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;App&#39;</span><span class="token punctuation">)</span>
  <span class="token keyword">return</span> <span class="token operator">&lt;</span><span class="token constant">A</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token constant">B</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token constant">C</span><span class="token operator">/</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span><span class="token constant">B</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token constant">D</span><span class="token operator">/</span><span class="token operator">&gt;</span><span class="token operator">&lt;</span><span class="token operator">/</span><span class="token constant">A</span><span class="token operator">&gt;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> root <span class="token operator">=</span> ReactDOM<span class="token punctuation">.</span><span class="token function">createRoot</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
root<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token operator">&lt;</span>App<span class="token operator">/</span><span class="token operator">&gt;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="answer" tabindex="-1"><a class="header-anchor" href="#answer" aria-hidden="true">#</a> Answer</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string">&quot;App&quot;</span>
<span class="token string">&quot;A&quot;</span>
<span class="token string">&quot;B&quot;</span>
<span class="token string">&quot;C&quot;</span>
<span class="token string">&quot;D&quot;</span>
<span class="token string">&quot;A&quot;</span>
<span class="token string">&quot;B&quot;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="source" tabindex="-1"><a class="header-anchor" href="#source" aria-hidden="true">#</a> Source</h2>`,8),k={href:"https://bigfrontend.dev/react-quiz/react-rerender-6-context",target:"_blank",rel:"noopener noreferrer"},d=l("Source From");function v(m,b){const s=t("ExternalLinkIcon");return i(),e(o,null,[u,n("p",null,[n("a",k,[d,p(s)])])],64)}var f=a(r,[["render",v],["__file","react-rerender-context.html.vue"]]);export{f as default};
