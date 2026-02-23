import{_ as e}from"./header-D_-Mq0Vf.js";import{_ as o}from"./navigation-BxaeQAVy.js";import{_ as d}from"./navigation-item-DsWT76uO.js";import{_ as l}from"./brand-eVd7n1EM.js";import"./iframe-CuMlacWz.js";import"./preload-helper-CFgWGzQ2.js";import"./constants-BMPlMwqI.js";import"./index-CW8sBcoF.js";import"./button-CbWY1Frq.js";import"./drawer-DAxJ45Wp.js";import"./floating-components-1F_x7pmN.js";const{fn:h}=__STORYBOOK_MODULE_TEST__,f={title:"Components/DBHeader/Examples",component:e,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{width:{control:"select",options:["full","medium","large","small"]},forceMobile:{control:"boolean"},drawerOpen:{control:"boolean"},burgerMenuLabel:{control:"text"},closeButtonId:{control:"text"},closeButtonText:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"}}},t={args:{default:`<DBNavigation aria-label="With Application Name + Navigation" v-bind="{}"
  ><DBNavigationItem icon="x_placeholder"
    ><a href="#">With Application Name + Navigation</a></DBNavigationItem
  ><DBNavigationItem :disabled="true"
    ><a href="#">
      With Application Name + Navigation disabled
    </a></DBNavigationItem
  ></DBNavigation
><template v-slot:brand><DBBrand>DBHeader</DBBrand></template>`},render:a=>({components:{DBHeader:e,DBBrand:l,DBNavigationItem:d,DBNavigation:o},setup(){return{args:a}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBHeader v-bind="args"   >${a.default}</DBHeader></div>`})},n={args:{default:"<template v-slot:brand><DBBrand>DBHeader</DBBrand></template>"},render:a=>({components:{DBHeader:e,DBBrand:l,DBNavigationItem:d,DBNavigation:o},setup(){return{args:a}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBHeader v-bind="args"   >${a.default}</DBHeader></div>`})},i={args:{default:`<DBNavigation aria-label="Without Application Name" v-bind="{}"
  ><DBNavigationItem icon="x_placeholder"
    ><a href="#">Without Application Name</a></DBNavigationItem
  ><DBNavigationItem :disabled="true"
    ><a href="#">Without Application Name disabled</a></DBNavigationItem
  ></DBNavigation
><template v-slot:brand><DBBrand></DBBrand></template>`},render:a=>({components:{DBHeader:e,DBBrand:l,DBNavigationItem:d,DBNavigation:o},setup(){return{args:a}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBHeader v-bind="args"   >${a.default}</DBHeader></div>`})},r={args:{default:"<template v-slot:brand><DBBrand></DBBrand></template>"},render:a=>({components:{DBHeader:e,DBBrand:l,DBNavigationItem:d,DBNavigation:o},setup(){return{args:a}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBHeader v-bind="args"   >${a.default}</DBHeader></div>`})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const H=["WithApplicationNameNavigation","WithoutNavigation","WithoutApplicationName","WithoutApplicationNameNavigation"];export{t as WithApplicationNameNavigation,i as WithoutApplicationName,r as WithoutApplicationNameNavigation,n as WithoutNavigation,H as __namedExportsOrder,f as default};
