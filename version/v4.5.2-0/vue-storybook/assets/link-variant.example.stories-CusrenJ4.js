import{_ as i}from"./link-DR0Drq3I.js";import{_ as o}from"./notification-D2D7yYuV.js";import"./iframe-DzmCn9cU.js";import"./preload-helper-f7VG_GAS.js";import"./index-B2WiKbs4.js";import"./constants-y2N5m1XS.js";import"./button-CxQh_jy2.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,f={title:"Components/DBNotification/Link Variant",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{headline:{control:"text"},showIcon:{control:"boolean"},variant:{control:"select",options:["docked","standalone","overlay"]},semantic:{control:"select",options:["adaptive","neutral","critical","informational","warning","successful"]},closeable:{control:"boolean"},linkVariant:{control:"select",options:["block","inline"]},showHeadline:{control:"boolean"},showTimestamp:{control:"boolean"},timestamp:{control:"text"},ariaLive:{control:"select",options:["assertive","polite","off"]},text:{control:"text"},role:{control:"text"},closeButtonId:{control:"text"},closeButtonText:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onClose:{action:"onClose"}}},n={args:{linkVariant:"block",default:`(Default) Block<template v-slot:link
  ><DBLink href="#">Textlink</DBLink></template
>`},render:t=>({components:{DBNotification:o,DBLink:i},setup(){return{args:t}},template:`<div  :style="{
  width: '300px'
}"  ><DBNotification v-bind="args"   >${t.default}</DBNotification></div>`})},e={args:{linkVariant:"inline",default:'Inline<template v-slot:link><DBLink href="#">Textlink</DBLink></template>'},render:t=>({components:{DBNotification:o,DBLink:i},setup(){return{args:t}},template:`<div  :style="{
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
}`,...n.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const u=["DefaultBlock","Inline"];export{n as DefaultBlock,e as Inline,u as __namedExportsOrder,f as default};
