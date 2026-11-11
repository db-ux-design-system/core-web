import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./link-BVC1eV4y.js";import{n as i,t as a}from"./notification--D3wWE8I.js";var o=t({Text:()=>l,TextHeadline:()=>f,TextHeadlineTextlinkInlineCloseable:()=>h,TextIcon:()=>u,TextIconHeadlineTextlinkInlineCloseable:()=>g,TextPreviewImage:()=>d,TextTextlinkBlock:()=>p,TextTextlinkInline:()=>m,__namedExportsOrder:()=>_,default:()=>c}),s,c,l,u,d,f,p,m,h,g,_;function v(){return(v=e((()=>{r(),a(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBNotification/Examples - Variant:Standalone`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:s()},argTypes:{headline:{control:`text`},showIcon:{control:`boolean`},variant:{control:`select`,options:[`docked`,`standalone`,`overlay`]},semantic:{control:`select`,options:[`adaptive`,`neutral`,`critical`,`informational`,`warning`,`successful`]},closeable:{control:`boolean`},linkVariant:{control:`select`,options:[`block`,`inline`]},showHeadline:{control:`boolean`},showTimestamp:{control:`boolean`},timestamp:{control:`text`},ariaLive:{control:`select`,options:[`assertive`,`polite`,`off`]},text:{control:`text`},role:{control:`text`},closeButtonId:{control:`text`},closeButtonText:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`}}},l={args:{variant:`standalone`,default:`Text`},render:e=>({components:{DBNotification:i,DBLink:n},setup(){return{args:e}},template:`<div  :style="{
  width: '300px'
}"  ><DBNotification v-bind="args"   >${e.default}</DBNotification></div>`})},u={args:{icon:`information_circle`,variant:`standalone`,default:`Text & Icon`},render:e=>({components:{DBNotification:i,DBLink:n},setup(){return{args:e}},template:`<div  :style="{
  width: '300px'
}"  ><DBNotification v-bind="args"   >${e.default}</DBNotification></div>`})},d={args:{variant:`standalone`,default:`Text & Preview Image<template v-slot:image
  ><img alt="this is a fancy placeholder" src="assets/images/placeholder.jpg"
/></template>`},render:e=>({components:{DBNotification:i,DBLink:n},setup(){return{args:e}},template:`<div  :style="{
  width: '300px'
}"  ><DBNotification v-bind="args"   >${e.default}</DBNotification></div>`})},f={args:{headline:`Headline`,variant:`standalone`,default:`Text & Headline`},render:e=>({components:{DBNotification:i,DBLink:n},setup(){return{args:e}},template:`<div  :style="{
  width: '300px'
}"  ><DBNotification v-bind="args"   >${e.default}</DBNotification></div>`})},p={args:{variant:`standalone`,default:`Text & Textlink Block<template v-slot:link
  ><DBLink href="#">Textlink</DBLink></template
>`},render:e=>({components:{DBNotification:i,DBLink:n},setup(){return{args:e}},template:`<div  :style="{
  width: '300px'
}"  ><DBNotification v-bind="args"   >${e.default}</DBNotification></div>`})},m={args:{linkVariant:`inline`,variant:`standalone`,default:`Text & Textlink Inline<template v-slot:link
  ><DBLink href="#">Textlink</DBLink></template
>`},render:e=>({components:{DBNotification:i,DBLink:n},setup(){return{args:e}},template:`<div  :style="{
  width: '300px'
}"  ><DBNotification v-bind="args"   >${e.default}</DBNotification></div>`})},h={args:{headline:`Headline`,linkVariant:`inline`,variant:`standalone`,closeable:!0,default:`Text & Headline & Textlink Inline & Closeable<template v-slot:link
  ><DBLink href="#">Textlink</DBLink></template
