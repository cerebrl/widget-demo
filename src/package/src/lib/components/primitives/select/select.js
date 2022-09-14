import{SvelteComponent as e,init as t,safe_not_equal as l,space as s,element as n,empty as a,attr as i,insert as r,listen as u,transition_in as o,group_outros as d,transition_out as c,check_outros as f,detach as p,destroy_each as $,afterUpdate as _,create_component as b,mount_component as m,destroy_component as v,text as g,set_data as k,append as w,binding_callbacks as h}from"../../../../../node_modules/svelte/internal/index.js";import y from"../label/label.js";function C(e,t,l){const s=e.slice();return s[15]=t[l],s}function I(e){let t,l;return t=new y({props:{key:e[4],classes:`${e[6]}`,$$slots:{default:[x]},$$scope:{ctx:e}}}),{c(){b(t.$$.fragment)},m(e,s){m(t,e,s),l=!0},p(e,l){const s={};16&l&&(s.key=e[4]),64&l&&(s.classes=`${e[6]}`),262176&l&&(s.$$scope={dirty:l,ctx:e}),t.$set(s)},i(e){l||(o(t.$$.fragment,e),l=!0)},o(e){c(t.$$.fragment,e),l=!1},d(e){v(t,e)}}}function x(e){let t;return{c(){t=g(e[5])},m(e,l){r(e,t,l)},p(e,l){32&l&&k(t,e[5])},d(e){e&&p(t)}}}function O(e){let t,l,a,i,u,o=e[15].text+"";return{c(){t=n("option"),l=g(o),a=s(),t.__value=i=e[15].value,t.value=t.__value,t.selected=u=e[15].value===e[1]},m(e,s){r(e,t,s),w(t,l),w(t,a)},p(e,s){256&s&&o!==(o=e[15].text+"")&&k(l,o),256&s&&i!==(i=e[15].value)&&(t.__value=i,t.value=t.__value),258&s&&u!==(u=e[15].value===e[1])&&(t.selected=u)},d(e){e&&p(t)}}}function q(e){let t,l;return t=new y({props:{key:e[4],classes:`${e[10]?e[6]:"tw_sr-only"}`,$$slots:{default:[R]},$$scope:{ctx:e}}}),{c(){b(t.$$.fragment)},m(e,s){m(t,e,s),l=!0},p(e,l){const s={};16&l&&(s.key=e[4]),1088&l&&(s.classes=`${e[10]?e[6]:"tw_sr-only"}`),262176&l&&(s.$$scope={dirty:l,ctx:e}),t.$set(s)},i(e){l||(o(t.$$.fragment,e),l=!0)},o(e){c(t.$$.fragment,e),l=!1},d(e){v(t,e)}}}function R(e){let t;return{c(){t=g(e[5])},m(e,l){r(e,t,l)},p(e,l){32&l&&k(t,e[5])},d(e){e&&p(t)}}}function j(e){let t,l,_,b,m,v,g,k,w,h="first"===e[7]&&I(e),y=e[8],x=[];for(let t=0;t<y.length;t+=1)x[t]=O(C(e,y,t));let R="last"===e[7]&&q(e);return{c(){h&&h.c(),t=s(),l=n("select");for(let e=0;e<x.length;e+=1)x[e].c();m=s(),R&&R.c(),v=a(),i(l,"aria-describedby",_=`${e[4]}-message`),i(l,"aria-invalid",e[3]),i(l,"class",b=`${e[10]?e[0]:""} tw_input-base dark:tw_input-base_dark tw_focusable-element dark:tw_focusable-element_dark tw_select-base dark:tw_select-base_dark tw_w-full`),i(l,"id",e[4]),l.required=e[2]},m(s,n){h&&h.m(s,n),r(s,t,n),r(s,l,n);for(let e=0;e<x.length;e+=1)x[e].m(l,null);e[14](l),r(s,m,n),R&&R.m(s,n),r(s,v,n),g=!0,k||(w=u(l,"change",e[11]),k=!0)},p(e,[s]){if("first"===e[7]?h?(h.p(e,s),128&s&&o(h,1)):(h=I(e),h.c(),o(h,1),h.m(t.parentNode,t)):h&&(d(),c(h,1,1,(()=>{h=null})),f()),258&s){let t;for(y=e[8],t=0;t<y.length;t+=1){const n=C(e,y,t);x[t]?x[t].p(n,s):(x[t]=O(n),x[t].c(),x[t].m(l,null))}for(;t<x.length;t+=1)x[t].d(1);x.length=y.length}(!g||16&s&&_!==(_=`${e[4]}-message`))&&i(l,"aria-describedby",_),(!g||8&s)&&i(l,"aria-invalid",e[3]),(!g||1025&s&&b!==(b=`${e[10]?e[0]:""} tw_input-base dark:tw_input-base_dark tw_focusable-element dark:tw_focusable-element_dark tw_select-base dark:tw_select-base_dark tw_w-full`))&&i(l,"class",b),(!g||16&s)&&i(l,"id",e[4]),(!g||4&s)&&(l.required=e[2]),"last"===e[7]?R?(R.p(e,s),128&s&&o(R,1)):(R=q(e),R.c(),o(R,1),R.m(v.parentNode,v)):R&&(d(),c(R,1,1,(()=>{R=null})),f())},i(e){g||(o(h),o(R),g=!0)},o(e){c(h),c(R),g=!1},d(s){h&&h.d(s),s&&p(t),s&&p(l),$(x,s),e[14](null),s&&p(m),R&&R.d(s),s&&p(v),k=!1,w()}}}function N(e,t,l){let s,{selectClasses:n=""}=t,{defaultOption:a=null}=t,{firstInvalidInput:i}=t,{isRequired:r=!1}=t,{isInvalid:u=!1}=t,{key:o}=t,{label:d}=t,{labelClasses:c=""}=t,{labelOrder:f="first"}=t,{onChange:p}=t,{options:$}=t,b=!0;return null===a&&$[0].text===d&&(b=!1),_((()=>{i&&s.focus()})),e.$$set=e=>{"selectClasses"in e&&l(0,n=e.selectClasses),"defaultOption"in e&&l(1,a=e.defaultOption),"firstInvalidInput"in e&&l(12,i=e.firstInvalidInput),"isRequired"in e&&l(2,r=e.isRequired),"isInvalid"in e&&l(3,u=e.isInvalid),"key"in e&&l(4,o=e.key),"label"in e&&l(5,d=e.label),"labelClasses"in e&&l(6,c=e.labelClasses),"labelOrder"in e&&l(7,f=e.labelOrder),"onChange"in e&&l(13,p=e.onChange),"options"in e&&l(8,$=e.options)},[n,a,r,u,o,d,c,f,$,s,b,function(e){const t=e.target.value,s=$.find((e=>String(e.value)===t));l(10,b=!(d===s?.text)),p(e)},i,p,function(e){h[e?"unshift":"push"]((()=>{s=e,l(9,s),l(8,$)}))}]}class S extends e{constructor(e){super(),t(this,e,N,j,l,{selectClasses:0,defaultOption:1,firstInvalidInput:12,isRequired:2,isInvalid:3,key:4,label:5,labelClasses:6,labelOrder:7,onChange:13,options:8})}}export{S as default};