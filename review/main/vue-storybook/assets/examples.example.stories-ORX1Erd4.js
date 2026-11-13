import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./button-1TrOfrAR.js";import{i,n as a,r as o,t as s}from"./control-panel-actions-2-B2a48rc-.js";import{n as c,t as l}from"./control-panel-brand-CZpVyIgy.js";import{n as u,t as d}from"./control-panel-desktop-KCXnwH53.js";import{i as f,n as p,r as m,t as h}from"./control-panel-navigation-item-14jcRcd6.js";var g=t({WithApplicationNameNavigation:()=>y,WithoutApplicationName:()=>w,WithoutApplicationNameNavigation:()=>T,WithoutNavigation:()=>b,WithoutNavigationActions1:()=>S,WithoutNavigationActions1Actions2:()=>x,WithoutNavigationActions2:()=>C,__namedExportsOrder:()=>E,default:()=>v}),_,v,y,b,x,S,C,w,T,E;function D(){return(D=e((()=>{n(),i(),a(),c(),p(),f(),u(),{fn:_}=__STORYBOOK_MODULE_TEST__,v={title:`Components/DBControlPanelDesktop/Examples`,component:d,parameters:{layout:`centered`},tags:[`autodocs`],args:{onExpandButtonTooltipFn:_()},argTypes:{width:{control:`select`,options:[`full`,`medium`,`large`,`small`]},orientation:{control:`select`,options:[`horizontal`,`vertical`]},expanded:{control:`boolean`},expandButtonTooltip:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onExpandButtonTooltipFn:{action:`onExpandButtonTooltipFn`}}},y={args:{orientation:`horizontal`,default:`<DBControlPanelNavigation
  aria-label="With Application Name + Navigation"
  v-bind="{}"
  ><DBControlPanelNavigationItem icon="x_placeholder"
    ><a href="#"
      >With Application Name + Navigation</a
    ></DBControlPanelNavigationItem
  ><DBControlPanelNavigationItem icon="x_placeholder" :disabled="true"
    ><a href="#"
      >With Application Name disabled</a
    ></DBControlPanelNavigationItem
  ></DBControlPanelNavigation
><template v-slot:brand
  ><DBControlPanelBrand data-logo="db-systel"></DBControlPanelBrand
