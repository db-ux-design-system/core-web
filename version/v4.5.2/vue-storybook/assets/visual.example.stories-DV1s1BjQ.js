import{_ as n}from"./notification-CbF-vtfs.js";import"./iframe-tX0YdFU8.js";import"./preload-helper-CuQcqXYT.js";import"./constants-y2N5m1XS.js";import"./index-Bpz0UvTb.js";import"./button-Du_Qdieu.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,p={title:"Components/DBNotification/Visual",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{headline:{control:"text"},showIcon:{control:"boolean"},variant:{control:"select",options:["docked","standalone","overlay"]},semantic:{control:"select",options:["adaptive","neutral","critical","informational","warning","successful"]},closeable:{control:"boolean"},linkVariant:{control:"select",options:["block","inline"]},showHeadline:{control:"boolean"},showTimestamp:{control:"boolean"},timestamp:{control:"text"},ariaLive:{control:"select",options:["assertive","polite","off"]},text:{control:"text"},role:{control:"text"},closeButtonId:{control:"text"},closeButtonText:{control:"text"},id:{control:"text"},autofocus:{control:"boolean"},onClose:{action:"onClose"}}},o={args:{icon:"information_circle",default:"(Default) Icon"},render:t=>({components:{DBNotification:n},setup(){return{args:t}},template:`<div  :style="{
  width: '300px'
}"  ><DBNotification v-bind="args"   >${t.default}</DBNotification></div>`})},e={args:{default:`Image<template v-slot:image
  ><img alt="this is a fancy placeholder" :src="getImage()"
/></template>`},render:t=>({components:{DBNotification:n},setup(){return{args:t}},template:`<div  :style="{
  width: '300px'
}"  ><DBNotification v-bind="args"   >${t.default}</DBNotification></div>`})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "icon": "information_circle",
    "default": \`(Default) Icon\`
  },
  render: (args: any) => ({
    components: {
      DBNotification
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
}`,...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "default": \`Image<template v-slot:image
  ><img alt="this is a fancy placeholder" :src="getImage()"
/></template>\`
  },
  render: (args: any) => ({
    components: {
      DBNotification
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
}`,...e.parameters?.docs?.source}}};const d=["DefaultIcon","Image"];export{o as DefaultIcon,e as Image,d as __namedExportsOrder,p as default};
