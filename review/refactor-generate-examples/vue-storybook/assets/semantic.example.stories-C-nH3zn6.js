import{_ as t}from"./notification-CrrTKhA-.js";import"./iframe-BqCYe9gC.js";import"./preload-helper-_n2GBM2K.js";import"./constants-BMPlMwqI.js";import"./index-B7howPqP.js";import"./button-BND3SCu0.js";const{fn:m}=__STORYBOOK_MODULE_TEST__,g={title:"Components/DBNotification/Semantic",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{headline:{control:"text"},showIcon:{control:"boolean"},variant:{control:"select",options:["docked","standalone","overlay"]},semantic:{control:"select",options:["adaptive","neutral","critical","informational","warning","successful"]},closeable:{control:"boolean"},linkVariant:{control:"select",options:["block","inline"]},showHeadline:{control:"boolean"},showTimestamp:{control:"boolean"},timestamp:{control:"text"},ariaLive:{control:"select",options:["assertive","polite","off"]},text:{control:"text"},role:{control:"text"},closeButtonId:{control:"text"},closeButtonText:{control:"text"},delay:{control:"select",options:["none","slow","fast"]},animation:{control:"boolean"},width:{control:"select",options:["auto","fixed"]},id:{control:"text"},autofocus:{control:"boolean"},onClose:{action:"onClose"}}},e={args:{headline:"Headline",default:"(Default) Adaptive"},render:n=>({components:{DBNotification:t},setup(){return{args:n}},template:`<div  :style="{
  width: '300px'
}"  ><DBNotification v-bind="args"   >${n.default}</DBNotification></div>`})},a={args:{semantic:"neutral",headline:"Headline",default:"Neutral"},render:n=>({components:{DBNotification:t},setup(){return{args:n}},template:`<div  :style="{
  width: '300px'
}"  ><DBNotification v-bind="args"   >${n.default}</DBNotification></div>`})},i={args:{semantic:"critical",headline:"Headline",default:"Critical"},render:n=>({components:{DBNotification:t},setup(){return{args:n}},template:`<div  :style="{
  width: '300px'
}"  ><DBNotification v-bind="args"   >${n.default}</DBNotification></div>`})},o={args:{semantic:"informational",headline:"Headline",default:"Informational"},render:n=>({components:{DBNotification:t},setup(){return{args:n}},template:`<div  :style="{
  width: '300px'
}"  ><DBNotification v-bind="args"   >${n.default}</DBNotification></div>`})},r={args:{semantic:"successful",headline:"Headline",default:"Successful"},render:n=>({components:{DBNotification:t},setup(){return{args:n}},template:`<div  :style="{
  width: '300px'
}"  ><DBNotification v-bind="args"   >${n.default}</DBNotification></div>`})},s={args:{semantic:"warning",headline:"Headline",default:"Warning"},render:n=>({components:{DBNotification:t},setup(){return{args:n}},template:`<div  :style="{
  width: '300px'
}"  ><DBNotification v-bind="args"   >${n.default}</DBNotification></div>`})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    "headline": "Headline",
    "default": \`(Default) Adaptive\`
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
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    "semantic": "neutral",
    "headline": "Headline",
    "default": \`Neutral\`
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
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    "semantic": "critical",
    "headline": "Headline",
    "default": \`Critical\`
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
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    "semantic": "informational",
    "headline": "Headline",
    "default": \`Informational\`
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
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    "semantic": "successful",
    "headline": "Headline",
    "default": \`Successful\`
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
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    "semantic": "warning",
    "headline": "Headline",
    "default": \`Warning\`
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
}`,...s.parameters?.docs?.source}}};const v=["DefaultAdaptive","Neutral","Critical","Informational","Successful","Warning"];export{i as Critical,e as DefaultAdaptive,o as Informational,a as Neutral,r as Successful,s as Warning,v as __namedExportsOrder,g as default};
