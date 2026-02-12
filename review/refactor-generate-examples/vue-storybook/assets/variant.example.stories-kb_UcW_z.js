import{_ as a}from"./notification-CrrTKhA-.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./constants-BMPlMwqI.js";import"./index-B7howPqP.js";import"./button-BND3SCu0.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,f={title:"Components/DBNotification/Variant",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{headline:{control:"text"},showIcon:{control:"boolean"},variant:{control:"select",options:["docked","standalone","overlay"]},semantic:{control:"select",options:["adaptive","neutral","critical","informational","warning","successful"]},closeable:{control:"boolean"},linkVariant:{control:"select",options:["block","inline"]},showHeadline:{control:"boolean"},showTimestamp:{control:"boolean"},timestamp:{control:"text"},ariaLive:{control:"select",options:["assertive","polite","off"]},text:{control:"text"},role:{control:"text"},closeButtonId:{control:"text"},closeButtonText:{control:"text"},delay:{control:"select",options:["none","slow","fast"]},animation:{control:"boolean"},width:{control:"select",options:["auto","fixed"]},id:{control:"text"},autofocus:{control:"boolean"},onClose:{action:"onClose"}}},t={args:{variant:"docked",headline:"Headline",icon:"information_circle",default:"(Default) Docked"},render:n=>({components:{DBNotification:a},setup(){return{args:n}},template:`<div  :style="{
  width: '300px'
}"  ><DBNotification v-bind="args"   >${n.default}</DBNotification></div>`})},o={args:{variant:"standalone",headline:"Headline",icon:"information_circle",default:"Standalone"},render:n=>({components:{DBNotification:a},setup(){return{args:n}},template:`<div  :style="{
  width: '300px'
}"  ><DBNotification v-bind="args"   >${n.default}</DBNotification></div>`})},e={args:{variant:"overlay",headline:"Headline",icon:"information_circle",default:"Overlay"},render:n=>({components:{DBNotification:a},setup(){return{args:n}},template:`<div  :style="{
  width: '300px'
}"  ><DBNotification v-bind="args"   >${n.default}</DBNotification></div>`})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "docked",
    "headline": "Headline",
    "icon": "information_circle",
    "default": \`(Default) Docked\`
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
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "variant": "standalone",
    "headline": "Headline",
    "icon": "information_circle",
    "default": \`Standalone\`
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
    "variant": "overlay",
    "headline": "Headline",
    "icon": "information_circle",
    "default": \`Overlay\`
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
}`,...e.parameters?.docs?.source}}};const m=["DefaultDocked","Standalone","Overlay"];export{t as DefaultDocked,e as Overlay,o as Standalone,m as __namedExportsOrder,f as default};
