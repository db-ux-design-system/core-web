import{n as e,r as t}from"./rolldown-runtime-sJBDdmOt.js";import{n,t as r}from"./link-BndHFIb2.js";import{n as i,t as a}from"./notification-BVh0se1M.js";var o=t({Text:()=>l,TextHeadline:()=>f,TextHeadlineTextlinkInlineCloseable:()=>g,TextHeadlineTimedCloseable:()=>b,TextIcon:()=>u,TextIconHeadlineTextlinkInlineCloseable:()=>_,TextIconHeadlineTimedCloseable:()=>x,TextPreviewImage:()=>d,TextTextlinkBlock:()=>m,TextTextlinkBlockTimed:()=>h,TextTextlinkInline:()=>p,TextTimed:()=>v,TextTimedCloseable:()=>y,__namedExportsOrder:()=>S,default:()=>c}),s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{r(),a(),{fn:s}=__STORYBOOK_MODULE_TEST__,c={title:`Components/DBNotification/Examples - Variant:Overlay`,component:i,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:s()},argTypes:{headline:{control:`text`},showIcon:{control:`boolean`},variant:{control:`select`,options:[`docked`,`standalone`,`overlay`]},semantic:{control:`select`,options:[`adaptive`,`neutral`,`critical`,`informational`,`warning`,`successful`]},closeable:{control:`boolean`},linkVariant:{control:`select`,options:[`block`,`inline`]},showHeadline:{control:`boolean`},showTimestamp:{control:`boolean`},timestamp:{control:`text`},ariaLive:{control:`select`,options:[`assertive`,`polite`,`off`]},text:{control:`text`},role:{control:`text`},closeButtonId:{control:`text`},closeButtonText:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`}}},l={args:{variant:`overlay`,default:`Text`},render:e=>({components:{DBNotification:i,DBLink:n},setup(){return{args:e}},template:`<div  :style="{
  width: '300px'
}"  ><DBNotification v-bind="args"   >${e.default}</DBNotification></div>`})},u={args:{icon:`information_circle`,variant:`overlay`,default:`Text & Icon`},render:e=>({components:{DBNotification:i,DBLink:n},setup(){return{args:e}},template:`<div  :style="{
  width: '300px'
}"  ><DBNotification v-bind="args"   >${e.default}</DBNotification></div>`})},d={args:{variant:`overlay`,default:`Text & Preview Image<template v-slot:image
  ><img alt="this is a fancy placeholder" src="assets/images/placeholder.jpg"
/></template>`},render:e=>({components:{DBNotification:i,DBLink:n},setup(){return{args:e}},template:`<div  :style="{
  width: '300px'
}"  ><DBNotification v-bind="args"   >${e.default}</DBNotification></div>`})},f={args:{headline:`Headline`,variant:`overlay`,default:`Text & Headline`},render:e=>({components:{DBNotification:i,DBLink:n},setup(){return{args:e}},template:`<div  :style="{
  width: '300px'
}"  ><DBNotification v-bind="args"   >${e.default}</DBNotification></div>`})},p={args:{variant:`overlay`,linkVariant:`inline`,default:`Text & Textlink Inline<template v-slot:link
  ><DBLink href="#">Textlink</DBLink></template
>`},render:e=>({components:{DBNotification:i,DBLink:n},setup(){return{args:e}},template:`<div  :style="{
  width: '300px'
}"  ><DBNotification v-bind="args"   >${e.default}</DBNotification></div>`})},m={args:{variant:`overlay`,linkVariant:`block`,default:`Text & Textlink Block<template v-slot:link
  ><DBLink href="#">Textlink</DBLink></template
>`},render:e=>({components:{DBNotification:i,DBLink:n},setup(){return{args:e}},template:`<div  :style="{
  width: '300px'
}"  ><DBNotification v-bind="args"   >${e.default}</DBNotification></div>`})},h={args:{variant:`overlay`,linkVariant:`block`,timestamp:`10 min ago`,showTimestamp:!0,default:`Text & Textlink Block & Timed<template v-slot:link
  ><DBLink href="#">Textlink</DBLink></template
>`},render:e=>({components:{DBNotification:i,DBLink:n},setup(){return{args:e}},template:`<div  :style="{
  width: '300px'
}"  ><DBNotification v-bind="args"   >${e.default}</DBNotification></div>`})},g={args:{headline:`Headline`,variant:`overlay`,linkVariant:`inline`,closeable:!0,default:`Text & Headline & Textlink Inline & Closeable<template v-slot:link
  ><DBLink href="#">Textlink</DBLink></template
