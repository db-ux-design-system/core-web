import{_ as n}from"./notification-CrrTKhA-.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./constants-BMPlMwqI.js";import"./index-B7howPqP.js";import"./button-BND3SCu0.js";const{fn:d}=__STORYBOOK_MODULE_TEST__,p={title:"Components/DBNotification/Closeable",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{headline:{control:"text"},showIcon:{control:"boolean"},variant:{control:"select",options:["docked","standalone","overlay"]},semantic:{control:"select",options:["adaptive","neutral","critical","informational","warning","successful"]},closeable:{control:"boolean"},linkVariant:{control:"select",options:["block","inline"]},showHeadline:{control:"boolean"},showTimestamp:{control:"boolean"},timestamp:{control:"text"},ariaLive:{control:"select",options:["assertive","polite","off"]},text:{control:"text"},role:{control:"text"},closeButtonId:{control:"text"},closeButtonText:{control:"text"},delay:{control:"select",options:["none","slow","fast"]},animation:{control:"boolean"},width:{control:"select",options:["auto","fixed"]},id:{control:"text"},autofocus:{control:"boolean"},onClose:{action:"onClose"}}},o={args:{closeable:!1,default:"(Default) False"},render:t=>({components:{DBNotification:n},setup(){return{args:t}},template:`<div  :style="{
  width: '300px'
}"  ><DBNotification v-bind="args"   >${t.default}</DBNotification></div>`})},e={args:{closeable:!0,default:"True"},render:t=>({components:{DBNotification:n},setup(){return{args:t}},template:`<div  :style="{
  width: '300px'
}"  ><DBNotification v-bind="args"   >${t.default}</DBNotification></div>`})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "closeable": false,
    "default": \`(Default) False\`
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
    "closeable": true,
    "default": \`True\`
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
}`,...e.parameters?.docs?.source}}};const u=["DefaultFalse","True"];export{o as DefaultFalse,e as True,u as __namedExportsOrder,p as default};