>`},render:e=>({components:{DBNotification:i,DBLink:n},setup(){return{args:e}},template:`<div  :style="{
  width: '300px'
}"  ><DBNotification v-bind="args"   >${e.default}</DBNotification></div>`})},g={args:{icon:`information_circle`,headline:`Headline`,linkVariant:`inline`,variant:`standalone`,closeable:!0,default:`Text & Icon & Headline & Textlink Inline & Closeable<template v-slot:link
  ><DBLink href="#">Textlink</DBLink></template
>`},render:e=>({components:{DBNotification:i,DBLink:n},setup(){return{args:e}},template:`<div  :style="{
  width: '300px'
}"  ><DBNotification v-bind="args"   >${e.default}</DBNotification></div>`})},_=[`Text`,`TextIcon`,`TextPreviewImage`,`TextHeadline`,`TextTextlinkBlock`,`TextTextlinkInline`,`TextHeadlineTextlinkInlineCloseable`,`TextIconHeadlineTextlinkInlineCloseable`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "standalone",
    "default": \`Text\`
  },
  render: (args: any) => ({
    components: {
      DBNotification,
      DBLink
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  width: '300px'
}"  ><DBNotification v-bind="args"   >\${args.default}</DBNotification></div>\`
  })
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "information_circle",
    "variant": "standalone",
    "default": \`Text & Icon\`
  },
  render: (args: any) => ({
    components: {
      DBNotification,
      DBLink
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  width: '300px'
}"  ><DBNotification v-bind="args"   >\${args.default}</DBNotification></div>\`
  })
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "standalone",
    "default": \`Text & Preview Image<template v-slot:image
  ><img alt="this is a fancy placeholder" src="assets/images/placeholder.jpg"
/></template>\`
  },
  render: (args: any) => ({
    components: {
      DBNotification,
      DBLink
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  width: '300px'
}"  ><DBNotification v-bind="args"   >\${args.default}</DBNotification></div>\`
  })
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    "headline": "Headline",
    "variant": "standalone",
    "default": \`Text & Headline\`
  },
  render: (args: any) => ({
    components: {
      DBNotification,
      DBLink
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  width: '300px'
}"  ><DBNotification v-bind="args"   >\${args.default}</DBNotification></div>\`
  })
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "standalone",
    "default": \`Text & Textlink Block<template v-slot:link
  ><DBLink href="#">Textlink</DBLink></template
>\`
  },
  render: (args: any) => ({
    components: {
      DBNotification,
      DBLink
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  width: '300px'
}"  ><DBNotification v-bind="args"   >\${args.default}</DBNotification></div>\`
  })
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "linkVariant": "inline",
    "variant": "standalone",
    "default": \`Text & Textlink Inline<template v-slot:link
  ><DBLink href="#">Textlink</DBLink></template
>\`
  },
  render: (args: any) => ({
    components: {
      DBNotification,
      DBLink
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  width: '300px'
}"  ><DBNotification v-bind="args"   >\${args.default}</DBNotification></div>\`
  })
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    "headline": "Headline",
    "linkVariant": "inline",
    "variant": "standalone",
    "closeable": true,
    "default": \`Text & Headline & Textlink Inline & Closeable<template v-slot:link
  ><DBLink href="#">Textlink</DBLink></template
>\`
  },
  render: (args: any) => ({
    components: {
      DBNotification,
      DBLink
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  width: '300px'
}"  ><DBNotification v-bind="args"   >\${args.default}</DBNotification></div>\`
  })
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "information_circle",
    "headline": "Headline",
    "linkVariant": "inline",
    "variant": "standalone",
    "closeable": true,
    "default": \`Text & Icon & Headline & Textlink Inline & Closeable<template v-slot:link
  ><DBLink href="#">Textlink</DBLink></template
>\`
  },
  render: (args: any) => ({
    components: {
      DBNotification,
      DBLink
    },
    setup() {
      return {
        args
      };
    },
    template: \`<div  :style="{
  width: '300px'
}"  ><DBNotification v-bind="args"   >\${args.default}</DBNotification></div>\`
  })
}`,...g.parameters?.docs?.source}}}})))()}export{g as a,m as c,u as i,o as l,f as n,d as o,h as r,p as s,l as t,v as u};