import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./brand-vRTYgQ0X.js";import{n as i,t as a}from"./header-CHBTvx-0.js";import{n as o,t as s}from"./navigation-Cav2Xv_K.js";import{n as c,t as l}from"./navigation-item-BYqzJMy5.js";var u=t({WithApplicationNameNavigation:()=>p,WithoutApplicationName:()=>h,WithoutApplicationNameNavigation:()=>g,WithoutNavigation:()=>m,__namedExportsOrder:()=>_,default:()=>f}),d,f,p,m,h,g,_;function v(){return(v=e((()=>{n(),l(),s(),i(),{fn:d}=__STORYBOOK_MODULE_TEST__,f={title:`Components/DBHeader/Examples`,component:a,parameters:{layout:`centered`},tags:[`autodocs`],argTypes:{width:{control:`select`,options:[`full`,`medium`,`large`,`small`]},forceMobile:{control:`boolean`},drawerOpen:{control:`boolean`},burgerMenuLabel:{control:`text`},closeButtonId:{control:`text`},closeButtonText:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`}}},p={args:{default:`<DBNavigation aria-label="With Application Name + Navigation" v-bind="{}"
  ><DBNavigationItem icon="x_placeholder"
    ><a href="#">With Application Name + Navigation</a></DBNavigationItem
  ><DBNavigationItem :disabled="true"
    ><a href="#">
      With Application Name + Navigation disabled
    </a></DBNavigationItem
  ></DBNavigation
><template v-slot:brand><DBBrand>DBHeader</DBBrand></template>`},render:e=>({components:{DBHeader:a,DBBrand:r,DBNavigationItem:c,DBNavigation:o},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBHeader v-bind="args"   >${e.default}</DBHeader></div>`})},m={args:{default:`<template v-slot:brand><DBBrand>DBHeader</DBBrand></template>`},render:e=>({components:{DBHeader:a,DBBrand:r,DBNavigationItem:c,DBNavigation:o},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBHeader v-bind="args"   >${e.default}</DBHeader></div>`})},h={args:{default:`<DBNavigation aria-label="Without Application Name" v-bind="{}"
  ><DBNavigationItem icon="x_placeholder"
    ><a href="#">Without Application Name</a></DBNavigationItem
  ><DBNavigationItem :disabled="true"
    ><a href="#">Without Application Name disabled</a></DBNavigationItem
  ></DBNavigation
><template v-slot:brand><DBBrand></DBBrand></template>`},render:e=>({components:{DBHeader:a,DBBrand:r,DBNavigationItem:c,DBNavigation:o},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBHeader v-bind="args"   >${e.default}</DBHeader></div>`})},g={args:{default:`<template v-slot:brand><DBBrand></DBBrand></template>`},render:e=>({components:{DBHeader:a,DBBrand:r,DBNavigationItem:c,DBNavigation:o},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBHeader v-bind="args"   >${e.default}</DBHeader></div>`})},_=[`WithApplicationNameNavigation`,`WithoutNavigation`,`WithoutApplicationName`,`WithoutApplicationNameNavigation`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}}})))()}export{u as a,m as i,h as n,v as o,g as r,p as t};