import{SvelteComponent as s,init as e,safe_not_equal as t,create_slot as l,svg_element as c,attr as n,insert as i,append as o,update_slot_base as a,get_all_dirty_from_scope as h,get_slot_changes as u,transition_in as d,transition_out as p,detach as r}from"../../../../node_modules/svelte/internal/index.js";function $(s){let e,t,$,m,v;const z=s[3].default,w=l(z,s,s[2],null);return{c(){e=c("svg"),t=c("path"),$=c("path"),m=c("title"),w&&w.c(),n(t,"d","M0 0h24v24H0z"),n(t,"fill","none"),n($,"d","M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zm-6 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm3.1-9H8.9V6c0-1.71 1.39-3.1 3.1-3.1 1.71 0 3.1 1.39 3.1 3.1v2z"),n(e,"class",s[0]),n(e,"height",s[1]),n(e,"viewBox","0 0 24 24"),n(e,"width",s[1]),n(e,"xmlns","http://www.w3.org/2000/svg")},m(s,l){i(s,e,l),o(e,t),o(e,$),o(e,m),w&&w.m(m,null),v=!0},p(s,[t]){w&&w.p&&(!v||4&t)&&a(w,z,s,s[2],v?u(z,s[2],t,null):h(s[2]),null),(!v||1&t)&&n(e,"class",s[0]),(!v||2&t)&&n(e,"height",s[1]),(!v||2&t)&&n(e,"width",s[1])},i(s){v||(d(w,s),v=!0)},o(s){p(w,s),v=!1},d(s){s&&r(e),w&&w.d(s)}}}function m(s,e,t){let{$$slots:l={},$$scope:c}=e,{classes:n=""}=e,{size:i="24px"}=e;return s.$$set=s=>{"classes"in s&&t(0,n=s.classes),"size"in s&&t(1,i=s.size),"$$scope"in s&&t(2,c=s.$$scope)},[n,i,c,l]}class v extends s{constructor(s){super(),e(this,s,m,$,t,{classes:0,size:1})}}export{v as default};