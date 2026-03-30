import{_ as s}from"./footer-BbcQo9on.js";import"./iframe-BuHnDVhy.js";import"./preload-helper-J29wahVO.js";import"./index-BJkMo_Zb.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,m={title:"Components/DBFooter/Width",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{showCopyright:{control:"boolean"},showMain:{control:"boolean"},showMeta:{control:"boolean"},width:{control:"select",options:["full","large","small"]},id:{control:"text"},autofocus:{control:"boolean"}}},e={args:{width:"full",default:`<template v-slot:main
  ><div
    :style="{
  width: '100%',
  textAlign: 'left'
}"
  >
    Full
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
>`},render:t=>({components:{DBFooter:s},setup(){return{args:t}},template:`<div  :style="{
  width: '100%'
}"  ><DBFooter v-bind="args"   >${t.default}</DBFooter></div>`})},l={args:{width:"large",default:`<template v-slot:main
  ><div
    :style="{
  width: '100%',
  textAlign: 'left'
}"
  >
    Large
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
>`},render:t=>({components:{DBFooter:s},setup(){return{args:t}},template:`<div  :style="{
  width: '100%'
}"  ><DBFooter v-bind="args"   >${t.default}</DBFooter></div>`})},a={args:{width:"small",default:`<template v-slot:main
  ><div
    :style="{
  width: '100%',
  textAlign: 'left'
}"
  >
    Small
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
>`},render:t=>({components:{DBFooter:s},setup(){return{args:t}},template:`<div  :style="{
  width: '100%'
}"  ><DBFooter v-bind="args"   >${t.default}</DBFooter></div>`})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "full",
    "default": \`<template v-slot:main
  ><div
    :style="{
  width: '100%',
  textAlign: 'left'
}"
  >
    Full
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
}`,...e.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "large",
    "default": \`<template v-slot:main
  ><div
    :style="{
  width: '100%',
  textAlign: 'left'
}"
  >
    Large
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
}`,...l.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "width": "small",
    "default": \`<template v-slot:main
  ><div
    :style="{
  width: '100%',
  textAlign: 'left'
}"
  >
    Small
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
}`,...a.parameters?.docs?.source}}};const p=["full","large","small"];export{p as __namedExportsOrder,m as default,e as full,l as large,a as small};
