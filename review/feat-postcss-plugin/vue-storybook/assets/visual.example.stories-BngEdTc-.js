import{n as e}from"./chunk-BneVvdWh.js";import{p as t,t as n}from"./src-DzOr8I67.js";var r,i,a,o,s;e((()=>{n(),{fn:r}=__STORYBOOK_MODULE_TEST__,i={title:`Components/DBNotification/Visual`,component:t,parameters:{layout:`centered`},tags:[`autodocs`],args:{onClose:r()},argTypes:{headline:{control:`text`},showIcon:{control:`boolean`},variant:{control:`select`,options:[`docked`,`standalone`,`overlay`]},semantic:{control:`select`,options:[`adaptive`,`neutral`,`critical`,`informational`,`warning`,`successful`]},closeable:{control:`boolean`},linkVariant:{control:`select`,options:[`block`,`inline`]},showHeadline:{control:`boolean`},showTimestamp:{control:`boolean`},timestamp:{control:`text`},ariaLive:{control:`select`,options:[`assertive`,`polite`,`off`]},text:{control:`text`},role:{control:`text`},closeButtonId:{control:`text`},closeButtonText:{control:`text`},id:{control:`text`},autofocus:{control:`boolean`},onClose:{action:`onClose`}}},a={args:{icon:`information_circle`,default:`(Default) Icon`},render:e=>({components:{DBNotification:t},setup(){return{args:e}},template:`<div  :style="{
  width: '300px'
}"  ><DBNotification v-bind="args"   >${e.default}</DBNotification></div>`})},o={args:{default:`Image<template v-slot:image
  ><img alt="this is a fancy placeholder" :src="getImage()"
/></template>`},render:e=>({components:{DBNotification:t},setup(){return{args:e}},template:`<div  :style="{
  width: '300px'
}"  ><DBNotification v-bind="args"   >${e.default}</DBNotification></div>`})},a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}},s=[`DefaultIcon`,`Image`]}))();export{a as DefaultIcon,o as Image,s as __namedExportsOrder,i as default};