import{_ as n}from"./notification-CrrTKhA-.js";import{_ as t}from"./link-B8BfZg0m.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./constants-BMPlMwqI.js";import"./index-B7howPqP.js";import"./button-BND3SCu0.js";const{fn:y}=__STORYBOOK_MODULE_TEST__,b={title:"Components/DBNotification/Examples - Variant:Overlay",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{headline:{control:"text"},showIcon:{control:"boolean"},variant:{control:"select",options:["docked","standalone","overlay"]},semantic:{control:"select",options:["adaptive","neutral","critical","informational","warning","successful"]},closeable:{control:"boolean"},linkVariant:{control:"select",options:["block","inline"]},showHeadline:{control:"boolean"},showTimestamp:{control:"boolean"},timestamp:{control:"text"},ariaLive:{control:"select",options:["assertive","polite","off"]},text:{control:"text"},role:{control:"text"},closeButtonId:{control:"text"},closeButtonText:{control:"text"},delay:{control:"select",options:["none","slow","fast"]},animation:{control:"boolean"},width:{control:"select",options:["auto","fixed"]},id:{control:"text"},autofocus:{control:"boolean"},onClose:{action:"onClose"}}},i={args:{variant:"overlay",default:"Text"},render:e=>({components:{DBNotification:n,DBLink:t},setup(){return{args:e}},template:`<div  :style="{
  width: '300px'
}"  ><DBNotification v-bind="args"   >${e.default}</DBNotification></div>`})},a={args:{icon:"information_circle",variant:"overlay",default:"Text & Icon"},render:e=>({components:{DBNotification:n,DBLink:t},setup(){return{args:e}},template:`<div  :style="{
  width: '300px'
}"  ><DBNotification v-bind="args"   >${e.default}</DBNotification></div>`})},o={args:{variant:"overlay",default:`Text & Preview Image<template v-slot:image
  ><img alt="this is a fancy placeholder" :src="getImage()"
/></template>`},render:e=>({components:{DBNotification:n,DBLink:t},setup(){return{args:e}},template:`<div  :style="{
  width: '300px'
}"  ><DBNotification v-bind="args"   >${e.default}</DBNotification></div>`})},r={args:{headline:"Headline",variant:"overlay",default:"Text & Headline"},render:e=>({components:{DBNotification:n,DBLink:t},setup(){return{args:e}},template:`<div  :style="{
  width: '300px'
}"  ><DBNotification v-bind="args"   >${e.default}</DBNotification></div>`})},l={args:{variant:"overlay",linkVariant:"inline",default:`Text & Textlink Inline<template v-slot:link
  ><DBLink href="#">Textlink</DBLink></template
>`},render:e=>({components:{DBNotification:n,DBLink:t},setup(){return{args:e}},template:`<div  :style="{
  width: '300px'
}"  ><DBNotification v-bind="args"   >${e.default}</DBNotification></div>`})},s={args:{variant:"overlay",linkVariant:"block",default:`Text & Textlink Block<template v-slot:link
  ><DBLink href="#">Textlink</DBLink></template
>`},render:e=>({components:{DBNotification:n,DBLink:t},setup(){return{args:e}},template:`<div  :style="{
  width: '300px'
}"  ><DBNotification v-bind="args"   >${e.default}</DBNotification></div>`})},c={args:{variant:"overlay",linkVariant:"block",timestamp:"10 min ago",showTimestamp:!0,default:`Text & Textlink Block & Timed<template v-slot:link
  ><DBLink href="#">Textlink</DBLink></template
>`},render:e=>({components:{DBNotification:n,DBLink:t},setup(){return{args:e}},template:`<div  :style="{
  width: '300px'
}"  ><DBNotification v-bind="args"   >${e.default}</DBNotification></div>`})},d={args:{headline:"Headline",variant:"overlay",linkVariant:"inline",closeable:!0,default:`Text & Headline & Textlink Inline & Closeable<template v-slot:link
  ><DBLink href="#">Textlink</DBLink></template
>`},render:e=>({components:{DBNotification:n,DBLink:t},setup(){return{args:e}},template:`<div  :style="{
  width: '300px'
}"  ><DBNotification v-bind="args"   >${e.default}</DBNotification></div>`})},m={args:{icon:"information_circle",headline:"Headline",variant:"overlay",linkVariant:"inline",closeable:!0,default:`Text & Icon & Headline & Textlink Inline & Closeable<template v-slot:link
  ><DBLink href="#">Textlink</DBLink></template
>`},render:e=>({components:{DBNotification:n,DBLink:t},setup(){return{args:e}},template:`<div  :style="{
  width: '300px'
}"  ><DBNotification v-bind="args"   >${e.default}</DBNotification></div>`})},p={args:{variant:"overlay",timestamp:"10 min ago",showTimestamp:!0,default:"Text & Timed"},render:e=>({components:{DBNotification:n,DBLink:t},setup(){return{args:e}},template:`<div  :style="{
  width: '300px'
}"  ><DBNotification v-bind="args"   >${e.default}</DBNotification></div>`})},u={args:{variant:"overlay",timestamp:"10 min ago",closeable:!0,showTimestamp:!0,default:"Text & Timed & Closeable"},render:e=>({components:{DBNotification:n,DBLink:t},setup(){return{args:e}},template:`<div  :style="{
  width: '300px'
}"  ><DBNotification v-bind="args"   >${e.default}</DBNotification></div>`})},f={args:{headline:"Headline",variant:"overlay",timestamp:"10 min ago",closeable:!0,showTimestamp:!0,default:"Text & Headline & Timed & Closeable"},render:e=>({components:{DBNotification:n,DBLink:t},setup(){return{args:e}},template:`<div  :style="{
  width: '300px'
}"  ><DBNotification v-bind="args"   >${e.default}</DBNotification></div>`})},v={args:{icon:"information_circle",headline:"Headline",variant:"overlay",timestamp:"10 min ago",closeable:!0,showTimestamp:!0,default:"Text & Icon & Headline & Timed & Closeable"},render:e=>({components:{DBNotification:n,DBLink:t},setup(){return{args:e}},template:`<div  :style="{
  width: '300px'
}"  ><DBNotification v-bind="args"   >${e.default}</DBNotification></div>`})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "overlay",
    "default": \`Text & Preview Image<template v-slot:image
  ><img alt="this is a fancy placeholder" :src="getImage()"
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
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};const h=["Text","TextIcon","TextPreviewImage","TextHeadline","TextTextlinkInline","TextTextlinkBlock","TextTextlinkBlockTimed","TextHeadlineTextlinkInlineCloseable","TextIconHeadlineTextlinkInlineCloseable","TextTimed","TextTimedCloseable","TextHeadlineTimedCloseable","TextIconHeadlineTimedCloseable"];export{i as Text,r as TextHeadline,d as TextHeadlineTextlinkInlineCloseable,f as TextHeadlineTimedCloseable,a as TextIcon,m as TextIconHeadlineTextlinkInlineCloseable,v as TextIconHeadlineTimedCloseable,o as TextPreviewImage,s as TextTextlinkBlock,c as TextTextlinkBlockTimed,l as TextTextlinkInline,p as TextTimed,u as TextTimedCloseable,h as __namedExportsOrder,b as default};
