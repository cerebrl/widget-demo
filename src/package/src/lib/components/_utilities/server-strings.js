import{SvelteComponent as n,init as t,safe_not_equal as e,empty as l,insert as o,group_outros as r,transition_out as u,check_outros as s,transition_in as c,detach as i,create_slot as d,update_slot_base as m,get_all_dirty_from_scope as p,get_slot_changes as f,text as $,noop as a,HtmlTag as h}from"../../../../node_modules/svelte/internal/index.js";import x from"../../../../node_modules/xss/lib/index.js";function g(n){let t;const e=n[4].default,l=d(e,n,n[3],null),r=l||function(n){let t;return{c(){t=$(n[1])},m(n,e){o(n,t,e)},p:a,d(n){n&&i(t)}}}(n);return{c(){r&&r.c()},m(n,e){r&&r.m(n,e),t=!0},p(n,o){l&&l.p&&(!t||8&o)&&m(l,e,n,n[3],t?f(e,n[3],o,null):p(n[3]),null)},i(n){t||(c(r,n),t=!0)},o(n){u(r,n),t=!1},d(n){r&&r.d(n)}}}function j(n){let t;const e=n[4].default,r=d(e,n,n[3],null),s=r||function(n){let t,e;return{c(){t=new h(!1),e=l(),t.a=e},m(l,r){t.m(n[1],l,r),o(l,e,r)},p:a,d(n){n&&i(e),n&&t.d()}}}(n);return{c(){s&&s.c()},m(n,e){s&&s.m(n,e),t=!0},p(n,l){r&&r.p&&(!t||8&l)&&m(r,e,n,n[3],t?f(e,n[3],l,null):p(n[3]),null)},i(n){t||(c(s,n),t=!0)},o(n){u(s,n),t=!1},d(n){s&&s.d(n)}}}function _(n){let t,e,d,m;const p=[j,g],f=[];function $(n,t){return n[0]?0:1}return t=$(n),e=f[t]=p[t](n),{c(){e.c(),d=l()},m(n,e){f[t].m(n,e),o(n,d,e),m=!0},p(n,[l]){let o=t;t=$(n),t===o?f[t].p(n,l):(r(),u(f[o],1,1,(()=>{f[o]=null})),s(),e=f[t],e?e.p(n,l):(e=f[t]=p[t](n),e.c()),c(e,1),e.m(d.parentNode,d))},i(n){m||(c(e),m=!0)},o(n){u(e),m=!1},d(n){f[t].d(n),n&&i(d)}}}function b(n,t,e){let{$$slots:l={},$$scope:o}=t,{html:r=!1}=t,{string:u}=t,s=x(u);return n.$$set=n=>{"html"in n&&e(0,r=n.html),"string"in n&&e(2,u=n.string),"$$scope"in n&&e(3,o=n.$$scope)},[r,s,u,o,l]}class v extends n{constructor(n){super(),t(this,n,b,_,e,{html:0,string:2})}}export{v as default};