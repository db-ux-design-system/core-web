import{_ as e}from"./notification-CrrTKhA-.js";import{_ as t}from"./link-B8BfZg0m.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./constants-BMPlMwqI.js";import"./index-B7howPqP.js";import"./button-BND3SCu0.js";const{fn:D}=__STORYBOOK_MODULE_TEST__,k={title:"Components/DBNotification/Examples - Variant:Standalone",component:e,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{headline:{control:"text"},showIcon:{control:"boolean"},variant:{control:"select",options:["docked","standalone","overlay"]},semantic:{control:"select",options:["adaptive","neutral","critical","informational","warning","successful"]},closeable:{control:"boolean"},linkVariant:{control:"select",options:["block","inline"]},showHeadline:{control:"boolean"},showTimestamp:{control:"boolean"},timestamp:{control:"text"},ariaLive:{control:"select",options:["assertive","polite","off"]},text:{control:"text"},role:{control:"text"},closeButtonId:{control:"text"},closeButtonText:{control:"text"},delay:{control:"select",options:["none","slow","fast"]},animation:{control:"boolean"},width:{control:"select",options:["auto","fixed"]},id:{control:"text"},autofocus:{control:"boolean"},onClose:{action:"onClose"}}},i={args:{variant:"standalone",default:"Text"},render:n=>({components:{DBNotification:e,DBLink:t},setup(){return{args:n}},template:`<div  :style="{
  width: '300px'
}"  ><DBNotification v-bind="args"   >${n.default}</DBNotification></div>`})},a={args:{icon:"information_circle",variant:"standalone",default:"Text & Icon"},render:n=>({components:{DBNotification:e,DBLink:t},setup(){return{args:n}},template:`<div  :style="{
  width: '300px'
}"  ><DBNotification v-bind="args"   >${n.default}</DBNotification></div>`})},o={args:{variant:"standalone",default:`Text & Preview Image<template v-slot:image
  ><img alt="this is a fancy placeholder" :src="getImage()"
/></template>`},render:n=>({components:{DBNotification:e,DBLink:t},setup(){return{args:n}},template:`<div  :style="{
  width: '300px'
}"  ><DBNotification v-bind="args"   >${n.default}</DBNotification></div>`})},r={args:{headline:"Headline",variant:"standalone",default:"Text & Headline"},render:n=>({components:{DBNotification:e,DBLink:t},setup(){return{args:n}},template:`<div  :style="{
  width: '300px'
}"  ><DBNotification v-bind="args"   >${n.default}</DBNotification></div>`})},l={args:{variant:"standalone",default:`Text & Textlink Block<template v-slot:link
  ><DBLink href="#">Textlink</DBLink></template
>`},render:n=>({components:{DBNotification:e,DBLink:t},setup(){return{args:n}},template:`<div  :style="{
  width: '300px'
}"  ><DBNotification v-bind="args"   >${n.default}</DBNotification></div>`})},s={args:{linkVariant:"inline",variant:"standalone",default:`Text & Textlink Inline<template v-slot:link
  ><DBLink href="#">Textlink</DBLink></template
>`},render:n=>({components:{DBNotification:e,DBLink:t},setup(){return{args:n}},template:`<div  :style="{
  width: '300px'
}"  ><DBNotification v-bind="args"   >${n.default}</DBNotification></div>`})},c={args:{headline:"Headline",linkVariant:"inline",variant:"standalone",closeable:!0,default:`Text & Headline & Textlink Inline & Closeable<template v-slot:link
  ><DBLink href="#">Textlink</DBLink></template
>`},render:n=>({components:{DBNotification:e,DBLink:t},setup(){return{args:n}},template:`<div  :style="{
  width: '300px'
}"  ><DBNotification v-bind="args"   >${n.default}</DBNotification></div>`})},d={args:{icon:"information_circle",headline:"Headline",linkVariant:"inline",variant:"standalone",closeable:!0,default:`Text & Icon & Headline & Textlink Inline & Closeable<template v-slot:link
  ><DBLink href="#">Textlink</DBLink></template
>`},render:n=>({components:{DBNotification:e,DBLink:t},setup(){return{args:n}},template:`<div  :style="{
  width: '300px'
}"  ><DBNotification v-bind="args"   >${n.default}</DBNotification></div>`})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "standalone",
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
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const g=["Text","TextIcon","TextPreviewImage","TextHeadline","TextTextlinkBlock","TextTextlinkInline","TextHeadlineTextlinkInlineCloseable","TextIconHeadlineTextlinkInlineCloseable"];export{i as Text,r as TextHeadline,c as TextHeadlineTextlinkInlineCloseable,a as TextIcon,d as TextIconHeadlineTextlinkInlineCloseable,o as TextPreviewImage,l as TextTextlinkBlock,s as TextTextlinkInline,g as __namedExportsOrder,k as default};
