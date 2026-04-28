import{n as e}from"./chunk-DnJy8xQt.js";import{A as t,h as n,m as r,t as i,v as a}from"./src-CttduW8a.js";var o,s,c,l,u,d,f;e((()=>{i(),{fn:o}=__STORYBOOK_MODULE_TEST__,s={title:`Components/DBHeader/Examples`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{width:{control:`select`,options:[`full`,`medium`,`large`,`small`]},forceMobile:{control:`boolean`},drawerOpen:{control:`boolean`},burgerMenuLabel:{control:`text`},closeButtonId:{control:`text`},closeButtonText:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},c={args:{default:`<DBNavigation aria-label="With Application Name + Navigation" v-bind="{}"
  ><DBNavigationItem icon="x_placeholder"
    ><a href="#">With Application Name + Navigation</a></DBNavigationItem
  ><DBNavigationItem :disabled="true"
    ><a href="#">
      With Application Name + Navigation disabled
    </a></DBNavigationItem
  ></DBNavigation
><template v-slot:brand><DBBrand>DBHeader</DBBrand></template>`},render:e=>({components:{DBHeader:a,DBBrand:t,DBNavigationItem:r,DBNavigation:n},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBHeader v-bind="args"   >${e.default}</DBHeader></div>`})},l={args:{default:`<template v-slot:brand><DBBrand>DBHeader</DBBrand></template>`},render:e=>({components:{DBHeader:a,DBBrand:t,DBNavigationItem:r,DBNavigation:n},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBHeader v-bind="args"   >${e.default}</DBHeader></div>`})},u={args:{default:`<DBNavigation aria-label="Without Application Name" v-bind="{}"
  ><DBNavigationItem icon="x_placeholder"
    ><a href="#">Without Application Name</a></DBNavigationItem
  ><DBNavigationItem :disabled="true"
    ><a href="#">Without Application Name disabled</a></DBNavigationItem
  ></DBNavigation
><template v-slot:brand><DBBrand></DBBrand></template>`},render:e=>({components:{DBHeader:a,DBBrand:t,DBNavigationItem:r,DBNavigation:n},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBHeader v-bind="args"   >${e.default}</DBHeader></div>`})},d={args:{default:`<template v-slot:brand><DBBrand></DBBrand></template>`},render:e=>({components:{DBHeader:a,DBBrand:t,DBNavigationItem:r,DBNavigation:n},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBHeader v-bind="args"   >${e.default}</DBHeader></div>`})},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`<DBNavigation aria-label="With Application Name + Navigation" v-bind="{}"
  ><DBNavigationItem icon="x_placeholder"
    ><a href="#">With Application Name + Navigation</a></DBNavigationItem
  ><DBNavigationItem :disabled="true"
    ><a href="#">
      With Application Name + Navigation disabled
    </a></DBNavigationItem
  ></DBNavigation
><template v-slot:brand><DBBrand>DBHeader</DBBrand></template>\`
  },
  render: (args: any) => ({
    components: {
      DBHeader,
      DBBrand,
      DBNavigationItem,
      DBNavigation
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBHeader v-bind="args"   >\${args.default}</DBHeader></div>\`
  })
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`<template v-slot:brand><DBBrand>DBHeader</DBBrand></template>\`
  },
  render: (args: any) => ({
    components: {
      DBHeader,
      DBBrand,
      DBNavigationItem,
      DBNavigation
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBHeader v-bind="args"   >\${args.default}</DBHeader></div>\`
  })
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`<DBNavigation aria-label="Without Application Name" v-bind="{}"
  ><DBNavigationItem icon="x_placeholder"
    ><a href="#">Without Application Name</a></DBNavigationItem
  ><DBNavigationItem :disabled="true"
    ><a href="#">Without Application Name disabled</a></DBNavigationItem
  ></DBNavigation
><template v-slot:brand><DBBrand></DBBrand></template>\`
  },
  render: (args: any) => ({
    components: {
      DBHeader,
      DBBrand,
      DBNavigationItem,
      DBNavigation
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBHeader v-bind="args"   >\${args.default}</DBHeader></div>\`
  })
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`<template v-slot:brand><DBBrand></DBBrand></template>\`
  },
  render: (args: any) => ({
    components: {
      DBHeader,
      DBBrand,
      DBNavigationItem,
      DBNavigation
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBHeader v-bind="args"   >\${args.default}</DBHeader></div>\`
  })
}`,...d.parameters?.docs?.source}}},f=[`WithApplicationNameNavigation`,`WithoutNavigation`,`WithoutApplicationName`,`WithoutApplicationNameNavigation`]}))();export{c as WithApplicationNameNavigation,u as WithoutApplicationName,d as WithoutApplicationNameNavigation,l as WithoutNavigation,f as __namedExportsOrder,s as default};