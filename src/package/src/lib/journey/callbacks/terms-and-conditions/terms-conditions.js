import{SvelteComponent as t,init as n,safe_not_equal as e,create_component as i,mount_component as s,transition_in as o,transition_out as r,destroy_component as a,noop as c}from"../../../../../node_modules/svelte/internal/index.js";import l from"../../../components/compositions/checkbox/animated.js";import d from"../../../components/_utilities/locale-strings.js";function p(t){let n,e;return n=new d({props:{key:"termsAndConditions"}}),{c(){i(n.$$.fragment)},m(t,i){s(n,t,i),e=!0},p:c,i(t){e||(o(n.$$.fragment,t),e=!0)},o(t){r(n.$$.fragment,t),e=!1},d(t){a(n,t)}}}function m(t){let n,e;return n=new l({props:{firstInvalidInput:t[0],key:t[1],onChange:t[2],value:!1,$$slots:{default:[p]},$$scope:{ctx:t}}}),{c(){i(n.$$.fragment)},m(t,i){s(n,t,i),e=!0},p(t,[e]){const i={};1&e&&(i.firstInvalidInput=t[0]),64&e&&(i.$$scope={dirty:e,ctx:t}),n.$set(i)},i(t){e||(o(n.$$.fragment,t),e=!0)},o(t){r(n.$$.fragment,t),e=!1},d(t){a(n,t)}}}function $(t,n,e){let{callback:i}=n,{firstInvalidInput:s}=n,{idx:o}=n;const r=i?.payload?.input?.[0].name||`terms-${o}`;return i.getTerms(),t.$$set=t=>{"callback"in t&&e(3,i=t.callback),"firstInvalidInput"in t&&e(0,s=t.firstInvalidInput),"idx"in t&&e(4,o=t.idx)},[s,r,function(t){i.setAccepted(t.target.checked)},i,o]}class f extends t{constructor(t){super(),n(this,t,$,m,e,{callback:3,firstInvalidInput:0,idx:4})}}export{f as default};