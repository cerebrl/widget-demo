import{SvelteComponent as s,init as e,safe_not_equal as t,create_slot as l,svg_element as n,attr as i,insert as c,append as o,update_slot_base as h,get_all_dirty_from_scope as a,get_slot_changes as u,transition_in as d,transition_out as p,detach as r}from"../../../../node_modules/svelte/internal/index.js";function v(s){let e,t,v,$,m;const z=s[3].default,w=l(z,s,s[2],null);return{c(){e=n("svg"),t=n("path"),v=n("path"),$=n("title"),w&&w.c(),i(t,"d","M0 0h24v24H0z"),i(t,"fill","none"),i(v,"d","M15 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm-9-2V7H4v3H1v2h3v3h2v-3h3v-2H6zm9 4c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"),i(e,"class",s[0]),i(e,"xmlns","http://www.w3.org/2000/svg"),i(e,"height",s[1]),i(e,"viewBox","0 0 24 24"),i(e,"width",s[1])},m(s,l){c(s,e,l),o(e,t),o(e,v),o(e,$),w&&w.m($,null),m=!0},p(s,[t]){w&&w.p&&(!m||4&t)&&h(w,z,s,s[2],m?u(z,s[2],t,null):a(s[2]),null),(!m||1&t)&&i(e,"class",s[0]),(!m||2&t)&&i(e,"height",s[1]),(!m||2&t)&&i(e,"width",s[1])},i(s){m||(d(w,s),m=!0)},o(s){p(w,s),m=!1},d(s){s&&r(e),w&&w.d(s)}}}function $(s,e,t){let{$$slots:l={},$$scope:n}=e,{classes:i=""}=e,{size:c="24px"}=e;return s.$$set=s=>{"classes"in s&&t(0,i=s.classes),"size"in s&&t(1,c=s.size),"$$scope"in s&&t(2,n=s.$$scope)},[i,c,n,l]}class m extends s{constructor(s){super(),e(this,s,$,v,t,{classes:0,size:1})}}export{m as default};