></template>`},render:e=>({components:{DBControlPanelDesktop:d,DBButton:r,DBControlPanelActions1:o,DBControlPanelActions2:s,DBControlPanelBrand:l,DBControlPanelNavigationItem:h,DBControlPanelNavigation:m},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBControlPanelDesktop v-bind="args"   >${e.default}</DBControlPanelDesktop></div>`})},b={args:{orientation:`horizontal`,default:`<template v-slot:brand
  ><DBControlPanelBrand data-logo="db-systel"></DBControlPanelBrand
></template>`},render:e=>({components:{DBControlPanelDesktop:d,DBButton:r,DBControlPanelActions1:o,DBControlPanelActions2:s,DBControlPanelBrand:l,DBControlPanelNavigationItem:h,DBControlPanelNavigation:m},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBControlPanelDesktop v-bind="args"   >${e.default}</DBControlPanelDesktop></div>`})},x={args:{orientation:`horizontal`,default:`<template v-slot:brand
  ><DBControlPanelBrand data-logo="db-systel"></DBControlPanelBrand></template
><template v-slot:actions-1
  ><DBControlPanelActions1
    ><DBButton icon="magnifying_glass" variant="ghost" :noText="true">
      Search
    </DBButton></DBControlPanelActions1
  ></template
><template v-slot:actions-2
  ><DBControlPanelActions2
    ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
      Profile </DBButton
    ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
      Notification </DBButton
    ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
      Help
    </DBButton></DBControlPanelActions2
  ></template
>`},render:e=>({components:{DBControlPanelDesktop:d,DBButton:r,DBControlPanelActions1:o,DBControlPanelActions2:s,DBControlPanelBrand:l,DBControlPanelNavigationItem:h,DBControlPanelNavigation:m},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBControlPanelDesktop v-bind="args"   >${e.default}</DBControlPanelDesktop></div>`})},S={args:{orientation:`horizontal`,default:`<template v-slot:brand
  ><DBControlPanelBrand data-logo="db-systel"></DBControlPanelBrand></template
><template v-slot:actions-1
  ><DBControlPanelActions1
    ><DBButton icon="magnifying_glass" variant="ghost" :noText="true">
      Search
    </DBButton></DBControlPanelActions1
  ></template
>`},render:e=>({components:{DBControlPanelDesktop:d,DBButton:r,DBControlPanelActions1:o,DBControlPanelActions2:s,DBControlPanelBrand:l,DBControlPanelNavigationItem:h,DBControlPanelNavigation:m},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBControlPanelDesktop v-bind="args"   >${e.default}</DBControlPanelDesktop></div>`})},C={args:{orientation:`horizontal`,default:`<template v-slot:brand
  ><DBControlPanelBrand data-logo="db-systel"></DBControlPanelBrand></template
><template v-slot:actions-2
  ><DBControlPanelActions2
    ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
      Profile </DBButton
    ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
      Notification </DBButton
    ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
      Help
    </DBButton></DBControlPanelActions2
  ></template
>`},render:e=>({components:{DBControlPanelDesktop:d,DBButton:r,DBControlPanelActions1:o,DBControlPanelActions2:s,DBControlPanelBrand:l,DBControlPanelNavigationItem:h,DBControlPanelNavigation:m},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBControlPanelDesktop v-bind="args"   >${e.default}</DBControlPanelDesktop></div>`})},w={args:{orientation:`horizontal`,default:`<DBControlPanelNavigation aria-label="Without Application Name" v-bind="{}"
  ><DBControlPanelNavigationItem icon="x_placeholder"
    ><a href="#">Without Application Name</a></DBControlPanelNavigationItem
  ><DBControlPanelNavigationItem icon="x_placeholder" :disabled="true"
    ><a href="#"
      >Without Application Name disabled</a
    ></DBControlPanelNavigationItem
  ></DBControlPanelNavigation
><template v-slot:brand><DBControlPanelBrand></DBControlPanelBrand></template>`},render:e=>({components:{DBControlPanelDesktop:d,DBButton:r,DBControlPanelActions1:o,DBControlPanelActions2:s,DBControlPanelBrand:l,DBControlPanelNavigationItem:h,DBControlPanelNavigation:m},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBControlPanelDesktop v-bind="args"   >${e.default}</DBControlPanelDesktop></div>`})},T={args:{orientation:`horizontal`,default:`<template v-slot:brand><DBControlPanelBrand></DBControlPanelBrand></template>`},render:e=>({components:{DBControlPanelDesktop:d,DBButton:r,DBControlPanelActions1:o,DBControlPanelActions2:s,DBControlPanelBrand:l,DBControlPanelNavigationItem:h,DBControlPanelNavigation:m},setup(){return{args:e}},template:`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBControlPanelDesktop v-bind="args"   >${e.default}</DBControlPanelDesktop></div>`})},E=[`WithApplicationNameNavigation`,`WithoutNavigation`,`WithoutNavigationActions1Actions2`,`WithoutNavigationActions1`,`WithoutNavigationActions2`,`WithoutApplicationName`,`WithoutApplicationNameNavigation`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    "orientation": "horizontal",
    "default": \`<DBControlPanelNavigation
  aria-label="With Application Name + Navigation"
  v-bind="{}"
  ><DBControlPanelNavigationItem icon="x_placeholder"
    ><a href="#"
      >With Application Name + Navigation</a
    ></DBControlPanelNavigationItem
  ><DBControlPanelNavigationItem icon="x_placeholder" :disabled="true"
    ><a href="#"
      >With Application Name disabled</a
    ></DBControlPanelNavigationItem
  ></DBControlPanelNavigation
><template v-slot:brand
  ><DBControlPanelBrand data-logo="db-systel"></DBControlPanelBrand
></template>\`
  },
  render: (args: any) => ({
    components: {
      DBControlPanelDesktop,
      DBButton,
      DBControlPanelActions1,
      DBControlPanelActions2,
      DBControlPanelBrand,
      DBControlPanelNavigationItem,
      DBControlPanelNavigation
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBControlPanelDesktop v-bind="args"   >\${args.default}</DBControlPanelDesktop></div>\`
  })
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    "orientation": "horizontal",
    "default": \`<template v-slot:brand
  ><DBControlPanelBrand data-logo="db-systel"></DBControlPanelBrand
></template>\`
  },
  render: (args: any) => ({
    components: {
      DBControlPanelDesktop,
      DBButton,
      DBControlPanelActions1,
      DBControlPanelActions2,
      DBControlPanelBrand,
      DBControlPanelNavigationItem,
      DBControlPanelNavigation
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBControlPanelDesktop v-bind="args"   >\${args.default}</DBControlPanelDesktop></div>\`
  })
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    "orientation": "horizontal",
    "default": \`<template v-slot:brand
  ><DBControlPanelBrand data-logo="db-systel"></DBControlPanelBrand></template
><template v-slot:actions-1
  ><DBControlPanelActions1
    ><DBButton icon="magnifying_glass" variant="ghost" :noText="true">
      Search
    </DBButton></DBControlPanelActions1
  ></template
><template v-slot:actions-2
  ><DBControlPanelActions2
    ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
      Profile </DBButton
    ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
      Notification </DBButton
    ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
      Help
    </DBButton></DBControlPanelActions2
  ></template
>\`
  },
  render: (args: any) => ({
    components: {
      DBControlPanelDesktop,
      DBButton,
      DBControlPanelActions1,
      DBControlPanelActions2,
      DBControlPanelBrand,
      DBControlPanelNavigationItem,
      DBControlPanelNavigation
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBControlPanelDesktop v-bind="args"   >\${args.default}</DBControlPanelDesktop></div>\`
  })
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    "orientation": "horizontal",
    "default": \`<template v-slot:brand
  ><DBControlPanelBrand data-logo="db-systel"></DBControlPanelBrand></template
><template v-slot:actions-1
  ><DBControlPanelActions1
    ><DBButton icon="magnifying_glass" variant="ghost" :noText="true">
      Search
    </DBButton></DBControlPanelActions1
  ></template
>\`
  },
  render: (args: any) => ({
    components: {
      DBControlPanelDesktop,
      DBButton,
      DBControlPanelActions1,
      DBControlPanelActions2,
      DBControlPanelBrand,
      DBControlPanelNavigationItem,
      DBControlPanelNavigation
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBControlPanelDesktop v-bind="args"   >\${args.default}</DBControlPanelDesktop></div>\`
  })
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    "orientation": "horizontal",
    "default": \`<template v-slot:brand
  ><DBControlPanelBrand data-logo="db-systel"></DBControlPanelBrand></template
><template v-slot:actions-2
  ><DBControlPanelActions2
    ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
      Profile </DBButton
    ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
      Notification </DBButton
    ><DBButton icon="x_placeholder" variant="ghost" :noText="true">
      Help
    </DBButton></DBControlPanelActions2
  ></template
>\`
  },
  render: (args: any) => ({
    components: {
      DBControlPanelDesktop,
      DBButton,
      DBControlPanelActions1,
      DBControlPanelActions2,
      DBControlPanelBrand,
      DBControlPanelNavigationItem,
      DBControlPanelNavigation
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBControlPanelDesktop v-bind="args"   >\${args.default}</DBControlPanelDesktop></div>\`
  })
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    "orientation": "horizontal",
    "default": \`<DBControlPanelNavigation aria-label="Without Application Name" v-bind="{}"
  ><DBControlPanelNavigationItem icon="x_placeholder"
    ><a href="#">Without Application Name</a></DBControlPanelNavigationItem
  ><DBControlPanelNavigationItem icon="x_placeholder" :disabled="true"
    ><a href="#"
      >Without Application Name disabled</a
    ></DBControlPanelNavigationItem
  ></DBControlPanelNavigation
><template v-slot:brand><DBControlPanelBrand></DBControlPanelBrand></template>\`
  },
  render: (args: any) => ({
    components: {
      DBControlPanelDesktop,
      DBButton,
      DBControlPanelActions1,
      DBControlPanelActions2,
      DBControlPanelBrand,
      DBControlPanelNavigationItem,
      DBControlPanelNavigation
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBControlPanelDesktop v-bind="args"   >\${args.default}</DBControlPanelDesktop></div>\`
  })
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    "orientation": "horizontal",
    "default": \`<template v-slot:brand><DBControlPanelBrand></DBControlPanelBrand></template>\`
  },
  render: (args: any) => ({
    components: {
      DBControlPanelDesktop,
      DBButton,
      DBControlPanelActions1,
      DBControlPanelActions2,
      DBControlPanelBrand,
      DBControlPanelNavigationItem,
      DBControlPanelNavigation
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  width: '100%',
  display: 'block'
}"  ><DBControlPanelDesktop v-bind="args"   >\${args.default}</DBControlPanelDesktop></div>\`
  })
}`,...T.parameters?.docs?.source}}}})))()}export{S as a,g as c,b as i,D as l,w as n,x as o,T as r,C as s,y as t};