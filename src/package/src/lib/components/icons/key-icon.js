import{SvelteComponent as s,init as e,safe_not_equal as t,create_slot as l,svg_element as n,attr as i,insert as c,append as o,update_slot_base as a,get_all_dirty_from_scope as h,get_slot_changes as u,transition_in as d,transition_out as p,detach as r}from"../../../../node_modules/svelte/internal/index.js";function $(s){let e,t,$,v,w;const z=s[3].default,f=l(z,s,s[2],null);return{c(){e=n("svg"),t=n("path"),$=n("path"),v=n("title"),f&&f.c(),i(t,"d","M0 0h24v24H0z"),i(t,"fill","none"),i($,"d","M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"),i(e,"class",s[0]),i(e,"height",s[1]),i(e,"width",s[1]),i(e,"viewBox","0 0 24 24"),i(e,"xmlns","http://www.w3.org/2000/svg")},m(s,l){c(s,e,l),o(e,t),o(e,$),o(e,v),f&&f.m(v,null),w=!0},p(s,[t]){f&&f.p&&(!w||4&t)&&a(f,z,s,s[2],w?u(z,s[2],t,null):h(s[2]),null),(!w||1&t)&&i(e,"class",s[0]),(!w||2&t)&&i(e,"height",s[1]),(!w||2&t)&&i(e,"width",s[1])},i(s){w||(d(f,s),w=!0)},o(s){p(f,s),w=!1},d(s){s&&r(e),f&&f.d(s)}}}function v(s,e,t){let{$$slots:l={},$$scope:n}=e,{classes:i=""}=e,{size:c="24px"}=e;return s.$$set=s=>{"classes"in s&&t(0,i=s.classes),"size"in s&&t(1,c=s.size),"$$scope"in s&&t(2,n=s.$$scope)},[i,c,n,l]}class w extends s{constructor(s){super(),e(this,s,v,$,t,{classes:0,size:1})}}export{w as default};