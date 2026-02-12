import{_ as i}from"./notification-CrrTKhA-.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./constants-BMPlMwqI.js";import"./index-B7howPqP.js";import"./button-BND3SCu0.js";const{fn:p}=__STORYBOOK_MODULE_TEST__,u={title:"Components/DBNotification/Density",component:i,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{headline:{control:"text"},showIcon:{control:"boolean"},variant:{control:"select",options:["docked","standalone","overlay"]},semantic:{control:"select",options:["adaptive","neutral","critical","informational","warning","successful"]},closeable:{control:"boolean"},linkVariant:{control:"select",options:["block","inline"]},showHeadline:{control:"boolean"},showTimestamp:{control:"boolean"},timestamp:{control:"text"},ariaLive:{control:"select",options:["assertive","polite","off"]},text:{control:"text"},role:{control:"text"},closeButtonId:{control:"text"},closeButtonText:{control:"text"},delay:{control:"select",options:["none","slow","fast"]},animation:{control:"boolean"},width:{control:"select",options:["auto","fixed"]},id:{control:"text"},autofocus:{control:"boolean"},onClose:{action:"onClose"}}},t={args:{"data-density":"functional",headline:"Headline",icon:"information_circle",default:"functional"},render:n=>({components:{DBNotification:i},setup(){return{args:n}},template:`<div  :style="{
  width: '300px'
}"  ><DBNotification v-bind="args"   >${n.default}</DBNotification></div>`})},e={args:{"data-density":"regular",headline:"Headline",icon:"information_circle",default:"regular (Default)"},render:n=>({components:{DBNotification:i},setup(){return{args:n}},template:`<div  :style="{
  width: '300px'
}"  ><DBNotification v-bind="args"   >${n.default}</DBNotification></div>`})},o={args:{"data-density":"expressive",headline:"Headline",icon:"information_circle",default:"expressive"},render:n=>({components:{DBNotification:i},setup(){return{args:n}},template:`<div  :style="{
  width: '300px'
}"  ><DBNotification v-bind="args"   >${n.default}</DBNotification></div>`})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "functional",
    "headline": "Headline",
    "icon": "information_circle",
    "default": \`functional\`
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
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "regular",
    "headline": "Headline",
    "icon": "information_circle",
    "default": \`regular (Default)\`
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
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "data-density": "expressive",
    "headline": "Headline",
    "icon": "information_circle",
    "default": \`expressive\`
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
}`,...o.parameters?.docs?.source}}};const f=["functional","regularDefault","expressive"];export{f as __namedExportsOrder,u as default,o as expressive,t as functional,e as regularDefault};
