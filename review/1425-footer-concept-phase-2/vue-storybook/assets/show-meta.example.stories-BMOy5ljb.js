import{_ as o}from"./footer-BbcQo9on.js";import"./iframe-BuHnDVhy.js";import"./preload-helper-J29wahVO.js";import"./index-BJkMo_Zb.js";const{fn:i}=__STORYBOOK_MODULE_TEST__,d={title:"Components/DBFooter/Show Meta",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{showCopyright:{control:"boolean"},showMain:{control:"boolean"},showMeta:{control:"boolean"},width:{control:"select",options:["full","large","small"]},id:{control:"text"},autofocus:{control:"boolean"}}},e={args:{showMeta:!0,default:`<template v-slot:main
  ><div
    :style="{
  width: '100%',
  textAlign: 'left'
}"
  >
    showMeta=true
  </div></template
><template v-slot:meta
  ><ul
    :style="{
  display: 'flex',
  justifyContent: 'flex-end',
  gap: 'var(--db-spacing-fixed-sm)',
  listStyle: 'none',
  margin: '0',
  padding: '0'
}"
    ><li><a href="#" class="db-link"> Contact </a></li
    ><li><a href="#" class="db-link"> Imprint </a></li></ul
  ></template
>`},render:t=>({components:{DBFooter:o},setup(){return{args:t}},template:`<div  :style="{
  width: '100%'
}"  ><DBFooter v-bind="args"   >${t.default}</DBFooter></div>`})},a={args:{showMeta:!1,default:`<template v-slot:main
  ><div
    :style="{
  width: '100%',
  textAlign: 'left'
}"
  >
    showMeta=false
  </div></template
>`},render:t=>({components:{DBFooter:o},setup(){return{args:t}},template:`<div  :style="{
  width: '100%'
}"  ><DBFooter v-bind="args"   >${t.default}</DBFooter></div>`})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "showMeta": true,
    "default": \`<template v-slot:main
  ><div
    :style="{
  width: '100%',
  textAlign: 'left'
}"
  >
    showMeta=true
  </div></template
><template v-slot:meta
  ><ul
    :style="{
  display: 'flex',
  justifyContent: 'flex-end',
  gap: 'var(--db-spacing-fixed-sm)',
  listStyle: 'none',
  margin: '0',
  padding: '0'
}"
    ><li><a href="#" class="db-link"> Contact </a></li
    ><li><a href="#" class="db-link"> Imprint </a></li></ul
  ></template
>\`
  },
  render: (args: any) => ({
    components: {
      DBFooter
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  width: '100%'
}"  ><DBFooter v-bind="args"   >\${args.default}</DBFooter></div>\`
  })
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "showMeta": false,
    "default": \`<template v-slot:main
  ><div
    :style="{
  width: '100%',
  textAlign: 'left'
}"
  >
    showMeta=false
  </div></template
>\`
  },
  render: (args: any) => ({
    components: {
      DBFooter
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  width: '100%'
}"  ><DBFooter v-bind="args"   >\${args.default}</DBFooter></div>\`
  })
}`,...a.parameters?.docs?.source}}};const p=["showMetatrue","showMetafalse"];export{p as __namedExportsOrder,d as default,a as showMetafalse,e as showMetatrue};