>`},render:e=>({components:{DBNotification:i,DBLink:n},setup(){return{args:e}},template:`<div  :style="{
  width: '300px'
}"  ><DBNotification v-bind="args"   >${e.default}</DBNotification></div>`})},_={args:{icon:`information_circle`,headline:`Headline`,variant:`overlay`,linkVariant:`inline`,closeable:!0,default:`Text & Icon & Headline & Textlink Inline & Closeable<template v-slot:link
  ><DBLink href="#">Textlink</DBLink></template
>`},render:e=>({components:{DBNotification:i,DBLink:n},setup(){return{args:e}},template:`<div  :style="{
  width: '300px'
}"  ><DBNotification v-bind="args"   >${e.default}</DBNotification></div>`})},v={args:{variant:`overlay`,timestamp:`10 min ago`,showTimestamp:!0,default:`Text & Timed`},render:e=>({components:{DBNotification:i,DBLink:n},setup(){return{args:e}},template:`<div  :style="{
  width: '300px'
}"  ><DBNotification v-bind="args"   >${e.default}</DBNotification></div>`})},y={args:{variant:`overlay`,timestamp:`10 min ago`,closeable:!0,showTimestamp:!0,default:`Text & Timed & Closeable`},render:e=>({components:{DBNotification:i,DBLink:n},setup(){return{args:e}},template:`<div  :style="{
  width: '300px'
}"  ><DBNotification v-bind="args"   >${e.default}</DBNotification></div>`})},b={args:{headline:`Headline`,variant:`overlay`,timestamp:`10 min ago`,closeable:!0,showTimestamp:!0,default:`Text & Headline & Timed & Closeable`},render:e=>({components:{DBNotification:i,DBLink:n},setup(){return{args:e}},template:`<div  :style="{
  width: '300px'
}"  ><DBNotification v-bind="args"   >${e.default}</DBNotification></div>`})},x={args:{icon:`information_circle`,headline:`Headline`,variant:`overlay`,timestamp:`10 min ago`,closeable:!0,showTimestamp:!0,default:`Text & Icon & Headline & Timed & Closeable`},render:e=>({components:{DBNotification:i,DBLink:n},setup(){return{args:e}},template:`<div  :style="{
  width: '300px'
}"  ><DBNotification v-bind="args"   >${e.default}</DBNotification></div>`})},S=[`Text`,`TextIcon`,`TextPreviewImage`,`TextHeadline`,`TextTextlinkInline`,`TextTextlinkBlock`,`TextTextlinkBlockTimed`,`TextHeadlineTextlinkInlineCloseable`,`TextIconHeadlineTextlinkInlineCloseable`,`TextTimed`,`TextTimedCloseable`,`TextHeadlineTimedCloseable`,`TextIconHeadlineTimedCloseable`],l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "overlay",
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
    "variant": "overlay",
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
    "variant": "overlay",
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
    "variant": "overlay",
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
    "variant": "overlay",
    "linkVariant": "inline",
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
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "overlay",
    "linkVariant": "block",
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "overlay",
    "linkVariant": "block",
    "timestamp": "10 min ago",
    "showTimestamp": true,
    "default": \`Text & Textlink Block & Timed<template v-slot:link
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
    "headline": "Headline",
    "variant": "overlay",
    "linkVariant": "inline",
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "information_circle",
    "headline": "Headline",
    "variant": "overlay",
    "linkVariant": "inline",
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "overlay",
    "timestamp": "10 min ago",
    "showTimestamp": true,
    "default": \`Text & Timed\`
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "overlay",
    "timestamp": "10 min ago",
    "closeable": true,
    "showTimestamp": true,
    "default": \`Text & Timed & Closeable\`
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    "headline": "Headline",
    "variant": "overlay",
    "timestamp": "10 min ago",
    "closeable": true,
    "showTimestamp": true,
    "default": \`Text & Headline & Timed & Closeable\`
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "information_circle",
    "headline": "Headline",
    "variant": "overlay",
    "timestamp": "10 min ago",
    "closeable": true,
    "showTimestamp": true,
    "default": \`Text & Icon & Headline & Timed & Closeable\`
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
}`,...x.parameters?.docs?.source}}}})))()}export{u as a,d as c,p as d,v as f,C as h,b as i,m as l,o as m,f as n,_ as o,y as p,g as r,x as s,l as t,h as u};