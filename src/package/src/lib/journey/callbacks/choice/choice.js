import{SvelteComponent as t,init as n,safe_not_equal as e,create_component as i,mount_component as a,transition_in as l,transition_out as o,destroy_component as s}from"../../../../../node_modules/svelte/internal/index.js";import r from"../../../components/compositions/select-floating/floating-label.js";function c(t){let n,e;return n=new r({props:{firstInvalidInput:t[0],defaultOption:t[2],isRequired:!1,key:t[3],label:t[4],onChange:t[5],options:t[1]}}),{c(){i(n.$$.fragment)},m(t,i){a(n,t,i),e=!0},p(t,[e]){const i={};1&e&&(i.firstInvalidInput=t[0]),n.$set(i)},i(t){e||(l(n.$$.fragment,t),e=!0)},o(t){o(n.$$.fragment,t),e=!1},d(t){s(n,t)}}}function u(t,n,e){let{callback:i}=n,{firstInvalidInput:a}=n,{idx:l}=n;const o=i.getChoices()?.map(((t,n)=>({text:t,value:`${n}`}))),s=`${i.getDefaultChoice()}`||null,r=i?.payload?.input?.[0].name||`choice-${l}`,c=i.getPrompt();return t.$$set=t=>{"callback"in t&&e(6,i=t.callback),"firstInvalidInput"in t&&e(0,a=t.firstInvalidInput),"idx"in t&&e(7,l=t.idx)},[a,o,s,r,c,function(t){i.setChoiceIndex(Number(t.target.value))},i,l]}class p extends t{constructor(t){super(),n(this,t,u,c,e,{callback:6,firstInvalidInput:0,idx:7})}}export{p as default};