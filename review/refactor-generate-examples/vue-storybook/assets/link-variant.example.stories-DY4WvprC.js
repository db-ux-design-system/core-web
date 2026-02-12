import{_ as e}from"./notification-CrrTKhA-.js";import{_ as i}from"./link-B8BfZg0m.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./constants-BMPlMwqI.js";import"./index-B7howPqP.js";import"./button-BND3SCu0.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,f={title:"Components/DBNotification/Link Variant",component:e,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{headline:{control:"text"},showIcon:{control:"boolean"},variant:{control:"select",options:["docked","standalone","overlay"]},semantic:{control:"select",options:["adaptive","neutral","critical","informational","warning","successful"]},closeable:{control:"boolean"},linkVariant:{control:"select",options:["block","inline"]},showHeadline:{control:"boolean"},showTimestamp:{control:"boolean"},timestamp:{control:"text"},ariaLive:{control:"select",options:["assertive","polite","off"]},text:{control:"text"},role:{control:"text"},closeButtonId:{control:"text"},closeButtonText:{control:"text"},delay:{control:"select",options:["none","slow","fast"]},animation:{control:"boolean"},width:{control:"select",options:["auto","fixed"]},id:{control:"text"},autofocus:{control:"boolean"},onClose:{action:"onClose"}}},n={args:{linkVariant:"block",default:`(Default) Block<template v-slot:link
  ><DBLink href="#">Textlink</DBLink></template
>`},render:t=>({components:{DBNotification:e,DBLink:i},setup(){return{args:t}},template:`<div  :style="{
  width: '300px'
}"  ><DBNotification v-bind="args"   >${t.default}</DBNotification></div>`})},o={args:{linkVariant:"inline",default:'Inline<template v-slot:link><DBLink href="#">Textlink</DBLink></template>'},render:t=>({components:{DBNotification:e,DBLink:i},setup(){return{args:t}},template:`<div  :style="{
  width: '300px'
}"  ><DBNotification v-bind="args"   >${t.default}</DBNotification></div>`})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    "linkVariant": "block",
    "default": \`(Default) Block<template v-slot:link
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
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "linkVariant": "inline",
    "default": \`Inline<template v-slot:link><DBLink href="#">Textlink</DBLink></template>\`
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
}`,...o.parameters?.docs?.source}}};const u=["DefaultBlock","Inline"];export{n as DefaultBlock,o as Inline,u as __namedExportsOrder,f as default};
