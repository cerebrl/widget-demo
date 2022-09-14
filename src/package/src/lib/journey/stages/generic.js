import{SvelteComponent as t,init as e,safe_not_equal as n,binding_callbacks as r,bind as o,create_component as i,mount_component as s,add_flush_callback as l,transition_in as m,transition_out as a,destroy_component as c,empty as f,insert as p,group_outros as $,check_outros as u,detach as g,element as d,space as w,attr as h,destroy_each as y,noop as _,text as b,set_data as x}from"../../../../node_modules/svelte/internal/index.js";import{interpolate as v}from"../../_utilities/i18n.utilities.js";import j from"../../components/_utilities/locale-strings.js";import k from"../../components/primitives/alert/alert.js";import E from"../../components/primitives/button/button.js";import{convertStringToKey as N}from"../_utilities/step.utilities.js";import F from"../../components/primitives/form/form.js";import{mapCallbackToComponent as I}from"../_utilities/map-callback.utilities.js";import M from"../../components/primitives/spinner/spinner.js";import B from"../../components/_utilities/server-strings.js";function S(t,e,n){const r=t.slice();r[9]=e[n],r[12]=n;const o=r[6](r[9]);return r[10]=o,r}function C(t){let e,n,r,o,l,f,_,b,x,v;n=new B({props:{html:!0,string:t[3].getHeader()||""}}),l=new B({props:{html:!0,string:t[3].getDescription()||""}});let j=t[1]&&H(t),k=t[3]?.callbacks,N=[];for(let e=0;e<k.length;e+=1)N[e]=W(S(t,k,e));const F=t=>a(N[t],1,1,(()=>{N[t]=null}));return x=new E({props:{busy:t[2],style:"primary",type:"submit",width:"full",$$slots:{default:[O]},$$scope:{ctx:t}}}),{c(){e=d("h1"),i(n.$$.fragment),r=w(),o=d("p"),i(l.$$.fragment),f=w(),j&&j.c(),_=w();for(let t=0;t<N.length;t+=1)N[t].c();b=w(),i(x.$$.fragment),h(e,"class","tw_primary-header dark:tw_primary-header_dark"),h(o,"class","tw_text-center tw_-mt-5 tw_mb-2 tw_py-4 tw_text-secondary-dark dark:tw_text-secondary-light")},m(t,i){p(t,e,i),s(n,e,null),p(t,r,i),p(t,o,i),s(l,o,null),p(t,f,i),j&&j.m(t,i),p(t,_,i);for(let e=0;e<N.length;e+=1)N[e].m(t,i);p(t,b,i),s(x,t,i),v=!0},p(t,e){const r={};8&e&&(r.string=t[3].getHeader()||""),n.$set(r);const o={};if(8&e&&(o.string=t[3].getDescription()||""),l.$set(o),t[1]?j?(j.p(t,e),2&e&&m(j,1)):(j=H(t),j.c(),m(j,1),j.m(_.parentNode,_)):j&&($(),a(j,1,1,(()=>{j=null})),u()),72&e){let n;for(k=t[3]?.callbacks,n=0;n<k.length;n+=1){const r=S(t,k,n);N[n]?(N[n].p(r,e),m(N[n],1)):(N[n]=W(r),N[n].c(),m(N[n],1),N[n].m(b.parentNode,b))}for($(),n=k.length;n<N.length;n+=1)F(n);u()}const i={};4&e&&(i.busy=t[2]),8192&e&&(i.$$scope={dirty:e,ctx:t}),x.$set(i)},i(t){if(!v){m(n.$$.fragment,t),m(l.$$.fragment,t),m(j);for(let t=0;t<k.length;t+=1)m(N[t]);m(x.$$.fragment,t),v=!0}},o(t){a(n.$$.fragment,t),a(l.$$.fragment,t),a(j),N=N.filter(Boolean);for(let t=0;t<N.length;t+=1)a(N[t]);a(x.$$.fragment,t),v=!1},d(t){t&&g(e),c(n),t&&g(r),t&&g(o),c(l),t&&g(f),j&&j.d(t),t&&g(_),y(N,t),t&&g(b),c(x,t)}}}function D(t){let e,n,r;return n=new M({props:{colorClass:"tw_text-primary-light",layoutClasses:"tw_h-28 tw_w-28"}}),{c(){e=d("div"),i(n.$$.fragment),h(e,"class","tw_text-center tw_w-full tw_py-4")},m(t,o){p(t,e,o),s(n,e,null),r=!0},p:_,i(t){r||(m(n.$$.fragment,t),r=!0)},o(t){a(n.$$.fragment,t),r=!1},d(t){t&&g(e),c(n)}}}function H(t){let e,n;return e=new k({props:{type:"error",$$slots:{default:[V]},$$scope:{ctx:t}}}),{c(){i(e.$$.fragment)},m(t,r){s(e,t,r),n=!0},p(t,n){const r={};8226&n&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){a(e.$$.fragment,t),n=!1},d(t){c(e,t)}}}function V(t){let e,n=v(t[5],null,t[1])+"";return{c(){e=b(n)},m(t,n){p(t,e,n)},p(t,r){34&r&&n!==(n=v(t[5],null,t[1])+"")&&x(e,n)},d(t){t&&g(e)}}}function W(t){let e,n,r;var o=I(t[9]);function l(t){return{props:{callback:t[9],firstInvalidInput:t[10],idx:t[12]}}}return o&&(e=new o(l(t))),{c(){e&&i(e.$$.fragment),n=f()},m(t,o){e&&s(e,t,o),p(t,n,o),r=!0},p(t,r){const f={};if(8&r&&(f.callback=t[9]),8&r&&(f.firstInvalidInput=t[10]),o!==(o=I(t[9]))){if(e){$();const t=e;a(t.$$.fragment,1,0,(()=>{c(t,1)})),u()}o?(e=new o(l(t)),i(e.$$.fragment),m(e.$$.fragment,1),s(e,n.parentNode,n)):e=null}else o&&e.$set(f)},i(t){r||(e&&m(e.$$.fragment,t),r=!0)},o(t){e&&a(e.$$.fragment,t),r=!1},d(t){t&&g(n),e&&c(e,t)}}}function O(t){let e,n;return e=new j({props:{key:"nextButton"}}),{c(){i(e.$$.fragment)},m(t,r){s(e,t,r),n=!0},p:_,i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){a(e.$$.fragment,t),n=!1},d(t){c(e,t)}}}function P(t){let e,n,r,o;const i=[D,C],s=[];function l(t,e){return t[3]?"Step"===t[3].type?1:-1:0}return~(e=l(t))&&(n=s[e]=i[e](t)),{c(){n&&n.c(),r=f()},m(t,n){~e&&s[e].m(t,n),p(t,r,n),o=!0},p(t,o){let c=e;e=l(t),e===c?~e&&s[e].p(t,o):(n&&($(),a(s[c],1,1,(()=>{s[c]=null})),u()),~e?(n=s[e],n?n.p(t,o):(n=s[e]=i[e](t),n.c()),m(n,1),n.m(r.parentNode,r)):n=null)},i(t){o||(m(n),o=!0)},o(t){a(n),o=!1},d(t){~e&&s[e].d(t),t&&g(r)}}}function q(t){let e,n,f;function p(e){t[7](e)}let $={onSubmitWhenValid:t[4],$$slots:{default:[P]},$$scope:{ctx:t}};return void 0!==t[0]&&($.formEl=t[0]),e=new F({props:$}),r.push((()=>o(e,"formEl",p))),{c(){i(e.$$.fragment)},m(t,n){s(e,t,n),f=!0},p(t,[r]){const o={};16&r&&(o.onSubmitWhenValid=t[4]),8238&r&&(o.$$scope={dirty:r,ctx:t}),!n&&1&r&&(n=!0,o.formEl=t[0],l((()=>n=!1))),e.$set(o)},i(t){f||(m(e.$$.fragment,t),f=!0)},o(t){a(e.$$.fragment,t),f=!1},d(t){c(e,t)}}}function z(t,e,n){let{failureMessage:r}=e,{formEl:o=null}=e,{loading:i}=e,{step:s}=e,{submitForm:l}=e,m="",a=!1;return t.$$set=t=>{"failureMessage"in t&&n(1,r=t.failureMessage),"formEl"in t&&n(0,o=t.formEl),"loading"in t&&n(2,i=t.loading),"step"in t&&n(3,s=t.step),"submitForm"in t&&n(4,l=t.submitForm)},t.$$.update=()=>{2&t.$$.dirty&&n(5,m=N(r))},[o,r,i,s,l,m,function(t){return!(!t.getOutputByName("failedPolicies",[]).length||a)&&(console.log(t),a=!0,!0)},function(t){o=t,n(0,o)}]}class A extends t{constructor(t){super(),e(this,t,z,q,n,{failureMessage:1,formEl:0,loading:2,step:3,submitForm:4})}}export{A as default};